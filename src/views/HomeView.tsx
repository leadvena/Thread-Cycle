import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail, Clock, ShieldCheck, Heart, Sparkles, Star, Search, Building2, CheckCircle2, Shirt } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, TESTIMONIALS } from '../data';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';

interface HomeViewProps {
  wishlistedIds: string[];
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: Product) => void;
}

export default function HomeView({ wishlistedIds, onToggleWishlist, onQuickView }: HomeViewProps) {
  const [newsEmail, setNewsEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Get first 6 items for fresh drops section
  const freshDrops = PRODUCTS.slice(0, 6);

  // Gallery item overlay images configurations
  const instagramImages = [
    { id: 'ig-1', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600', desc: 'Corduroy look in Fitzroy Gardens' },
    { id: 'ig-2', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600', desc: 'Fresh knit arrival checking in' },
    { id: 'ig-3', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=600', desc: 'Weekend rack hunt results' },
    { id: 'ig-4', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=600', desc: 'Ziggy guarding the premium bombers' },
    { id: 'ig-5', image: 'https://images.unsplash.com/photo-1509631179647-0177331593ab?auto=format&fit=crop&q=80&w=600', desc: '90s streetwear stack' },
    { id: 'ig-6', image: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?auto=format&fit=crop&q=80&w=600', desc: 'Silk shirts & sunny terrace days' }
  ];

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setIsSubscribed(true);
      setNewsEmail('');
      setTimeout(() => {
        setIsSubscribed(false);
      }, 6000);
    }
  };

  return (
    <div id="home-view" className="w-full">
      
      {/* 2. HERO SECTION */}
      <section id="hero-sec" className="relative overflow-hidden bg-cream pt-16 pb-20 md:py-28 border-b border-warm-brown/10 grain-overlay">
        <div className="absolute right-4 top-15 opacity-[0.04] md:opacity-[0.08] pointer-events-none w-52 md:w-80 h-auto">
          {/* Visual Badge Background Graphic element */}
          <div className="rough-border rounded-full border-4 border-dashed border-terracotta aspect-square flex flex-col items-center justify-center p-10 font-serif text-center animate-spin-slow">
            <span className="font-bold text-3xl text-terracotta">THREAD</span>
            <span className="text-xl">REUSE</span>
            <span className="font-bold text-3xl text-terracotta">CYCLE</span>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text details content panel */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Stamp Badge */}
              <ScrollReveal delayMs={100} className="inline-block">
                <div className="inline-block bg-sand px-3.5 py-1.5 border border-warm-brown/20 rounded rotate-[-2deg] shadow-sm animate-float">
                  <span className="text-xs font-bold uppercase text-olive font-mono block">Est. 2019 • Melbourne, AU</span>
                </div>
              </ScrollReveal>

              {/* Bold Headline */}
              <ScrollReveal delayMs={250}>
                <h1 className="font-serif text-[42px] leading-[0.95] sm:text-[56px] md:text-[68px] font-black tracking-tight text-warm-brown mb-6">
                  One Person's Past.<br />
                  <span className="text-terracotta italic underline decoration-sand decoration-wavy underline-offset-6">Your New Favorite.</span>
                </h1>
              </ScrollReveal>

              {/* Subheadline */}
              <ScrollReveal delayMs={400}>
                <p className="font-sans text-md sm:text-lg text-warm-brown/85 leading-relaxed max-w-xl">
                  Curating rare vintage and handpicked second-hand garments deep in the heart of Melbourne. From faded denim to butter-soft silks, wear threads with history.
                </p>
              </ScrollReveal>

              {/* CTA buttons */}
              <ScrollReveal delayMs={500} className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/shop"
                  className="rounded-xl bg-terracotta px-8 py-4 font-sans text-sm font-extrabold uppercase tracking-wider text-cream shadow-md hover:bg-terracotta/95 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Shop the Racks <Shirt className="h-4 w-4 inline-block ml-1" />
                </Link>
                <Link
                  to="/about"
                  className="rounded-xl border-2 border-warm-brown px-8 py-4 font-sans text-sm font-extrabold uppercase tracking-wider text-warm-brown hover:bg-warm-brown hover:text-cream hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Our Story
                </Link>
              </ScrollReveal>

              {/* Quality assurance stamps */}
              <ScrollReveal delayMs={600} className="pt-6 border-t border-warm-brown/10 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-warm-brown/60">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-terracotta" /> 100% Hand-inspected</span>
                <span className="flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-olive" /> 100% Sustainable Living</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-warm-brown" /> Sourced in Victoria</span>
              </ScrollReveal>

            </div>

            {/* Spotlight graphics offset boxes */}
            <ScrollReveal delayMs={450} className="hidden lg:flex lg:col-span-5 relative items-center justify-center py-6 select-none">
              <div className="w-[340px] h-[340px] bg-olive rounded-3xl rotate-3 absolute shadow-xl"></div>
              <div className="w-[340px] h-[340px] bg-sand rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-warm-brown/10">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover filter sepia-[0.3]" 
                  referrerPolicy="no-referrer"
                  alt="Spotlight vintage jacket"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-cream/90 backdrop-blur-sm p-4 rounded-xl border border-warm-brown/10 flex justify-between items-center text-warm-brown">
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase text-olive">Featured Drop</div>
                    <div className="font-serif font-black text-sm">90s Bomber Jacket</div>
                  </div>
                  <div className="text-terracotta font-black text-sm">$65.00 AUD</div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>


      {/* 3. FEATURED ITEMS GRID ("Fresh Drops") */}
      <section id="fresh-drops-sec" className="py-20 bg-cream/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs text-terracotta font-extrabold uppercase tracking-widest block mb-1">
                Curated Weekly
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-warm-brown sm:text-4xl">
                Fresh Drops
              </h2>
            </div>
            <Link 
              to="/shop" 
              className="mt-4 md:mt-0 inline-flex items-center gap-1 text-sm font-sans font-bold text-terracotta hover:underline group"
            >
              <span>Explore all collections</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {freshDrops.map((product, idx) => (
              <ScrollReveal key={product.id} delayMs={idx * 100}>
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
      </section>


      {/* 4. HOW IT WORKS */}
      <section id="how-it-works-sec" className="py-20 bg-terracotta text-cream grain-overlay relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <ScrollReveal className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-xs text-sand font-bold uppercase tracking-widest block mb-2">
              Simple. Circular. Soulful.
            </span>
            <h2 className="font-serif text-3xl font-black text-cream sm:text-4xl">
              How ThreadCycle Works
            </h2>
            <div className="h-1 w-20 bg-sand mx-auto mt-4 rounded-full" />
          </ScrollReveal>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Step 1 */}
            <ScrollReveal delayMs={100} className="bg-cream/10 border border-cream/15 p-6 rounded-2xl relative text-center flex flex-col items-center">
              <div className="absolute -top-6 bg-sand text-warm-brown font-serif text-2xl font-bold h-12 w-12 rounded-full flex items-center justify-center border-2 border-terracotta">
                1
              </div>
              <Search className="h-10 w-10 text-sand mb-3 mt-4" />
              <h3 className="font-serif text-lg font-bold text-sand mb-2">Browse the Racks</h3>
              <p className="font-sans text-xs text-cream/90 leading-relaxed">
                Scroll our ever-changing online edit daily or swing by our brick-and-mortar space. We drop fresh finds continuously, so keep your eyes peeled.
              </p>
            </ScrollReveal>

            {/* Step 2 */}
            <ScrollReveal delayMs={200} className="bg-cream/10 border border-cream/15 p-6 rounded-2xl relative text-center flex flex-col items-center">
              <div className="absolute -top-6 bg-sand text-warm-brown font-serif text-2xl font-bold h-12 w-12 rounded-full flex items-center justify-center border-2 border-terracotta">
                2
              </div>
              <Building2 className="h-10 w-10 text-sand mb-3 mt-4" />
              <h3 className="font-serif text-lg font-bold text-sand mb-2">Visit Fitzroy</h3>
              <p className="font-sans text-xs text-cream/90 leading-relaxed">
                Come find us at our Melbourne shop. Try pieces on, spin some records, say hi to Clara and Marcus, and give Ziggy a friendly cuddle behind the ears.
              </p>
            </ScrollReveal>

            {/* Step 3 */}
            <ScrollReveal delayMs={300} className="bg-cream/10 border border-cream/15 p-6 rounded-2xl relative text-center flex flex-col items-center">
              <div className="absolute -top-6 bg-sand text-warm-brown font-serif text-2xl font-bold h-12 w-12 rounded-full flex items-center justify-center border-2 border-terracotta">
                3
              </div>
              <CheckCircle2 className="h-10 w-10 text-sand mb-3 mt-4" />
              <h3 className="font-serif text-lg font-bold text-sand mb-2">Score and Support</h3>
              <p className="font-sans text-xs text-cream/90 leading-relaxed">
                Take home unique style that carries a past, pays less, and supports local circularity. Your wallet wins, and the Earth breathes a tiny sigh of relief.
              </p>
            </ScrollReveal>

          </div>

        </div>
      </section>


      {/* 5. PHOTO GALLERY (Instagram-style) */}
      <section id="gallery-sec" className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-extrabold text-warm-brown sm:text-4xl">
              As Seen On Our Rack
            </h2>
            <p className="font-sans text-sm text-warm-brown/70 mt-2">
              Follow <a href="https://instagram.com/threadcycle.au" className="font-bold text-terracotta hover:underline">@threadcycle.au</a> for daily drops, fits, and antics.
            </p>
          </ScrollReveal>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {instagramImages.map((img, idx) => {
              // Create dynamic shapes: elements 1 and 4 can be double height for masonry look on desktop
              const isTall = idx === 0 || idx === 3;
              return (
                <ScrollReveal 
                  key={img.id} 
                  delayMs={idx * 80}
                  className={`${isTall ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'} relative group overflow-hidden rounded-xl border border-warm-brown/10 aspect-square md:aspect-auto ${isTall ? 'md:h-96' : 'md:h-44'}`}
                >
                  <img 
                    src={img.image}
                    alt={img.desc}
                    referrerPolicy="no-referrer"
                    className="sepia-[0.1] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-terracotta/20 opacity-30 mix-blend-color group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Insta Hover Effect */}
                  <div className="absolute inset-0 bg-warm-brown/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-2 p-3 text-center transition-opacity duration-300">
                    <Heart className="h-6 w-6 text-terracotta fill-terracotta" />
                    <p className="font-mono text-[9px] uppercase tracking-wide text-sand">ThreadCycle Community</p>
                    <p className="font-serif text-xs text-cream font-bold leading-tight line-clamp-2">
                      "{img.desc}"
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>


      {/* 6. NEWSLETTER SIGNUP */}
      <section id="newsletter-sec" className="py-16 bg-olive text-cream relative overflow-hidden grain-overlay">
        <div className="absolute -right-16 -top-16 text-cream/5 select-none font-serif text-9xl pointer-events-none">
          10% OFF
        </div>
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <ScrollReveal className="space-y-2">
            <span className="font-mono text-xs text-sand font-bold tracking-widest block uppercase">
              Join the Haul Club
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-cream leading-tight">
              10% Off Your First Haul.
            </h2>
            <p className="font-sans text-sm md:text-md text-cream/85 max-w-lg mx-auto">
              Join the ThreadCycle community. We don't do boring spam, just prime notifications of rare jacket drops, member-only sizing previews, and swap events.
            </p>
          </ScrollReveal>

          <ScrollReveal delayMs={150} className="max-w-md mx-auto">
            {isSubscribed ? (
              <div className="rounded-xl bg-cream/15 p-4 border border-sand/30 text-sand flex items-center justify-center gap-2 font-serif text-md animate-fadeIn">
                <Sparkles className="h-5 w-5 shrink-0" />
                <span>Check your inbox, darlin'! Your 10% discount ticket code is waiting.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="What's your email?"
                  className="flex-grow rounded-full border border-cream/20 bg-cream/10 px-5 py-3 text-sm font-sans placeholder-cream/60 text-cream focus:border-sand focus:outline-none focus:ring-1 focus:ring-sand"
                />
                <button
                  type="submit"
                  className="rounded-full bg-terracotta hover:bg-terracotta/95 text-cream border border-terracotta px-6 py-3 text-sm font-sans font-bold shadow-md hover:scale-102 transition-all duration-200 cursor-pointer shrink-0"
                >
                  Claim My Discount
                </button>
              </form>
            )}
            <p className="font-sans text-[11px] text-cream/60 mt-3">
              Unsubscribe anytime. We're chill like that.
            </p>
          </ScrollReveal>
        </div>
      </section>


      {/* 7. TESTIMONIALS */}
      <section id="testimonials-sec" className="py-20 bg-cream/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-xs text-terracotta font-extrabold uppercase tracking-widest block mb-1">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-warm-brown sm:text-4xl">
              What Our People Are Saying
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, idx) => (
              <ScrollReveal key={test.id} delayMs={idx * 150} className="flex">
                <div className="flex flex-col justify-between rounded-2xl bg-cream p-6 shadow-sm border-l-4 border-terracotta border border-warm-brown/10 w-full relative">
                  
                  {/* Decorative quotes graphic symbol */}
                  <span className="absolute top-4 right-6 font-serif text-6xl text-sand/40 font-bold pointer-events-none select-none">
                    “
                  </span>
                  
                  <div>
                    {/* Stars bar */}
                    <div className="flex gap-1 mb-4 text-sand">
                      {[...Array(test.stars)].map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-sand text-sand" />
                      ))}
                    </div>
                    
                    <p className="font-sans text-sm italic text-warm-brown/90 leading-relaxed mb-6">
                      "{test.quote}"
                    </p>
                  </div>

                  <div className="border-t border-warm-brown/5 pt-4">
                    <p className="font-serif font-bold text-sm text-warm-brown">
                      {test.name}
                    </p>
                    <p className="font-mono text-[10px] text-olive font-semibold uppercase tracking-widest">
                      {test.location}, Melbourne
                    </p>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>


      {/* 8. STORE INFO + MAP */}
      <section id="store-location-sec" className="py-20 bg-cream border-t border-warm-brown/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left Column: Map Iframe Embed */}
            <ScrollReveal className="h-full min-h-[350px] rounded-2xl overflow-hidden border-2 border-warm-brown shadow-lg relative group">
              {/* Overlay styling for extra warmth */}
              <div className="absolute inset-0 bg-terracotta/5 opacity-30 mix-blend-color pointer-events-none" />
              
              <iframe
                title="ThreadCycle Location map in Fitzroy"
                src="https://maps.google.com/maps?q=42%20Smith%20Street%2C%20Fitzroy%20VIC%203065%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0 sepia-[0.1] block"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ScrollReveal>

            {/* Right Column: details */}
            <ScrollReveal delayMs={150} className="flex flex-col justify-center space-y-6 bg-sand/15 p-6 md:p-8 rounded-2xl border border-sand">
              <div className="space-y-1">
                <span className="font-mono text-xs text-terracotta font-extrabold uppercase tracking-widest block">
                  Find the Hub
                </span>
                <h2 className="font-serif text-3xl font-extrabold text-warm-brown">
                  Fitzroy Flagship Store
                </h2>
                <p className="font-sans text-xs text-warm-brown/70">
                  Come find rare nuggets, read a zine, and smell the local eucalyptus candles.
                </p>
              </div>

              <div className="space-y-4 pt-2 font-sans text-sm">
                
                {/* Address block */}
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-warm-brown font-serif">Storefront Address</strong>
                    <p className="text-warm-brown/85">42 Smith Street, Fitzroy VIC 3065</p>
                  </div>
                </div>

                {/* Hours Block */}
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-olive shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-warm-brown font-serif">Hours of Rummagin'</strong>
                    <p className="text-warm-brown/85 text-xs">
                      Monday–Friday: 10:00 AM – 6:00 PM<br />
                      Saturday: 9:00 AM – 7:00 PM (Weekly Drop drops)<br />
                      Sunday: 10:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>

                {/* Direct contacts block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-warm-brown/10">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4.5 w-4.5 text-warm-brown/60shrink-0" />
                    <span className="text-xs text-warm-brown/80 font-mono">(03) 9000-0000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4.5 w-4.5 text-warm-brown/60 shrink-0" />
                    <span className="text-xs text-warm-brown/80 font-mono">hello@threadcycle.com.au</span>
                  </div>
                </div>

              </div>

              {/* Little tip stamp */}
              <div className="p-3 bg-cream rounded-lg border border-warm-brown/10 flex items-center gap-2 text-xs text-warm-brown/80">
                <ShieldCheck className="h-4.5 w-4.5 text-olive shrink-0" />
                <span>Our storefront operates is 100% cashless. Card, mobile, or trade vouchers accepted!</span>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

    </div>
  );
}
