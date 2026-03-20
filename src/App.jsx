import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuoteCard from './components/QuoteCard';
import LikedQuotesList from './components/LikedQuotesList';
import Footer from './components/Footer';

export default function App() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  
  const quoteSectionRef = useRef(null);
  
  const [likedQuotes, setLikedQuotes] = useState(() => {
    try {
      const saved = localStorage.getItem('motivation_likes_cute'); // Keeping key same so user doesn't lose old likes
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to parse local storage", e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('motivation_likes_cute', JSON.stringify(likedQuotes));
  }, [likedQuotes]);

  useEffect(() => {
    fetchNewQuote();
  }, []);

  const fetchNewQuote = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const res = await fetch('https://dummyjson.com/quotes/random');
      if (!res.ok) throw new Error('Failed to fetch quote');
      
      const data = await res.json();
      setQuote({
        id: data.id,
        content: data.quote, 
        author: data.author
      });
    } catch (err) {
      setError('The oracle is silent. Could not retrieve wisdom.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleLikeFromMainCard = () => {
    if (!quote) return;
    setLikedQuotes(prevLikes => {
      const isAlreadyLiked = prevLikes.some(q => q.id === quote.id);
      if (isAlreadyLiked) {
        return prevLikes.filter(q => q.id !== quote.id);
      } else {
        return [{ ...quote, addedAt: Date.now() }, ...prevLikes];
      }
    });
  };

  const removeFromLikes = (quoteIdToRemove) => {
    setLikedQuotes(prevLikes => prevLikes.filter(q => q.id !== quoteIdToRemove));
  };

  const isCurrentQuoteLiked = quote ? likedQuotes.some(q => q.id === quote.id) : false;

  const scrollToQuotes = () => {
    quoteSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="the_whole_enchilada">
      <Navbar likeCount={likedQuotes.length} />
      
      <HeroSection 
        onScrollClick={scrollToQuotes} 
      />

      <div className="the_middle_part">
        <section ref={quoteSectionRef} className="the_quote_wrapper">
          <div className="text-center mb-12">
            <span className="the_super_small_label">
              MEMENTO MORI
            </span>
            <h2 className="the_titleee">
               Contemplate This Truth
            </h2>
          </div>
          
          <QuoteCard 
            quote={quote}
            isLoading={isLoading}
            error={error}
            isLiked={isCurrentQuoteLiked}
            onFetchNew={fetchNewQuote}
            onToggleLike={toggleLikeFromMainCard}
          />
        </section>

        <div className="flex items-center justify-center gap-6 py-6 opacity-30">
             <span className="text-xl">🏛️</span>
             <div className="h-[1px] w-32 bg-zinc-500"></div>
             <span className="text-xl">🏛️</span>
        </div>

        <section className="the_quote_wrapper font-sans">
          <LikedQuotesList 
            likedQuotes={likedQuotes} 
            onRemoveLike={removeFromLikes} 
          />
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
