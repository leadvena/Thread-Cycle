import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Heart, RefreshCw } from 'lucide-react';

interface NavbarProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenSellModal: () => void;
}

export default function Navbar({ wishlistCount, onOpenWishlist, onOpenSellModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full border-b border-warm-brown/10 bg-cream/90 backdrop-blur-md md:h-20 flex items-center">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          
          {/* Logo */}
          <Link id="nav-brand" to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-cream transition-transform duration-300 group-hover:rotate-180">
              <RefreshCw className="h-5 w-5" />
            </div>
            <span className="font-serif text-2xl font-black tracking-tight text-warm-brown">
              Thread<span className="text-terracotta">Cycle</span>
            </span>
          </Link>
 
          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8 font-sans text-xs font-bold uppercase tracking-wider text-warm-brown/85">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `transition-colors duration-300 hover:text-terracotta pb-1 ${isActive ? 'text-terracotta border-b-2 border-terracotta font-extrabold' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/shop" 
              className={({ isActive }) => 
                `transition-colors duration-300 hover:text-terracotta pb-1 ${isActive ? 'text-terracotta border-b-2 border-terracotta font-extrabold' : ''}`
              }
            >
              Shop
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `transition-colors duration-300 hover:text-terracotta pb-1 ${isActive ? 'text-terracotta border-b-2 border-terracotta font-extrabold' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `transition-colors duration-300 hover:text-terracotta pb-1 ${isActive ? 'text-terracotta border-b-2 border-terracotta font-extrabold' : ''}`
              }
            >
              Contact
            </NavLink>
          </nav>
 
          {/* CTAs */}
          <div className="hidden md:flex items-center gap-6">
            {/* Wishlist Trigger */}
            <button 
              id="wishlist-btn-desktop"
              onClick={onOpenWishlist}
              className="relative flex items-center justify-center p-2 text-warm-brown hover:text-terracotta transition-colors duration-200"
              aria-label="View Wishlist"
            >
              <Heart className="h-6 w-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-terracotta text-cream text-[10px] font-bold shadow-sm animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>
 
            {/* Sell Your Threads CTA */}
            <button 
              id="cta-sell-desktop"
              onClick={onOpenSellModal}
              className="rounded-full bg-terracotta px-6 py-3 font-sans text-xs font-bold uppercase tracking-wider text-cream shadow-md hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer"
            >
              Sell Your Threads
            </button>
          </div>

          {/* Mobile Right Bar Actions */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              id="wishlist-btn-mobile"
              onClick={onOpenWishlist}
              className="relative p-2 text-warm-brown hover:text-terracotta transition-colors duration-200"
              aria-label="View Wishlist"
            >
              <Heart className="h-6 w-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-cream text-[9px] font-bold shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              id="mobile-drawer-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-warm-brown hover:text-terracotta transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div id="mobile-drawer" className="md:hidden border-t border-warm-brown/10 bg-cream/95 px-4 pt-4 pb-6 shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-4 font-sans font-medium text-lg text-warm-brown/90">
            <NavLink 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `py-2 border-b border-warm-brown/5 ${isActive ? 'text-terracotta font-bold pl-2 border-l-2 border-l-terracotta' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/shop" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `py-2 border-b border-warm-brown/5 ${isActive ? 'text-terracotta font-bold pl-2 border-l-2 border-l-terracotta' : ''}`
              }
            >
              Shop
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `py-2 border-b border-warm-brown/5 ${isActive ? 'text-terracotta font-bold pl-2 border-l-2 border-l-terracotta' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `py-2 border-b border-warm-brown/5 ${isActive ? 'text-terracotta font-bold pl-2 border-l-2 border-l-terracotta text-terracotta' : ''}`
              }
            >
              Contact
            </NavLink>
            
            <button 
              id="cta-sell-mobile"
              onClick={() => {
                setIsOpen(false);
                onOpenSellModal();
              }}
              className="mt-2 w-full rounded-full bg-terracotta py-3 font-semibold text-cream text-center shadow-md active:bg-terracotta/95"
            >
              Sell Your Threads
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
