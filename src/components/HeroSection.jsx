export default function HeroSection({ backgroundImageUrl, onScrollClick }) {
  return (
    <div 
      className="the_big_hero_box bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="the_dark_overlay"></div>

      <div className="the_hero_content">
        <span className="text-4xl md:text-5xl mb-6 block opacity-70">🦅</span>
        <h1 className="the_main_hero_text">
          Wisdom of the Ancients
        </h1>
        <p className="the_hero_subtext">
          "Waste no more time arguing about what a good man should be. Be one." <br />
          <span className="text-sm mt-4 block text-zinc-500 uppercase tracking-[0.2em] not-italic">— Marcus Aurelius</span>
        </p>
      </div>
      
      <button 
        onClick={onScrollClick}
        className="the_scrollthing"
        aria-label="Descend to quotes"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  );
}
