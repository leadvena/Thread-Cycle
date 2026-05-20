import React from 'react';
import { X, Heart, Sparkles, AlertCircle } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

export default function QuickViewModal({ 
  product, 
  onClose, 
  isWishlisted, 
  onToggleWishlist 
}: QuickViewModalProps) {
  if (!product) return null;

  return (
    <div id="quickview-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-brown/70 backdrop-blur-sm animate-fadeIn">
      <div 
        id="quickview-modal"
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-cream border-2 border-warm-brown p-6 md:p-8 shadow-2xl animate-scaleUp grain-overlay max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          id="close-quickview-btn"
          onClick={onClose}
          className="absolute top-4 right-4 text-warm-brown/70 hover:text-terracotta hover:scale-110 p-1.5 rounded-full hover:bg-warm-brown/10 transition-all duration-250 cursor-pointer"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Left Column: Seed Image */}
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-sand/30 border border-warm-brown/10">
            <img 
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="sepia-[0.1] h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-terracotta/5 opacity-30 mix-blend-color pointer-events-none" />
            
            <div className="absolute bottom-2 left-2 rounded-full bg-olive text-cream px-3 py-1 text-xs font-sans tracking-wide uppercase font-bold">
              {product.condition}
            </div>
            
            <div className="absolute top-2 left-2 bg-warm-brown text-cream font-mono text-[11px] px-2.5 py-0.5 tracking-widest uppercase">
              {product.size}
            </div>
          </div>

          {/* Right Column: Descriptions */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs text-olive font-semibold uppercase tracking-widest">
                {product.brand}
              </p>
              
              <h2 className="font-serif text-2xl font-extrabold text-warm-brown mt-1">
                {product.name}
              </h2>

              <p className="font-mono text-2xl font-bold text-terracotta mt-3">
                ${product.price}.00 AUD
              </p>

              <div className="mt-4 border-t border-b border-warm-brown/10 py-3 space-y-2">
                <p className="font-sans text-sm text-warm-brown/90 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-warm-brown/60">Condition Grading:</span>
                  <span className="font-semibold text-warm-brown">{product.condition}</span>
                </div>
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-warm-brown/60">Sleeve & Fit:</span>
                  <span className="font-semibold text-warm-brown">{product.size} (Unisex vintage)</span>
                </div>
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-warm-brown/60">Current Sourcing Location:</span>
                  <span className="font-semibold text-olive">Fitzroy Hub, Melbourne</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-2">
              <button
                id="modal-toggle-wishlist"
                onClick={onToggleWishlist}
                className={`flex items-center justify-center gap-2 w-full rounded-full border-2 border-terracotta px-6 py-3 font-sans font-bold text-sm transition-all duration-250 cursor-pointer ${
                  isWishlisted 
                    ? 'bg-terracotta text-cream hover:bg-terracotta/90' 
                    : 'bg-transparent text-terracotta hover:bg-terracotta/10'
                }`}
              >
                <Heart className={`h-4.5 w-4.5 ${isWishlisted ? 'fill-cream' : ''}`} />
                <span>{isWishlisted ? 'Wishlisted! Remove Saved' : 'Add to Wishlist & Tracks'}</span>
              </button>

              <div className="rounded-lg bg-sand/30 p-2.5 flex items-center gap-2 text-[11px] text-warm-brown/80 border border-sand">
                <AlertCircle className="h-4 w-4 text-terracotta shrink-0" />
                <span>Vintage items are entirely one-off. Add to wishlist to track drops, or visit Smith St to wrap it up!</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
