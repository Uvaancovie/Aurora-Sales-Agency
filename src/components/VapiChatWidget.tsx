import { useEffect } from 'react';

export default function VapiChatWidget() {
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('#vapi-chat-script')) return;

    // Dynamically inject the Vapi widget script
    const script = document.createElement('script');
    script.id = 'vapi-chat-script';
    script.src = 'https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js';
    script.async = true;
    
    // Add it to the body
    document.body.appendChild(script);

    // Create and inject the Vapi widget custom element
    const widget = document.createElement('vapi-widget');
    widget.id = 'vapi-chat-widget';
    widget.setAttribute('public-key', 'c0d5b4b9-94c0-4bdb-b6e0-5c0160d6acbc');
    widget.setAttribute('assistant-id', '26e9874e-7e57-414d-a833-ef65b8a79b2c');
    widget.setAttribute('mode', 'chat');
    widget.setAttribute('theme', 'light');
    widget.setAttribute('position', 'bottom-right');
    
    document.body.appendChild(widget);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('#vapi-chat-script');
      const existingWidget = document.querySelector('#vapi-chat-widget');
      if (existingScript) existingScript.remove();
      if (existingWidget) existingWidget.remove();
    };
  }, []);

  return null; // This component doesn't render any React UI, it just manages the DOM injection
}
