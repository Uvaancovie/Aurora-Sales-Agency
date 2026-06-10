import { useState, useRef, useEffect } from "react";
import Vapi from "@vapi-ai/web";
import { Mic, MicOff, X, Loader2, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const PUBLIC_KEY = "c0d5b4b9-94c0-4bdb-b6e0-5c0160d6acbc";
const ASSISTANT_ID = "26e9874e-7e57-414d-a833-ef65b8a79b2c";

export default function AuroraVoiceChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: "assistant", content: "Hi! We're currently offering a free business audit. Tap the microphone to start a voice chat and claim yours!" }
  ]);
  const [activeTranscript, setActiveTranscript] = useState<string>("");
  
  const vapiRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, activeTranscript, isOpen]);

  useEffect(() => {
    const vapi = new Vapi(PUBLIC_KEY);
    vapiRef.current = vapi;

    vapi.on("call-start", () => {
      setConnected(true);
      setConnecting(false);
      setMessages((m) => [...m, { role: "assistant", content: "Call connected. I'm listening!" }]);
    });

    vapi.on("call-end", () => {
      setConnected(false);
      setConnecting(false);
      setActiveTranscript("");
      setMessages((m) => [...m, { role: "assistant", content: "Call ended." }]);
    });

    vapi.on("message", (msg: any) => {
      if (msg?.type === "transcript") {
        if (msg.transcriptType === "partial") {
          // Show what the user or assistant is currently saying
          setActiveTranscript(msg.transcript);
        } else if (msg.transcriptType === "final") {
          // Commit the final transcript to the messages log
          setActiveTranscript("");
          setMessages((m) => [...m, { role: msg.role, content: msg.transcript }]);
        }
      }
    });

    vapi.on("error", (e: any) => {
      console.error("Vapi error:", e);
      setConnecting(false);
      setConnected(false);
      setMessages((m) => [...m, { role: "assistant", content: "Sorry, there was an error connecting to voice." }]);
    });

    return () => {
      vapi.stop();
      vapi.removeAllListeners();
    };
  }, []);

  const toggleCall = async () => {
    if (connected || connecting) {
      setConnecting(false);
      await vapiRef.current?.stop();
    } else {
      setConnecting(true);
      try {
        await vapiRef.current?.start(ASSISTANT_ID);
      } catch (err) {
        console.error("Failed to start call", err);
        setConnecting(false);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-space-900 border border-white/10 shadow-2xl rounded-2xl w-80 sm:w-96 mb-4 overflow-hidden flex flex-col"
            style={{ height: "500px" }}
          >
            {/* Header */}
            <div className="bg-primary-600 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold tracking-wider uppercase text-sm flex items-center gap-2">
                  Alex
                  {connected && <span className="flex w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>}
                </h3>
                <p className="text-primary-100 text-xs">AI Voice Assistant</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-space-950/50 relative scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                      m.role === "user" 
                        ? "bg-primary-600 text-white rounded-br-sm" 
                        : "bg-white/10 text-white border border-white/5 rounded-bl-sm backdrop-blur-md"
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {/* Active / Partial Transcript Bubble */}
              {activeTranscript && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="max-w-[80%] px-4 py-3 rounded-2xl text-sm bg-white/5 text-white/70 border border-white/5 rounded-bl-sm backdrop-blur-md italic">
                    {activeTranscript}
                    <span className="inline-block ml-1 w-1 h-4 bg-primary-400 animate-pulse align-middle"></span>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Voice Control Area */}
            <div className="p-6 bg-space-900 border-t border-white/10 flex flex-col items-center justify-center">
              <div className="relative">
                {connected && (
                  <div className="absolute inset-0 bg-red-500 rounded-full blur-[20px] opacity-40 animate-pulse"></div>
                )}
                <button 
                  onClick={toggleCall}
                  disabled={connecting}
                  className={`relative w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-all ${
                    connected 
                      ? 'bg-red-600 hover:bg-red-500 animate-pulse' 
                      : connecting
                      ? 'bg-primary-700'
                      : 'bg-primary-600 hover:bg-primary-500 hover:scale-105'
                  }`}
                >
                  {connecting ? (
                    <Loader2 className="w-7 h-7 animate-spin" />
                  ) : connected ? (
                    <MicOff className="w-7 h-7" />
                  ) : (
                    <Mic className="w-7 h-7" />
                  )}
                </button>
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-4">
                {connecting ? "Establishing Link..." : connected ? "Tap to Disconnect" : "Tap to Speak"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary-600 hover:bg-primary-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-transform hover:scale-105 active:scale-95"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
