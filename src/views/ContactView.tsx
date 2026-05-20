import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FAQS } from '../data';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactView() {
  // Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  // Accordion open/close state tracking by item index number
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // first open by default

  const handleFaqToggle = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setIsSent(true);
      setTimeout(() => {
        // Clear inputs and animation state after temporary layout display
        setIsSent(false);
        setName('');
        setEmail('');
        setMessage('');
        setSubject('General Enquiry');
      }, 6000);
    }
  };

  return (
    <div id="contact-canvas" className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      
      {/* Visual Header */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="font-mono text-xs text-terracotta uppercase font-extrabold tracking-widest block">Fitzroy Dial-up Desk</span>
        <h1 className="font-serif text-3xl md:text-5xl font-black text-warm-brown mt-1">Say G'day to Clara & Marcus 👋</h1>
        <p className="font-sans text-xs md:text-sm text-warm-brown/70 leading-relaxed max-w-sm mx-auto mt-2">
          Want to ask about a drop-off, verify a sizing fit, arrange press coverage, or just send a quick virtual hi?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
        
        {/* LEFT COLUMN: INTERACTIVE FORM WITH COMPACT POSTCARD LOOK */}
        <ScrollReveal className="relative bg-cream border-2 border-warm-brown rounded-2xl p-6 md:p-8 shadow-md grain-overlay">
          
          {/* Decorative Postcard Line stamp elements */}
          <div className="absolute right-4 top-4 h-14 w-11 border border-dashed border-terracotta bg-sand/30 flex flex-col items-center justify-center p-1 font-serif text-[7px] text-terracotta font-extrabold rotate-3 pointer-events-none">
            <span>TC Post</span>
            <span className="text-[9px] mt-0.5">🇦🇺</span>
            <span className="text-[6px] tracking-wide mt-0.5">EST. 2019</span>
          </div>

          <h2 className="font-serif text-xl font-bold text-warm-brown border-b border-warm-brown/15 pb-3 mb-6">
            Write Us a Postcard
          </h2>

          {isSent ? (
            <div className="text-center py-12 space-y-4 animate-scaleUp">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-olive text-cream mb-1 shadow-sm">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-olive">Ahoy! Postcard received!</h3>
              <p className="font-sans text-xs text-warm-brown/95 max-w-xs mx-auto leading-relaxed">
                G'day {name}! Your letter has successfully landed in Fitzroy. Clara is currently brewing a fresh flat white and will crack open your query shortly. Talk details soon!
              </p>
              <p className="text-[10px] text-warm-brown/50 font-mono">Simulated submission ticket: #TC-MAIL-{Math.floor(20000 + Math.random() * 80000)}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs text-warm-brown/85">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-warm-brown/75 font-semibold mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Liam"
                    className="w-full p-2.5 rounded-lg border border-warm-brown/30 bg-cream text-warm-brown placeholder-warm-brown/40 focus:border-terracotta focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-warm-brown/75 font-semibold mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. email@domain.com"
                    className="w-full p-2.5 rounded-lg border border-warm-brown/30 bg-cream text-warm-brown placeholder-warm-brown/40 focus:border-terracotta focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-warm-brown/75 font-semibold mb-1">Subject of Postcard *</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-warm-brown/30 bg-cream text-warm-brown focus:border-terracotta focus:outline-none"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Selling / Sourcing Program">Selling / Sourcing Program Saturday</option>
                  <option value="Wholesale & Bulk Bunches">Wholesale & Bulk Bunches</option>
                  <option value="Press & Media Snaps">Press & Media Snaps</option>
                </select>
              </div>

              <div>
                <label className="block text-warm-brown/75 font-semibold mb-1">Your Message Details *</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Drop your thoughts... can be about a piece you see, sizing concerns, or trading secrets!"
                  className="w-full p-2.5 rounded-lg border border-warm-brown/30 bg-cream text-warm-brown placeholder-warm-brown/40 focus:border-terracotta focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-terracotta text-cream py-3 font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:translate-y-0.5 transition-transform cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Submit Postcard Letter</span>
              </button>
            </form>
          )}
        </ScrollReveal>

        {/* RIGHT COLUMN: CONTACT COORDINATES & REPT HOURS */}
        <ScrollReveal delayMs={150} className="flex flex-col justify-between h-full bg-sand/15 rounded-2xl p-6 md:p-8 border border-sand">
          <div>
            <h2 className="font-serif text-2xl font-extrabold text-warm-brown mb-2">Connect Directly</h2>
            <p className="font-sans text-xs text-warm-brown/75 leading-relaxed mb-6">
              Skip the forms entirely and walk right into our Fitzroy space if you like. We love meeting thrift aficionados in person!
            </p>

            <div className="space-y-5 font-sans text-xs sm:text-sm">
              
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-terracotta shrink-0" />
                <div>
                  <strong className="text-warm-brown font-serif text-sm">Fitzroy Shop Hub</strong>
                  <p className="text-warm-brown/80 mt-0.5">42 Smith Street, Fitzroy VIC 3065</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="h-5 w-5 text-olive shrink-0" />
                <div>
                  <strong className="text-warm-brown font-serif text-sm">Opening Jars</strong>
                  <p className="text-warm-brown/80 text-xs mt-0.5">
                    Monday–Friday: 10am–6pm<br />
                    Saturday: 9am–7pm (Peak drops day)<br />
                    Sunday: 10am–5pm
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-warm-brown/60 shrink-0" />
                <div>
                  <strong className="text-warm-brown font-serif text-sm">Direct Phone Line</strong>
                  <p className="text-warm-brown/80 mt-0.5 font-mono">(03) 9000-0000</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-warm-brown/60 shrink-0" />
                <div>
                  <strong className="text-warm-brown font-serif text-sm">Postbox Email Address</strong>
                  <p className="text-warm-brown/80 mt-0.5 font-mono">hello@threadcycle.com.au</p>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-8 border-t border-warm-brown/10 pt-4 flex gap-3 text-xs text-warm-brown/75">
            <AlertCircle className="h-5 w-5 text-terracotta shrink-0" />
            <p className="font-sans">
              <strong>Saturdays Sourcing:</strong> Want to trade in garments? Remember trade-ins happen on Saturdays only! Use the "Sell Your Threads" button above to lock in a time slot!
            </p>
          </div>
        </ScrollReveal>

      </div>

      {/* FAQ ACCORDION SECTION */}
      <section id="faq-accordions" className="pt-8 border-t border-warm-brown/10 mb-8 max-w-3xl mx-auto">
        
        <ScrollReveal className="text-center mb-10">
          <span className="font-mono text-xs text-olive font-extrabold uppercase">Curator Knowledge</span>
          <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-warm-brown mt-1">Frequently Asked Rummaged Questions</h2>
          <p className="font-sans text-xs text-warm-brown/65 mt-1">Everything else you might be wondering about our circular store.</p>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <ScrollReveal key={faq.id} delayMs={idx * 100}>
                <div 
                  id={`faq-item-${faq.id}`}
                  className="rounded-xl border border-warm-brown/15 bg-cream/60 overflow-hidden"
                >
                  <button
                    onClick={() => handleFaqToggle(idx)}
                    className="w-full flex items-center justify-between p-4 bg-cream font-serif text-sm font-bold text-warm-brown text-left transition-colors hover:bg-sand/10"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="h-4 w-4 text-terracotta" /> : <ChevronDown className="h-4 w-4 text-warm-brown" />}
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-72 border-t border-warm-brown/10 p-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <p className="font-sans text-xs text-warm-brown/85 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </section>

    </div>
  );
}
