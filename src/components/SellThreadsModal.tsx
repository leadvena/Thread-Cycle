import React, { useState } from 'react';
import { X, CheckCircle, Scale, DollarSign, Calendar, RefreshCw, Sparkles } from 'lucide-react';

interface SellThreadsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SellThreadsModal({ isOpen, onClose }: SellThreadsModalProps) {
  const [step, setStep] = useState(1);
  const [itemType, setItemType] = useState('Tops');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('Excellent');
  const [estOrigValue, setEstOrigValue] = useState(60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('Saturday 9:30 AM');

  if (!isOpen) return null;

  // Real-time simulated valuation algorithm
  const calculateValuation = () => {
    let baseMultiplier = 0.25; // Good condition has 25% of original value estimated
    if (condition === 'Like New') baseMultiplier = 0.35;
    if (condition === 'Excellent') baseMultiplier = 0.30;
    if (condition === 'Fair') baseMultiplier = 0.15;

    // Brand weighting simulated adjustments
    const formattedBrand = brand.toLowerCase();
    let brandBonus = 1;
    if (formattedBrand.includes('levi') || formattedBrand.includes('carhartt') || formattedBrand.includes("doc")) {
      brandBonus = 1.3;
    } else if (formattedBrand.includes('h&m') || formattedBrand.includes('zara') || formattedBrand.includes('shein')) {
      brandBonus = 0.5; // fast fashion penalty!
    }

    const estimatedStoreQuote = Math.round(estOrigValue * baseMultiplier * brandBonus);
    const storeCredit = Math.round(estimatedStoreQuote * 1.55); // 50% extra roughly

    return { cash: Math.max(1, estimatedStoreQuote), credit: Math.max(2, storeCredit) };
  };

  const valuation = calculateValuation();

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Complete submission animation
      setIsSubmitted(false);
      setStep(1);
      onClose();
    }, 5000);
  };

  return (
    <div id="sell-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-brown/75 backdrop-blur-sm animate-fadeIn">
      <div 
        id="sell-modal"
        className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-cream border-2 border-warm-brown p-6 md:p-8 shadow-2xl animate-scaleUp grain-overlay"
      >
        {/* Close Button */}
        <button
          id="close-sell-btn"
          onClick={onClose}
          className="absolute top-4 right-4 text-warm-brown/70 hover:text-terracotta hover:scale-110 p-1 rounded-full hover:bg-warm-brown/10 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Modal Title Banner */}
        <div className="mb-4 text-center mt-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-cream mb-1">
            <RefreshCw className="h-5 w-5 animate-spin-slow" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-warm-brown">Sell Your Threads Program</h2>
          <p className="font-sans text-xs text-warm-brown/60">Let's outlive fast fashion together</p>
        </div>

        {/* Step Indicator Bullets */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <div className={`h-2.5 w-2.5 rounded-full ${step >= 1 ? 'bg-terracotta' : 'bg-warm-brown/20'}`} />
          <div className="h-0.5 w-8 bg-warm-brown/10" />
          <div className={`h-2.5 w-2.5 rounded-full ${step >= 2 ? 'bg-terracotta' : 'bg-warm-brown/20'}`} />
          <div className="h-0.5 w-8 bg-warm-brown/10" />
          <div className={`h-2.5 w-2.5 rounded-full ${step >= 3 ? 'bg-terracotta' : 'bg-warm-brown/20'}`} />
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-3 animate-fadeIn">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-olive text-cream">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-olive">Saturday Trade-In Slot Reserved!</h3>
            <p className="font-sans text-sm text-warm-brown/90 leading-relaxed px-4">
              Awesome work. We have saved a slot for you on <strong>{selectedTimeSlot}</strong> at 42 Smith Street, Fitzroy. Clara will examine your piece and hand over the cash or swap vouchers straight away!
            </p>
            <p className="font-mono text-xs text-terracotta font-bold">Please bring a photo ID and wash clothes prior to dropping off.</p>
          </div>
        ) : (
          <div>
            {/* STEP 1: RULES & CONTRACT */}
            {step === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-sand/30 border border-sand p-4 rounded-xl text-xs space-y-2">
                  <h4 className="font-serif font-bold text-warm-brown text-sm flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-terracotta inline" />
                    Sourcing Standards <span className="text-warm-brown/55 font-normal text-xs">(The fine print made fun):</span>
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-warm-brown/85 font-sans">
                    <li><strong className="text-terracotta">Golden Rule:</strong> If you wouldn't lend it to your best friend, we probably can't sell it!</li>
                    <li><strong className="text-terracotta">Washed and Pristine:</strong> Items must be freshly laundered, buttoned, and free of mysterious pet fur.</li>
                    <li><strong className="text-terracotta">No Fast-Fashion:</strong> We reject mass factory brands like Shein, Temu, and basic Kmart/Tarocash labels. We live for quality.</li>
                    <li><strong className="text-terracotta">Vintage & Sturdy:</strong> 70s, 80s, 90s, and true utility items (Levi's, Carhartt, Barbour, Doc Martens) are automatic yeses!</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 border border-warm-brown/15 rounded-lg bg-cream/50">
                    <p className="text-sm font-bold text-terracotta font-serif">35% Direct Cash</p>
                    <p className="text-[10px] text-warm-brown/60">Sent via OSKO back to your bank instantly.</p>
                  </div>
                  <div className="p-3 border border-warm-brown/15 rounded-lg bg-cream/50">
                    <p className="text-sm font-bold text-olive font-serif">50% Store Credit</p>
                    <p className="text-[10px] text-warm-brown/60">Vouchers with infinite expiry on our entire Fitzroy range.</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full text-center py-3 rounded-full bg-terracotta text-cream font-sans font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  I Understand, Let's Estimate!
                </button>
              </div>
            )}

            {/* STEP 2: DEFINE THE GARMENT */}
            {step === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="space-y-3 font-sans text-xs">
                  <div>
                    <label className="block text-warm-brown/70 font-semibold mb-1">What kind of gem is this? *</label>
                    <select
                      value={itemType}
                      onChange={(e) => setItemType(e.target.value)}
                      className="w-full rounded-lg border border-warm-brown/30 bg-cream p-2 text-warm-brown focus:border-terracotta focus:outline-none"
                    >
                      <option value="Tops">Top (Knit, Shirt, Blouse, Tee)</option>
                      <option value="Bottoms">Bottom (Jeans, Corduroy, Skirt)</option>
                      <option value="Outerwear">Outerwear (Bomber, Trench, Heavy utility)</option>
                      <option value="Bags">Bags (Leather Satchel, Canvas Tote)</option>
                      <option value="Accessories">Accessories (Sunglasses, Pins, Belt)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-warm-brown/70 font-semibold mb-1">What brand label is on it? (e.g. Levi's, Thrifted, Unknown)</label>
                    <input
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="e.g. Carhartt"
                      className="w-full rounded-lg border border-warm-brown/30 bg-cream p-2 text-warm-brown focus:border-terracotta focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-warm-brown/70 font-semibold mb-1">Honest Condition Grading *</label>
                      <select
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        className="w-full rounded-lg border border-warm-brown/30 bg-cream p-2 text-warm-brown focus:border-terracotta focus:outline-none"
                      >
                        <option value="Like New">Like New (flawless, tags on)</option>
                        <option value="Excellent">Excellent (gently used, zero defects)</option>
                        <option value="Good">Good (typical light vintage wear)</option>
                        <option value="Fair">Fair (cool distress, faded, retro marks)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-warm-brown/70 font-semibold mb-1">Estimated Original Retail Price ($AUD) *</label>
                      <input
                        type="number"
                        min="5"
                        max="1000"
                        value={estOrigValue}
                        onChange={(e) => setEstOrigValue(Number(e.target.value))}
                        className="w-full rounded-lg border border-warm-brown/30 bg-cream p-2 text-warm-brown focus:border-terracotta focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="flex-1 text-center py-2.5 rounded-full border border-warm-brown text-warm-brown font-semibold text-xs cursor-pointer"
                  >
                    Back Rules
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="flex-1 text-center py-2.5 rounded-full bg-terracotta text-cream font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Calculate Value
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: REVEAL QUOTE & SCHEDULING */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-olive/10 border-2 border-dashed border-olive relative">
                  <p className="text-center font-mono text-[10px] text-olive font-extrabold uppercase tracking-widest mb-1 flex items-center justify-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" /> Real-time Valuation Quote
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-center mt-3">
                    <div className="p-2 bg-cream rounded border border-olive/30 shadow-sm">
                      <p className="text-xs font-sans text-warm-brown/60">Estimated Cash Offer</p>
                      <p className="font-mono text-2xl font-extrabold text-terracotta flex items-center justify-center">
                        <DollarSign className="h-5 w-5" />
                        {valuation.cash}.00 AUD
                      </p>
                    </div>

                    <div className="p-2 bg-cream rounded border border-olive/30 shadow-sm">
                      <p className="text-xs font-sans text-warm-brown/60">Estimated Trade Credit</p>
                      <p className="font-mono text-2xl font-extrabold text-olive flex items-center justify-center">
                        <DollarSign className="h-5 w-5" />
                        {valuation.credit}.00 AUD
                      </p>
                    </div>
                  </div>

                  {brand.toLowerCase().includes('shein') || brand.toLowerCase().includes('temu') ? (
                    <p className="text-[10px] text-terracotta text-center mt-2.5 font-bold animate-pulse">
                      ⚠️ Note: Brand lists "fast fashion" flag. Quote has been lowered substantially.
                    </p>
                  ) : brand.toLowerCase().includes('levi') || brand.toLowerCase().includes('carhartt') ? (
                    <p className="text-[10px] text-olive text-center mt-2.5 font-bold">
                      🔥 Premium brand matched! Levi/Carhartt vintage gains 30% bonus valuation!
                    </p>
                  ) : null}
                </div>

                <div className="space-y-3 font-sans text-xs">
                  <h4 className="font-serif font-bold text-warm-brown text-sm flex items-center gap-1.5 pt-1">
                    <Calendar className="h-4.5 w-4.5 text-terracotta" />
                    <span>Reserve Saturday Drop-off Slot:</span>
                  </h4>
                  <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="w-full rounded-lg border border-warm-brown/30 bg-cream p-2 text-warm-brown focus:border-terracotta focus:outline-none"
                    required
                  >
                    <option value="Saturday 9:30 AM">Saturday 9:30 AM (Early riser special)</option>
                    <option value="Saturday 10:15 AM">Saturday 10:15 AM</option>
                    <option value="Saturday 11:00 AM">Saturday 11:00 AM (Peak vibe slots)</option>
                    <option value="Saturday 11:45 AM">Saturday 11:45 AM</option>
                  </select>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Dropoff Name"
                        className="w-full rounded-lg border border-warm-brown/30 bg-cream p-2 text-warm-brown focus:border-terracotta focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Your Contact Email"
                        className="w-full rounded-lg border border-warm-brown/30 bg-cream p-2 text-warm-brown focus:border-terracotta focus:outline-none text-xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="flex-1 text-center py-2.5 rounded-full border border-warm-brown text-warm-brown font-semibold text-xs cursor-pointer"
                  >
                    Adjust garment info
                  </button>
                  <button
                    type="submit"
                    className="flex-1 text-center py-2.5 rounded-full bg-olive text-cream font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Book Dropoff Slot
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
