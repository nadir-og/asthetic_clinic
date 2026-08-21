import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Clock,
  MessageCircle,
  Tag,
  Sparkles,
  Timer,
  ArrowRight,
} from 'lucide-react';
import { services, filterTabs } from '@/data/clinicData';
import { waServiceLink } from '@/lib/whatsapp';

const words = [
  'Aesthetic Treatments',
  'Clinical Skincare',
  'Laser Therapies',
  'Hair Restorations',
];

export default function Treatments() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        currentWord.substring(0, displayedText.length + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  const filtered =
    activeFilter === 'All'
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <section id="treatments" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 border border-zinc-200 px-4 py-1.5 mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-zinc-950" />
            <span className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              Featured Treatments
            </span>
          </div>

          {/* Auto-typing headline */}
          <h2 className="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-zinc-950 text-center mb-4 min-h-[3rem] lg:min-h-[4rem] flex items-center justify-center flex-wrap">
            <span>Signature&nbsp;</span>
            <span className="text-zinc-950">{displayedText}</span>
            <span className="border-r-2 border-zinc-950 animate-pulse ml-1 inline-block h-7 lg:h-9 align-middle" />
          </h2>

          <p className="text-sm lg:text-base text-zinc-600 max-w-xl mx-auto text-center mb-12">
            Each treatment is performed by specialist doctors using FDA-cleared technology.
            Claim your seasonal privilege deal via WhatsApp.
          </p>
        </motion.div>

        {/* Interactive Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto rounded-full bg-stone-100 border border-stone-200 p-1.5 max-w-full">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-md scale-105 transition-all duration-300 px-5 py-2 rounded-full text-xs md:text-sm font-medium'
                      : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200 transition-all duration-200 px-5 py-2 rounded-full text-xs md:text-sm font-medium'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((service, idx) => {
              const discount = Math.round(
                ((service.originalPrice - service.salePrice) / service.originalPrice) * 100
              );
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="bg-white border border-zinc-200/90 rounded-3xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group overflow-hidden relative flex flex-col justify-between"
                >
                  <div>
                    {/* Image with zoom & glow badges */}
                    <div className="overflow-hidden rounded-2xl mb-4 relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      {/* Glowing Badge */}
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md border border-zinc-200 text-zinc-900 text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Tag className="h-3 w-3 text-zinc-800" />
                        {discount}% OFF
                      </div>

                      {/* Category badge */}
                      <div className="absolute bottom-3 left-3 rounded-full bg-white/90 backdrop-blur-sm border border-stone-200/80 px-3 py-1 text-[10px] font-semibold text-slate-800 uppercase tracking-wider">
                        {service.category}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-xl font-bold text-zinc-950 mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="flex flex-col gap-1.5 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-xs font-medium text-zinc-600">
                          <Check className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Duration / Downtime */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-800">
                        <Clock className="h-3 w-3 text-zinc-900" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-800">
                        <Timer className="h-3 w-3 text-zinc-900" />
                        {service.downtime}
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Pricing + WhatsApp Inverting CTA */}
                  <div className="mt-4 pt-4 border-t border-zinc-100">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-zinc-950 font-serif font-bold text-2xl">
                        Rs. {service.salePrice.toLocaleString()}
                      </span>
                      <span className="text-zinc-400 line-through text-sm font-medium">
                        Rs. {service.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    {/* High-End Inverting Button Hover Physics */}
                    <a
                      href={waServiceLink(service.title, service.salePrice)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-zinc-950 text-white border-2 border-zinc-950 font-medium px-8 py-3.5 rounded-full shadow-md transition-all duration-300 hover:bg-white hover:text-zinc-950 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm text-center"
                    >
                      <MessageCircle className="h-4 w-4 fill-current opacity-70" />
                      <span>Claim Deal on WhatsApp</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
