import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Types & Data
import { Product } from './types';
import { PRODUCTS } from './data';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Views
import HomeView from './views/HomeView';
import ShopView from './views/ShopView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

// Interactive Overlays
import QuickViewModal from './components/QuickViewModal';
import WishlistDrawer from './components/WishlistDrawer';
import SellThreadsModal from './components/SellThreadsModal';

// Route Scroll Handler
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  // Global States
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Load wishlist from standard client localStorage if it exists
  useEffect(() => {
    try {
      const saved = localStorage.getItem('threadcycle_wishlist_v1');
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Storage syncing not allowed inside active sandbox", e);
    }
  }, []);

  // Sync to local storage
  const toggleWishlist = (productId: string) => {
    let updated: string[];
    if (wishlist.includes(productId)) {
      updated = wishlist.filter(id => id !== productId);
    } else {
      updated = [...wishlist, productId];
    }
    setWishlist(updated);
    try {
      localStorage.setItem('threadcycle_wishlist_v1', JSON.stringify(updated));
    } catch (err) {
      // safe fallback
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
    try {
      localStorage.removeItem('threadcycle_wishlist_v1');
    } catch (err) {}
  };

  return (
    <Router>
      <ScrollToTop />
      
      <div id="threadcycle-app-wrapper" className="flex flex-col min-h-screen bg-cream text-warm-brown overflow-x-hidden relative grain-overlay">
        
        {/* Navigation bar Header */}
        <Navbar 
          wishlistCount={wishlist.length}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onOpenSellModal={() => setIsSellModalOpen(true)}
        />

        {/* Core Outlet routing maps */}
        <div className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomeView 
                  wishlistedIds={wishlist}
                  onToggleWishlist={toggleWishlist}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              } 
            />
            <Route 
              path="/shop" 
              element={
                <ShopView 
                  wishlistedIds={wishlist}
                  onToggleWishlist={toggleWishlist}
                  onQuickView={(p) => setQuickViewProduct(p)}
                />
              } 
            />
            <Route 
              path="/about" 
              element={<AboutView />} 
            />
            <Route 
              path="/contact" 
              element={<ContactView />} 
            />
          </Routes>
        </div>

        {/* Global Footer component */}
        <Footer onOpenSellModal={() => setIsSellModalOpen(true)} />

        {/* Portal overlays */}
        <QuickViewModal 
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false}
          onToggleWishlist={() => quickViewProduct && toggleWishlist(quickViewProduct.id)}
        />

        <WishlistDrawer 
          isOpen={isWishlistOpen}
          onClose={() => setIsWishlistOpen(false)}
          wishlistedProducts={PRODUCTS.filter(p => wishlist.includes(p.id))}
          onRemoveFromWishlist={toggleWishlist}
          onClearWishlist={clearWishlist}
        />

        <SellThreadsModal 
          isOpen={isSellModalOpen}
          onClose={() => setIsSellModalOpen(false)}
        />

      </div>
    </Router>
  );
}
