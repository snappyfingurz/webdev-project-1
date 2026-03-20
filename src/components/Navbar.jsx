export default function Navbar({ likeCount }) {
  return (
    <nav className="the_top_bar_thingy">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl opacity-80">⚖️</span>
          <h1 className="the_logo_text">Stoic Quotes</h1>
        </div>
        <div>
          <span className="this_color_thing">
            <span className="text-zinc-500 text-xs tracking-widest uppercase">Vault</span> 
            <span className="text-zinc-100 font-bold ml-1">{likeCount}</span>
          </span>
        </div>
      </div>
    </nav>
  );
}
