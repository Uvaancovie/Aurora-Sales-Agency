export const Footer = () => {
  return (
    <footer className="px-10 py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/40 font-mono uppercase tracking-[0.2em] relative z-10 bg-space-950 gap-4">
      <span>Coordinates: 40.7128° N, 74.0060° W</span>
      <div className="flex gap-4 md:gap-8">
        <span className="text-white/60">System Status: Active</span>
        <span>Aurora Sales Agency &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};
