export default function QuoteCard({ quote, isLoading, error, isLiked, onFetchNew, onToggleLike }) {
  if (isLoading) {
    return (
      <div className="the_floating_card">
        <div className="flex flex-col items-center justify-center py-16 space-y-6 animate-pulse">
          <div className="text-4xl opacity-50 text-zinc-600">🏛️</div>
          <p className="text-lg text-zinc-500 font-medium uppercase tracking-widest">Consulting the Oracle...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="the_floating_card">
        <div className="text-5xl mb-6 opacity-40">⚔️</div>
        <h3 className="text-2xl font-normal text-zinc-300 mb-4 tracking-wide text-center">There is no knowledge here.</h3>
        <p className="text-zinc-500 mb-10 text-center">{error}</p>
        <div className="flex justify-center">
            <button 
              className="the_clicky_button"
              onClick={onFetchNew}
            >
              Seek Again
            </button>
        </div>
      </div>
    );
  }

  if (!quote) return null;

  return (
    <div className="the_floating_card group">
      <div className="the_big_quote_marks left-4 top-0">"</div>
      <div className="the_big_quote_marks right-4 bottom-[-1rem] rotate-180">"</div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="the_actual_quote_text">
          {quote.content}
        </div>
        
        <div className="flex items-center justify-center mb-16 opacity-80">
          <div className="the_divider_thing"></div>
          <div className="the_author_name">
            {quote.author}
          </div>
          <div className="the_divider_thing"></div>
        </div>
        
        <div className="bhaaaa">
          <button 
            className="the_clicky_button" 
            onClick={onFetchNew} 
            disabled={isLoading}
          >
            <span>📜</span> Next Quote
          </button>
          
          <button 
            className={`the_save_button ${
              isLiked ? 'the_saved_state' : 'the_unsaved_state'
            }`}
            onClick={onToggleLike}
          >
            <span className={`text-xl ${isLiked ? '' : 'grayscale opacity-50'}`}>📍</span> 
            {isLiked ? 'Vaulted Quote' : 'Vault Quote'}
          </button>
        </div>
      </div>
    </div>
  );
}
