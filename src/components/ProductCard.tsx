import React from 'react';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onQuickView: () => void;
}

export default function ProductCard({ 
  product, 
  isWishlisted, 
  onToggleWishlist, 
  onQuickView 
}: ProductCardProps) {
  // Condition color mapping
  const getConditionStyles = (condition: string) => {
    switch(condition) {
      case 'Like New':
        return 'bg-olive text-cream';
      case 'Excellent':
        return 'bg-sand text-warm-brown';
      case 'Good':
        return 'bg-warm-brown/20 text-warm-brown';
      case 'Fair':
        return 'bg-terracotta/25 text-terracotta';
      default:
        return 'bg-sand text-warm-brown';
    }
  };

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-warm-brown/10 bg-white p-3 shadow-sm hover:shadow-xl hover:translate-y-[-6px] transition-all duration-300"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-sand/10">
        
        {/* Blur up overlay */}
        <img 
          id={`product-img-${product.id}`}
          src={product.image} 
          alt={product.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="sepia-[0.1] h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />

        {/* Terracotta/Olive Warm Color Overlay */}
        <div className="absolute inset-0 bg-terracotta/5 opacity-30 mix-blend-color group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

        {/* Condition Badge */}
        <span id={`badge-cond-${product.id}`} className="absolute top-2 left-2 rounded-md bg-cream text-olive px-2 py-0.5 text-[10px] font-sans font-bold uppercase tracking-wider shadow-sm border border-warm-brown/5">
          {product.condition}
        </span>

        {/* Size Badge */}
        <span id={`badge-size-${product.id}`} className="absolute bottom-2 left-2 rounded bg-warm-brown text-cream px-2.5 py-0.5 text-[9px] font-mono tracking-widest uppercase">
          {product.size}
        </span>

        {/* Action Overlays */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            id={`btn-qv-${product.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onQuickView();
            }}
            className="flex items-center gap-1.5 rounded-full bg-cream px-4 py-2 text-xs font-sans font-extrabold uppercase tracking-wider text-warm-brown shadow-md hover:bg-terracotta hover:text-cream transition-colors duration-200"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Wishlist Heart Icon */}
        <button
          id={`btn-wish-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist();
          }}
          className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-cream/95 text-warm-brown hover:text-terracotta hover:scale-110 active:scale-95 shadow-md transition-all duration-200"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={`h-4.5 w-4.5 transition-colors duration-200 ${isWishlisted ? 'fill-terracotta text-terracotta' : 'text-warm-brown/70'}`} 
          />
        </button>
      </div>

      {/* Product Content Details */}
      <div className="flex flex-grow flex-col pt-3 pb-1 justify-between">
        <div className="space-y-1">
          <p className="font-mono text-[9px] uppercase tracking-wider text-warm-brown/40">
            {product.brand} • {product.category}
          </p>
          <h3 className="font-serif text-sm font-black text-warm-brown line-clamp-1 group-hover:text-terracotta transition-colors duration-200">
            {product.name}
          </h3>
        </div>

        <div className="mt-2.5 flex items-baseline justify-between">
          <span className="font-sans text-sm font-black text-terracotta">
            ${product.price} AUD
          </span>
          <span className="font-sans text-[9px] text-warm-brown/50 uppercase tracking-widest">
            Vintage Gold
          </span>
        </div>
      </div>
    </div>
  );
}
