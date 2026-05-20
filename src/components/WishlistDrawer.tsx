import React, { useState } from 'react';
import { X, Trash2, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistedProducts: Product[];
  onRemoveFromWishlist: (id: string) => void;
  onClearWishlist: () => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistedProducts,
  onRemoveFromWishlist,
  onClearWishlist
}: WishlistDrawerProps) {
  const [reserveName, setReserveName] = useState('');
  const [reserveEmail, setReserveEmail] = useState('');
  const [isReserved, setIsReserved] = useState(false);

  if (!isOpen) return null;

  const handleHoldSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reserveName.trim() && reserveEmail.trim()) {
      setIsReserved(true);
      setTimeout(() => {
        // Reset state after success displays
        setIsReserved(false);
        setReserveName('');
        setReserveEmail('');
        onClearWishlist();
        onClose();
      }, 5500);
    }
  };

  return (
    <div id="wishlist-overlay" className="fixed inset-0 z-50 flex justify-end bg-warm-brown/60 backdrop-blur-sm animate-fadeIn">
      {/* Click outside target */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />

      <div 
        id="wishlist-drawer-content"
        className="w-full max-w-md bg-cream h-full border-l-4 border-sand shadow-2xl p-6 flex flex-col justify-between overflow-y-auto grain-overlay animate-slideLeft"
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-warm-brown/15 pb-4 mb-4">
            <div>
              <h2 className="font-serif text-xl font-bold text-warm-brown flex items-center gap-1.5">
                <Sparkles className="h-4.5 w-4.5 text-terracotta" />
                Saved Gems
              </h2>
              <p className="font-sans text-[11px] text-warm-brown/60">Your handpicked curation</p>
            </div>
            
            <button
              id="close-wishlist-btn"
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-warm-brown/10 hover:text-terracotta transition-colors duration-200 cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Current Wishlist Items */}
          {wishlistedProducts.length === 0 ? (
            <div className="py-12 text-center text-warm-brown/60 text-sm space-y-4">
              <p className="font-sans italic">"The racks are quiet. No threads in sight..."</p>
              <div className="h-20 w-20 mx-auto rounded-full bg-sand/30 flex items-center justify-center text-terracotta">
                <AlertCircle className="h-10 w-10" />
              </div>
              <button
                onClick={onClose}
                className="text-xs font-sans font-bold uppercase tracking-wider text-terracotta underline"
              >
                Go find some items
              </button>
            </div>
          ) : (
            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
              <div className="flex justify-between items-center text-xs font-mono">
                <span>{wishlistedProducts.length} unique drops saved</span>
                <button 
                  onClick={onClearWishlist}
                  className="text-terracotta hover:underline font-bold"
                >
                  Clear All
                </button>
              </div>

              {wishlistedProducts.map((product) => (
                <div 
                  key={product.id}
                  id={`wishlist-row-${product.id}`}
                  className="flex items-center gap-3 p-2 rounded-lg bg-cream border border-warm-brown/10 hover:border-warm-brown/25 shadow-sm transition-all duration-250 animate-fadeIn"
                >
                  {/* Thumb image */}
                  <div className="h-16 w-16 shrink-0 rounded-md overflow-hidden bg-sand/40 border border-warm-brown/10">
                    <img 
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="sepia-[0.1] h-full w-full object-cover"
                    />
                  </div>

                  {/* Descriptions */}
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[9px] text-warm-brown/50 uppercase">{product.brand}</p>
                    <h4 className="font-serif text-sm font-bold text-warm-brown truncate leading-tight mt-0.5">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="font-mono text-xs font-bold text-terracotta">${product.price}.00</span>
                      <span className="text-[10px] font-sans bg-sand/50 text-warm-brown px-1.5 py-0.2 rounded font-semibold">
                        {product.size}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveFromWishlist(product.id)}
                    className="p-1.5 rounded text-warm-brown hover:text-terracotta hover:bg-terracotta/10 transition-colors"
                    aria-label={`Remove ${product.name} from saved`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Hold Reservations or Actions */}
        {wishlistedProducts.length > 0 && (
          <div className="border-t border-warm-brown/20 pt-4 mt-4 bg-sand/15 p-4 rounded-xl relative">
            {isReserved ? (
              <div className="text-center py-6 space-y-2 animate-fadeIn">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-olive text-cream mb-2">
                  <Sparkles className="h-6 w-6 animate-pulse" />
                </div>
                <h3 className="font-serif text-lg font-bold text-olive">Threads Locked & Secured!</h3>
                <p className="font-sans text-xs text-warm-brown/85 leading-relaxed">
                  G'day! Clara and Marcus have set aside your items in our Fitzroy flagship store. Check your email for reservation ticket <strong>#TC-{Math.floor(1000 + Math.random() * 9000)}</strong>.
                </p>
                <p className="font-sans font-bold text-[11px] text-terracotta">We have snacks and dog pats from Ziggy waiting!</p>
              </div>
            ) : (
              <form onSubmit={handleHoldSubmit} className="space-y-3">
                <div className="flex items-start gap-2 text-xs">
                  <MapPin className="h-4 w-4 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-warm-brown block font-serif">ThreadCycle Hold-My-Gems System 🦘</strong>
                    <span className="text-warm-brown/70 block">
                      Since each item is physically in Fitzroy, you can reserve these pieces for up to 48 hours to come try them on or pay in-store!
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <input
                    type="text"
                    required
                    value={reserveName}
                    onChange={(e) => setReserveName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full rounded-md border border-warm-brown/30 bg-cream px-3 py-2 text-xs text-warm-brown focus:border-terracotta focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    value={reserveEmail}
                    onChange={(e) => setReserveEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full rounded-md border border-warm-brown/30 bg-cream px-3 py-2 text-xs text-warm-brown focus:border-terracotta focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-center py-2.5 rounded-full bg-terracotta text-cream font-sans font-bold text-xs uppercase tracking-wide shadow-md active:translate-y-0.5 transition-transform cursor-pointer"
                >
                  Hold My Selected Threads
                </button>
                <p className="text-[10px] text-center text-warm-brown/50">Zero card required. Cancel or modify anytime.</p>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
