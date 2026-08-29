import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  MessageCircle,
  Sparkles,
  Timer,
} from 'lucide-react';
import { services, filterTabs } from '@/data/clinicData';
import { waServiceLink } from '@/lib/whatsapp';
import TypewriterText from '@/components/TypewriterText';

const words = [
  'Aesthetic Treatments',
  'Clinical Skincare',
  'Laser Therapies',
  'Hair Restorations',
];

export default function Treatments() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filtered =
    activeFilter === 'All'
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <section id="treatments" className="pt-16 pb-24 bg-white">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 pt-12 pb-8 text-center"
      >
        <div className="inline-flex items-center gap-2 bg-transparent text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 mx-auto">
          <Sparkles className="h-3.5 w-3.5 text-zinc-950" />
          <span>Featured Treatments</span>
        </div>

        {/* Auto-typing headline */}
        <h2 className="font-serif text-4xl lg:text-5xl font-bold text-zinc-950 text-center mb-4 leading-tight tracking-tight flex items-center justify-center flex-wrap">
          <span>Signature&nbsp;</span>
          <TypewriterText words={words} className="text-zinc-950" cursorClassName="border-r-2 border-zinc-950 ml-1 inline-block h-8 lg:h-10 align-middle" />
        </h2>

        <p className="font-sans text-sm md:text-base text-zinc-600 max-w-xl mx-auto text-center mb-12 leading-relaxed">
          Each treatment is performed by specialist doctors using FDA-cleared technology.
          Claim your seasonal privilege deal via WhatsApp.
        </p>
      </motion.div>

      {/* Interactive Filter Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center justify-center p-1.5 bg-stone-100/80 backdrop-blur-md rounded-full border border-stone-200/80 mb-10 overflow-x-auto max-w-full no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={
                  isActive
                    ? 'bg-zinc-950 text-white shadow-sm px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300'
                    : 'text-stone-600 hover:text-zinc-950 hover:bg-white/60 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200'
                }
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6"
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
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="group relative bg-white border border-zinc-200/80 rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between overflow-hidden transform-gpu will-change-transform"
              >
                <div>
                  {/* Image with zoom */}
                  <div className="relative h-56 w-full overflow-hidden rounded-2xl mb-4 bg-zinc-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3 bg-zinc-950/90 backdrop-blur-md text-zinc-100 text-[11px] font-bold px-3 py-1 rounded-full shadow-md tracking-wide">
                      {discount}% OFF
                    </div>

                    {/* Category Chip */}
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-stone-850 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                      {service.category}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-serif text-xl font-bold text-zinc-950 mb-1.5 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-zinc-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Meta Tags Row (Duration & Downtime) */}
                  <div className="flex items-center gap-2 mb-4 text-[11px] font-medium text-zinc-500">
                    <div className="bg-stone-50 border border-stone-200/60 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-zinc-500" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="bg-stone-50 border border-stone-200/60 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                      <Timer className="h-3.5 w-3.5 text-zinc-500" />
                      <span>{service.downtime}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing & WhatsApp Action */}
                <div className="pt-3.5 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div className="flex items-baseline">
                    <span className="text-lg font-bold text-zinc-950">
                      Rs. {service.salePrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-stone-400 line-through ml-1.5 font-normal">
                      Rs. {service.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  <a
                    href={waServiceLink(service.title, service.salePrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-950 text-white font-medium px-5 py-2.5 text-xs tracking-widest uppercase rounded-full border border-zinc-950 hover:bg-white hover:text-zinc-950 transition-colors duration-300 shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <MessageCircle className="h-3.5 w-3.5 fill-current" />
                    <span>Claim Deal</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
