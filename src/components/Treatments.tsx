import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  MessageCircle,
  Sparkles,
  Timer,
  ArrowRight,
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
        className="grid grid-cols-1 gap-x-4 gap-y-8 px-4 md:grid-cols-2 md:gap-x-6 md:gap-y-10 md:px-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12 lg:px-12 max-w-7xl mx-auto"
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
                className="group relative bg-white border border-stone-200/90 rounded-3xl p-5 shadow-sm hover:shadow-2xl hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden transform-gpu will-change-transform"
              >
                {/* Subtle gold sheen hover glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-200/20 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-all duration-500"></div>

                <div>
                  {/* Image with zoom */}
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-4 bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3 bg-zinc-950/90 backdrop-blur-md text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full shadow-md tracking-wide">
                      {discount}% OFF
                    </div>

                    {/* Category Chip */}
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-stone-800 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                      {service.category}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="font-serif text-xl font-bold text-zinc-950 mb-1.5 group-hover:text-amber-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-4 h-10">
                    {service.description}
                  </p>

                  {/* Meta Tags Row (Duration & Downtime) */}
                  <div className="flex items-center gap-2 mb-4 text-[11px] font-medium text-stone-500">
                    <div className="bg-stone-50 border border-stone-200/60 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-stone-600" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="bg-stone-50 border border-stone-200/60 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                      <Timer className="h-3.5 w-3.5 text-stone-600" />
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
                    className="bg-zinc-950 group-hover:bg-amber-800 text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm transition-all duration-300 group-hover:shadow-md active:scale-95 whitespace-nowrap"
                  >
                    <MessageCircle className="h-3.5 w-3.5 fill-current opacity-90" />
                    <span>Claim Deal</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
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
