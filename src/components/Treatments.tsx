import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
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
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  const filtered =
    activeFilter === 'All'
      ? services
      : services.filter((s) => s.category === activeFilter);
  return (
    <section id="treatments" className="pt-16 pb-24 lg:pt-24 bg-white">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 pt-12 lg:pt-0 pb-0 sm:pb-8 text-center"
      >
        <div className="inline-flex items-center gap-2 bg-transparent text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 mx-auto">
          <Sparkles className="h-3.5 w-3.5 text-zinc-950" />
          <span>Featured Treatments</span>
        </div>

        {/* Auto-typing headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-950 text-center mb-4 leading-tight tracking-tight flex flex-col sm:flex-row items-center sm:justify-center lg:items-baseline lg:justify-center">
          <span>Signature&nbsp;</span>
          <span className="inline-block text-amber-800 min-h-[1.2em]">
            <TypewriterText words={words} className="text-amber-800" cursorClassName="border-r-2 border-zinc-950 ml-1 inline-block h-6 sm:h-8 lg:h-10 align-middle" />
          </span>
        </h2>

        <p className="font-sans text-sm md:text-base text-zinc-600 max-w-xl mx-auto text-center mb-8 sm:mb-10 leading-relaxed">
          Each treatment is performed by specialist doctors using FDA-cleared technology.
          Claim your seasonal privilege deal via WhatsApp.
        </p>
      </motion.div>

      {/* Interactive Filter Tabs */}
      <div className="flex justify-center mb-8 w-full px-6 md:px-0">
        <div className="flex flex-wrap justify-center gap-2 p-1.5 max-w-full relative md:inline-flex md:items-center md:bg-stone-100/80 md:backdrop-blur-md md:rounded-full md:border md:border-stone-200/80">
          <LayoutGroup id="treatment-filters">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`relative px-5 py-2 rounded-full text-xs font-semibold transition-colors duration-350 ease-out whitespace-nowrap z-10 ${
                    isActive
                      ? 'text-white'
                      : 'text-stone-600 bg-stone-100 border border-stone-200/60 hover:text-zinc-950 hover:bg-stone-200/60 md:bg-transparent md:border-none'
                  }`}
                >
                  {tab}
                  {isActive && (
                    <motion.span
                      layoutId="active-treatment-tab"
                      className="absolute inset-0 bg-zinc-950 rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </LayoutGroup>
        </div>
      </div>

      {/* Cards grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((service) => {
            const discount = Math.round(
              ((service.originalPrice - service.salePrice) / service.originalPrice) * 100
            );
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={isTouch ? {} : { y: -8 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 120, 
                  damping: 18, 
                  opacity: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                }}
                className="group relative bg-white border border-zinc-100 shadow-[0_8px_30px_rgb(0,0,0,0.015)] rounded-3xl p-5 hover:shadow-[0_20px_40px_rgba(139,92,26,0.05)] hover:border-amber-500/25 flex flex-col justify-between overflow-hidden transform-gpu"
              >
                {/* Subtle gold sheen hover glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-200/20 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-all duration-500"></div>

                <div>
                  {/* Image with zoom */}
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-4 bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={384}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3 bg-amber-50 border border-amber-200/60 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm tracking-wider">
                      {discount}% OFF
                    </div>
                  </div>

                  {/* Category Subtitle */}
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.2em] mb-1.5 block">
                    {service.category}
                  </span>

                  {/* Title & Short Description */}
                  <h3 className="font-serif text-lg font-bold text-zinc-950 mb-1 group-hover:text-amber-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs font-light text-zinc-500 leading-relaxed mb-4 line-clamp-2 h-9">
                    {service.description}
                  </p>

                  {/* Meta Tags Row (Duration & Downtime) */}
                  <div className="flex items-center gap-3 text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-4 mt-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-amber-600/70" />
                      {service.duration}
                    </span>
                    <span className="text-zinc-200">•</span>
                    <span className="flex items-center gap-1.5">
                      <Timer className="h-3.5 w-3.5 text-amber-600/70" />
                      {service.downtime}
                    </span>
                  </div>
                </div>

                {/* Pricing & WhatsApp Action */}
                <div className="pt-3.5 border-t border-zinc-100 flex items-center justify-between gap-3">
                  <div className="flex flex-col justify-center">
                    <span className="text-lg font-bold text-zinc-950 leading-none">
                      Rs. {service.salePrice.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-zinc-400 line-through mt-1.5 font-normal leading-none">
                      Rs. {service.originalPrice.toLocaleString()}
                    </span>
                  </div>

                  <motion.a
                    href={waServiceLink(service.title, service.salePrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -1, scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    className="relative overflow-hidden bg-zinc-950 text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm border border-zinc-950 transition-all duration-300 whitespace-nowrap group/btn"
                  >
                    <span className="absolute inset-0 bg-white rounded-t-[100%] translate-y-[102%] group-hover/btn:translate-y-0 group-hover/btn:rounded-none transition-all duration-500 ease-out pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-1.5 text-white group-hover/btn:text-zinc-950 transition-colors duration-500">
                      <MessageCircle className="h-3.5 w-3.5 fill-current opacity-90" />
                      <span>Claim Deal</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
