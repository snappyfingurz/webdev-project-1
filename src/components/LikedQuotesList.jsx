import { useState } from 'react';

export default function LikedQuotesList({ likedQuotes, onRemoveLike }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuotes = likedQuotes.filter(quote => 
    quote.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    quote.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="the_collection_box">
      <div className="text-center mb-12">
         <h2 className="text-3xl font-normal text-zinc-200 mb-4 font-serif">Hall of Truths</h2>
         <p className="text-zinc-500 tracking-wide uppercase text-sm">Philosophies you have preserved.</p>
      </div>
      
      <div className="relative mb-12 max-w-2xl mx-auto">
        <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-zinc-700">🔍</span>
        <input 
          type="text" 
          className="the_search_input"
          placeholder="Seek a thought by author or words..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {likedQuotes.length === 0 ? (
        <div className="the_empty_state_box">
          <span className="text-5xl block mb-6 opacity-20">🪨</span>
          <p className="text-xl text-zinc-500 font-normal uppercase tracking-[0.1em]">The hall is barren.</p>
          <p className="text-zinc-600 mt-2 text-sm max-w-xs mx-auto">Venture above and carve some wisdom from the oracle.</p>
        </div>
      ) : filteredQuotes.length === 0 ? (
        <p className="text-center text-zinc-600 py-12 border border-zinc-900 bg-zinc-950 uppercase tracking-widest text-sm">No truth matches "{searchQuery}".</p>
      ) : (
        <ul className="space-y-4">
          {filteredQuotes.map((quote) => (
            <li key={quote.id} className="the_list_item">
              <div className="flex-1">
                <p className="text-zinc-300 text-xl font-serif italic mb-6 leading-relaxed">"{quote.content}"</p>
                <div className="flex items-center gap-4 border-t border-zinc-800/50 pt-4 w-1/3">
                    <span className="text-zinc-600 text-sm">📍</span>
                    <small className="text-zinc-500 font-bold tracking-[0.2em] text-xs uppercase">— {quote.author}</small>
                </div>
              </div>
              <div className="flex justify-end pt-4 md:pt-0 border-t md:border-t-0 border-zinc-800/50 md:border-l md:pl-8">
                <button 
                    onClick={() => onRemoveLike(quote.id)}
                    className="the_remove_btn"
                    title="Erase from the hall"
                >
                  <span>⌫</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
