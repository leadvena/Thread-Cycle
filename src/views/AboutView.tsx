import React from 'react';
import { ShieldCheck, HeartPulse, Recycle, Users, Sprout, Footprints, MapPin } from 'lucide-react';
import { TEAM } from '../data';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutView() {
  const values = [
    {
      id: 'val-1',
      icon: <Recycle className="h-6 w-6 text-terracotta" />,
      title: 'Sustainability',
      desc: 'Landfills are stuffed with cheap synthetic threads that outlive civilization. We keep high-quality wool, silk, and cotton rotating through closets instead of rotting in soil.'
    },
    {
      id: 'val-2',
      icon: <Users className="h-6 w-6 text-olive" />,
      title: 'Melbourne First',
      desc: "Fitzroy isn't just an address — it is our heartbeat. We thrive on local community networks, artists, musicians, and the sweet locals who make Smith Street eclectic."
    },
    {
      id: 'val-3',
      icon: <HeartPulse className="h-6 w-6 text-terracotta" />,
      title: 'Democratic Price',
      desc: 'Vintage fashion has gotten expensive and greedy. We price our items to be accessible, honest, and actually lower than cheap high-street alternatives. Style with heart.'
    },
    {
      id: 'val-4',
      icon: <Footprints className="h-6 w-6 text-olive" />,
      title: 'Fun & Discovery',
      desc: 'Thrifting is treasure hunting. We believe shopping is best done slowly, feeling material blends, spinning a cassette, and laughing with other friendly rummagers.'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'The Suitcase Start',
      pithy: 'Clara and Marcus pack three giant retro trunks full of Victorian farm estate denim jackets and sell them of a Saturday at the Rose Street Artists Market. Sold out by noon.'
    },
    {
      year: '2021',
      title: 'The Smith St Anchor',
      pithy: 'We secure the keys to 42 Smith Street, Fitzroy! Ziggy (the rescue greyhound) joins the squad as chief rug-tester. The iconic cassette player is hooked into the storefront speakers.'
    },
    {
      year: '2023',
      title: 'Trade-in Milestones',
      pithy: 'The Saturday "Sell Your Threads" program launches! Over 10,000 local Melburnians swap their high-quality threads, creating a massive self-sustaining circular closet.'
    },
    {
      year: '2026',
      title: 'Digital Racks',
      pithy: 'Launching our streamlined hold-system digital catalog, allowing second-hand enthusiasts around Australia to lock in gems from their screens.'
    }
  ];

  return (
    <div id="about-canvas" className="w-full">
      
      {/* Hero Banner header */}
      <section className="relative bg-cream pt-16 pb-20 border-b border-warm-brown/10 grain-overlay">
        <div className="mx-auto max-w-4xl px-4 text-center space-y-4">
          <ScrollReveal>
            <span className="font-mono text-xs text-olive font-extrabold uppercase tracking-widest block">
              Our Ethos & Roots
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-black text-warm-brown leading-tight mt-1">
              We Believe Good Clothes<br />
              <span className="italic text-terracotta underline decoration-sand decoration-2 underline-offset-4">Deserve a Second Life.</span>
            </h1>
            <p className="font-sans text-sm md:text-md text-warm-brown/80 max-w-xl mx-auto pt-4 leading-relaxed">
              ThreadCycle was founded to push back against fast-fashion garbage. We curating high-character vintage and designer pre-loved clothing, making sure Melbourne wears its history proud.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Story split */}
      <section className="py-20 bg-cream/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <ScrollReveal className="space-y-4">
              <span className="font-mono text-xs text-terracotta font-extrabold uppercase block tracking-wider">The Founders</span>
              <h2 className="font-serif text-3xl font-extrabold text-warm-brown">
                Two hoarders of denim, one sweet greyhound.
              </h2>
              <div className="space-y-4 font-sans text-sm text-warm-brown/90 leading-relaxed">
                <p>
                  ThreadCycle didn't start in a boardroom. It started in rural estate sales, dusty garages, and country charity drives across Victoria. Clara (with her bloodhound nose for high-end linen) and Marcus (with his obsession for vintage workwear) spent years accumulating boxes of garments that were simply too cool to be forgotten.
                </p>
                <p>
                  "We saw incredible pieces — 100% heavy denim, hand-stitched Victorian knitwear, luxury Italian silks — sitting neglected, while fast-fashion outlets on Chapel Street were selling polyester garbage destined for the bin list after four wears," Clara recalls.
                </p>
                <p>
                  In 2019, they decided to merge Clara’s curating wizardry with Marcus’s supply chain skills to create ThreadCycle. A shop where history, circularity, honesty, and nice record spins come together in a warm, welcoming Fitzroy hub.
                </p>
              </div>
            </ScrollReveal>

            {/* Founder image holder with sepia theme */}
            <ScrollReveal delayMs={150} className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-warm-brown shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" 
                alt="ThreadCycle curators packing vintage garments ready for customers inside their cozy fitzroy shop."
                referrerPolicy="no-referrer"
                className="sepia-warm h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-terracotta/5 opacity-40 mix-blend-color transition-opacity group-hover:opacity-10" />
              <div className="absolute bottom-2 right-2 bg-cream/90 text-warm-brown font-mono text-[10px] uppercase tracking-wider px-3 py-1 border border-warm-brown/10 rounded flex items-center gap-1">
                <MapPin className="h-3 w-3 text-terracotta inline" /> Fitzroy Shop Hub (Clara behind the counter)
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Corporate Values box */}
      <section className="py-20 bg-olive text-cream grain-overlay relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-lg mx-auto mb-16">
            <h2 className="font-serif text-3xl font-black text-cream sm:text-4xl">
              What Keeps Us Spinning
            </h2>
            <p className="font-sans text-sm text-cream/70 mt-2">Our baseline parameters for cataloging clothes daily.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.id} delayMs={i * 100} className="bg-cream/15 border border-cream/10 p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-sand text-warm-brown mb-4 shadow-sm">
                    {v.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-sand mb-2">{v.title}</h3>
                  <p className="font-sans text-xs text-cream/80 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-xs text-terracotta font-extrabold uppercase">The Circular Route</span>
            <h2 className="font-serif text-3xl font-extrabold text-warm-brown sm:text-4xl">Our Milestones & Jars</h2>
          </ScrollReveal>

          {/* Timeline Nodes */}
          <div className="relative border-l-2 border-warm-brown/20 max-w-2xl mx-auto pl-6 sm:pl-10 space-y-12">
            {milestones.map((mil, idx) => (
              <ScrollReveal key={mil.year} delayMs={idx * 150} className="relative">
                {/* Year Badge */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-0 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-sand border-2 border-warm-brown flex items-center justify-center font-mono text-xs font-bold text-warm-brown">
                  {mil.year}
                </div>
                
                <div className="bg-sand/15 p-5 rounded-2xl border border-sand shadow-sm">
                  <h3 className="font-serif text-md font-bold text-warm-brown">{mil.title}</h3>
                  <p className="font-sans text-xs text-warm-brown/80 mt-1 leading-relaxed">
                    {mil.pithy}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Team profiles */}
      <section className="py-20 bg-cream/30 border-t border-warm-brown/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-xs text-terracotta font-extrabold uppercase tracking-widest block">Living Curators</span>
            <h2 className="font-serif text-4xl font-extrabold text-warm-brown">Meet the Rack Keepers</h2>
            <p className="font-sans text-xs text-warm-brown/70 mt-1">The folks that iron, dust, curate, and sleep under our Fitzroy tables.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <ScrollReveal key={member.id} delayMs={idx * 150} className="flex flex-col rounded-2xl overflow-hidden bg-cream border border-warm-brown/10 shadow-md">
                {/* Profile Portrait */}
                <div className="relative aspect-square w-full bg-sand/30 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="sepia-warm h-full w-full object-cover transition-transform duration-500 hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-terracotta/5 opacity-35 mix-blend-color pointer-events-none" />
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-warm-brown leading-none">{member.name}</h3>
                    <p className="font-mono text-[10px] text-terracotta uppercase tracking-[0.15em] font-bold mt-1.5">{member.role}</p>
                    <p className="font-sans text-xs text-warm-brown/80 mt-3 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="border-t border-warm-brown/5 pt-3 mt-4 text-[10px] font-mono text-olive font-bold flex items-center gap-1.5">
                    <span>Verified Curator</span>
                    <span>•</span>
                    <span>Melbourne Central</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
