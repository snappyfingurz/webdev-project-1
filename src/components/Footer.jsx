export default function Footer() {
  return (
    <footer className="the_bottom_footer">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center gap-6">
        <div className="flex gap-4 text-xl opacity-40">
          <span>🏛️</span><span>📜</span><span>⚔️</span>
        </div>
        <p className="text-zinc-500 font-normal uppercase tracking-widest text-xs">
          Endurance <span className="text-zinc-700 mx-2">|</span> Resilience <span className="text-zinc-700 mx-2">|</span> Focus
        </p>
        <p className="text-xs text-zinc-700">© 2026 Stoic Quotes. All rights reserved.</p>
      </div>
    </footer>
  );
}