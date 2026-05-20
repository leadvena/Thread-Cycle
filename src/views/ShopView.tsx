import React, { useState, useMemo } from 'react';
import { Filter, RotateCcw, Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';

interface ShopViewProps {
  wishlistedIds: string[];
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: Product) => void;
}

export default function ShopView({ wishlistedIds, onToggleWishlist, onQuickView }: ShopViewProps) {
  // Page States
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number>(100);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('default');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);

  const categories = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories', 'Bags'];
  const conditions = ['Like New', 'Excellent', 'Good', 'Fair'];

  // Toggle condition checkbox logic
  const handleConditionToggle = (cond: string) => {
    if (selectedConditions.includes(cond)) {
      setSelectedConditions(selectedConditions.filter(c => c !== cond));
    } else {
      setSelectedConditions([...selectedConditions, cond]);
    }
  };

  // Reset helper
  const handleResetFilters = () => {
    setSelectedCategory('All');
    setPriceRange(100);
    setSelectedConditions([]);
    setSearchQuery('');
    setSortBy('default');
  };

  // Filter application pipeline
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // 1. Category search
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // 2. Maximum price match
      if (product.price > priceRange) {
        return false;
      }

      // 3. Condition Match
      if (selectedConditions.length > 0 && !selectedConditions.includes(product.condition)) {
        return false;
      }

      // 4. Text query Match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description?.toLowerCase().includes(query) || false;
        if (!matchesBrand && !matchesName && !matchesDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      // 5. Sorting logic
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // default order in dataset
    });
  }, [selectedCategory, priceRange, selectedConditions, searchQuery, sortBy]);

  return (
    <div id="shop-view" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      
      {/* Title Header */}
      <div className="mb-10 text-center md:text-left">
        <span className="font-mono text-xs text-terracotta uppercase tracking-wider font-extrabold">Shop the Fitzroy Vaults</span>
        <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-warm-brown mt-1">Browse the Racks</h1>
        <p className="font-sans text-xs text-warm-brown/75 max-w-md mt-1 leading-relaxed">
          Unique vintage treasures vetted for quality. Feel free to narrow by price point, quality tags, or aesthetic category.
        </p>
      </div>

      {/* Category Pills Bar */}
      <div className="mb-8 flex flex-wrap gap-2 items-center justify-center md:justify-start border-b border-warm-brown/10 pb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`tab-${cat}`}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-5 py-2 font-sans text-xs font-bold transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-terracotta text-cream shadow-sm scale-102'
                : 'bg-warm-brown/5 text-warm-brown/85 hover:bg-warm-brown/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* SIDE BAR / FILTERS BLOCK (Desktop Left panel) */}
        <aside className="hidden lg:block lg:col-span-1 space-y-8 bg-cream border border-warm-brown/10 rounded-2xl p-5 shadow-sm h-fit grain-overlay">
          <div className="flex items-center justify-between border-b border-warm-brown/15 pb-3">
            <span className="font-serif text-md font-bold text-warm-brown flex items-center gap-1.5">
              <SlidersHorizontal className="h-4.5 w-4.5 text-terracotta" />
              <span>Narrow Racks</span>
            </span>
            <button 
              onClick={handleResetFilters}
              className="text-[10px] font-mono text-terracotta font-semibold hover:underline flex items-center gap-0.5"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Search Term input */}
          <div className="space-y-2">
            <label className="block font-serif text-sm font-bold text-warm-brown">Keyword Search</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="e.g. Levi, corduroy..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs rounded-lg border border-warm-brown/35 bg-cream p-3.5 pl-9 text-warm-brown focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta placeholder-warm-brown/40"
              />
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-warm-brown/50" />
            </div>
          </div>

          {/* Price Range slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block font-serif text-sm font-bold text-warm-brown">Max Price Point</label>
              <span className="font-mono text-xs font-bold text-terracotta">${priceRange}.00 AUD</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="100" 
              step="5"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-1.5 bg-warm-brown/20 rounded-lg appearance-none cursor-pointer accent-terracotta"
            />
            <div className="flex justify-between text-[10px] font-mono text-warm-brown/50">
              <span>$10</span>
              <span>$100 MAX</span>
            </div>
          </div>

          {/* Condition list checkboxes */}
          <div className="space-y-3">
            <label className="block font-serif text-sm font-bold text-warm-brown">Condition Grade</label>
            <div className="space-y-2">
              {conditions.map((cond) => (
                <label key={cond} className="flex items-center gap-2 text-xs font-sans text-warm-brown/95 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={selectedConditions.includes(cond)}
                    onChange={() => handleConditionToggle(cond)}
                    className="rounded border-warm-brown/30 text-terracotta focus:ring-terracotta bg-cream h-4 w-4"
                  />
                  <span>{cond}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sort selection dropdown */}
          <div className="space-y-2 pb-2">
            <label className="block font-serif text-sm font-bold text-warm-brown">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full text-xs rounded-lg border border-warm-brown/35 bg-cream p-2.5 text-warm-brown focus:border-terracotta focus:outline-none"
            >
              <option value="default">Fresh Drops Order</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Alphabetical (A-Z)</option>
            </select>
          </div>
        </aside>

        {/* MOBILE CONTROLLER TOGGLE FILTERS */}
        <div className="lg:hidden flex flex-col sm:flex-row gap-3 md:col-span-1 mb-2 items-stretch justify-between">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center justify-center gap-2 rounded-xl border border-warm-brown/30 bg-cream p-3 text-xs font-sans font-bold text-warm-brown hover:bg-cream"
          >
            <Filter className="h-4 w-4" />
            <span>{mobileFiltersOpen ? "Hide Filters" : "Show Filters & Search"}</span>
          </button>

          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Search garments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs rounded-xl border border-warm-brown/30 bg-cream p-3 pl-9 text-warm-brown focus:border-terracotta focus:outline-none"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-warm-brown/50" />
          </div>
        </div>

        {/* MOBILE SLIDING / DISPLAY FOR FILTERS */}
        {mobileFiltersOpen && (
          <div className="lg:hidden rounded-2xl bg-cream border border-warm-brown/15 p-5 shadow-inner space-y-5 animate-fadeIn">
            <div className="flex justify-between items-center">
              <span className="font-serif font-bold text-sm">Narrow Racks</span>
              <button 
                onClick={handleResetFilters}
                className="text-[10px] font-mono text-terracotta font-semibold"
              >
                Reset Filters
              </button>
            </div>

            {/* Slider mobile */}
            <div className="space-y-2">
              <div className="flex justify-between font-sans text-xs">
                <span>Max Price Point</span>
                <strong className="text-terracotta">${priceRange}.00</strong>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                step="5"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-terracotta bg-warm-brown/25"
              />
            </div>

            {/* checkbox mobile */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {conditions.map((cond) => (
                <label key={cond} className="flex items-center gap-2">
                  <input 
                    type="checkbox"
                    checked={selectedConditions.includes(cond)}
                    onChange={() => handleConditionToggle(cond)}
                    className="rounded text-terracotta bg-cream h-4.5 w-4.5 border-warm-brown/30"
                  />
                  <span>{cond}</span>
                </label>
              ))}
            </div>

            {/* sort mobile */}
            <div>
              <label className="block text-xs font-semibold mb-1">Sort Items By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full text-xs rounded-lg border border-warm-brown/30 bg-cream p-2 text-warm-brown"
              >
                <option value="default">Fresh Drops Order</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>
          </div>
        )}

        {/* PRODUCTS MAIN DISPLAY GRID (3/4 Screen layout) */}
        <main className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-cream border border-warm-brown/10 rounded-2xl flex flex-col items-center justify-center p-8 space-y-4 animate-scaleUp">
              <p className="text-4xl">🧺</p>
              <h3 className="font-serif text-xl font-bold text-warm-brown">"The hangers are bare..."</h3>
              <p className="font-sans text-xs text-warm-brown/70 leading-relaxed max-w-sm">
                No items in our inventory matched your combination of filters. Try dropping the slider, clearing text, or relaxing conditions.
              </p>
              <button
                onClick={handleResetFilters}
                className="rounded-full bg-terracotta hover:bg-terracotta/95 text-cream px-6 py-2.5 font-sans font-bold text-xs uppercase cursor-pointer"
              >
                Reset Shop Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Count Banner */}
              <div className="flex items-center justify-between text-xs font-mono text-warm-brown/65 mb-4 pl-1">
                <span>Displaying {filteredProducts.length} items from stock</span>
                <span>All unique drops</span>
              </div>

              {/* Dynamic Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                  <ScrollReveal key={product.id} delayMs={(idx % 3) * 80}>
                    <ProductCard 
                      product={product}
                      isWishlisted={wishlistedIds.includes(product.id)}
                      onToggleWishlist={() => onToggleWishlist(product.id)}
                      onQuickView={() => onQuickView(product)}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
