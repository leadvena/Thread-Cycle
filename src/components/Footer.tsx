import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw, Instagram, Facebook, Mail, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenSellModal: () => void;
}

export default function Footer({ onOpenSellModal }: FooterProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  return (
    <footer id="app-footer" className="bg-warm-brown text-cream pt-16 pb-8 border-t-4 border-sand relative overflow-hidden">
      {/* Decorative Stamp Background */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] text-[180px] font-extrabold select-none pointer-events-none font-serif tracking-tighter">
        CYCLE
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sand text-warm-brown">
                <RefreshCw className="h-4.5 w-4.5 animate-spin-slow" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">
                Thread<span className="text-sand">Cycle</span>
              </span>
            </Link>
            <p className="font-serif italic text-lg text-sand/90">
              "Wear the Story."
            </p>
            <p className="font-sans text-xs text-cream/75 max-w-xs leading-relaxed">
              Curating rare vintage and pre-loved sartorial gems in Fitzroy, Melbourne. We believe your outfits should outlive fast fashion.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://instagram.com/threadcycle.au" 
                target="_blank" 
                rel="noreferrer" 
                className="text-sand hover:text-terracotta hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/threadcycle" 
                target="_blank" 
                rel="noreferrer" 
                className="text-sand hover:text-terracotta hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-md font-bold text-sand border-b border-cream/10 pb-2">Explore</h4>
            <ul className="space-y-2.5 font-sans text-sm text-cream/80">
              <li>
                <Link to="/" className="hover:text-sand hover:underline transition-colors">Home Base</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-sand hover:underline transition-colors">Shop the Racks</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sand hover:underline transition-colors">Our Vintage Story</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sand hover:underline transition-colors">Say G'day</Link>
              </li>
              <li>
                <button 
                  onClick={onOpenSellModal}
                  className="hover:text-sand hover:underline text-left text-terracotta font-semibold hover:scale-102 transition-transform duration-200 cursor-pointer"
                >
                  Sell Your Threads
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Bits */}
          <div className="space-y-4">
            <h4 className="font-serif text-md font-bold text-sand border-b border-cream/10 pb-2">Fitzroy Flagship</h4>
            <ul className="space-y-2.5 font-sans text-xs text-cream/80 leading-relaxed">
              <li>
                <strong className="text-sand block">Address</strong>
                42 Smith Street, Fitzroy VIC 3065
              </li>
              <li>
                <strong className="text-sand block">Trading Hours</strong>
                Mon–Fri: 10am–6pm<br />
                Sat: 9am–7pm | Sun: 10am–5pm
              </li>
              <li>
                <strong className="text-sand block">Phone & Mail</strong>
                (03) 9000-0000<br />
                hello@threadcycle.com.au
              </li>
            </ul>
          </div>

          {/* Compact Newsletter re-signup */}
          <div className="space-y-4">
            <h4 className="font-serif text-md font-bold text-sand border-b border-cream/10 pb-2">Postcard Snippets</h4>
            <p className="font-sans text-xs text-cream/70 leading-relaxed">
              Drop your email address below to join the inner ring. Only premium drops and invitations to our legendary swap events.
            </p>
            {isSubscribed ? (
              <div className="rounded-lg bg-olive/30 border border-olive p-3 text-xs flex items-center gap-2 text-sand animate-fadeIn">
                <Sparkles className="h-4 w-4 shrink-0" />
                <span>You're in! Check your inbox for a virtual discount voucher.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-md border border-cream/20 bg-cream/5 px-3 py-2 text-xs font-sans text-cream placeholder-cream/50 focus:border-sand focus:ring-1 focus:ring-sand focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 rounded bg-sand hover:bg-terracotta hover:text-cream text-warm-brown px-2.5 py-1 text-[10px] font-sans font-bold transition-all duration-200"
                  >
                    Join
                  </button>
                </div>
                <span className="text-[10px] text-cream/50">Sustaining style since 2019.</span>
              </form>
            )}
          </div>

        </div>

        {/* Outer Footer Copyright */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-cream/50 font-mono">
          <p>© 2026 ThreadCycle Melbourne. Sustainably made, sustainably worn.</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-cream">Sizing Guide</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-cream">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
