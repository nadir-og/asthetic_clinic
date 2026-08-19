import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Clock,
  MessageCircle,
  Tag,
  Sparkles,
  Timer,
} from 'lucide-react';
import { services, filterTabs } from '@/data/clinicData';
import { waServiceLink } from '@/lib/whatsapp';

export default function Treatments() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

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
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 mb-4">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Featured Treatments
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-deep mb-3">
            Signature Aesthetic{' '}
            <span className="text-gold-gradient">Treatments</span>
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Each treatment is performed by specialist doctors using FDA-cleared technology.
            Claim your anniversary deal via WhatsApp.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto rounded-full glass-card p-1.5 max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`relative whitespace-nowrap rounded-full px-4 sm:px-5 py-2 text-sm font-semibold transition-colors ${
                  activeFilter === tab
                    ? 'text-white'
                    : 'text-slate-600 hover:text-emerald-mid'
                }`}
              >
                {activeFilter === tab && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-mid to-emerald-deep shadow-emerald-glow"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl glass-card hover:shadow-glass-hover transition-shadow"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Discount tag */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-gold to-champagne-deep px-2.5 py-1 text-xs font-bold text-white shadow-lg">
                      <Tag className="h-3 w-3" />
                      {discount}% OFF
                    </div>

                    {/* Category badge */}
                    <div className="absolute bottom-3 left-3 rounded-full glass px-3 py-1 text-[10px] font-semibold text-white uppercase tracking-wider">
                      {service.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-xl font-bold text-slate-deep mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="flex flex-col gap-1.5 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="h-4 w-4 text-emerald-mid flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Duration / Downtime badges */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1.5 rounded-full bg-emerald-mid/8 px-3 py-1 text-xs font-medium text-emerald-deep">
                        <Clock className="h-3 w-3" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                        <Timer className="h-3 w-3" />
                        {service.downtime}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 mb-4 mt-auto">
                      <span className="text-2xl font-bold text-emerald-deep">
                        Rs. {service.salePrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-slate-400 line-through">
                        Rs. {service.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    {/* CTA */}
                    <a
                      href={waServiceLink(service.title, service.salePrice)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-shimmer relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:shadow-whatsapp-glow transition-all"
                    >
                      <MessageCircle className="h-4 w-4 fill-white/20" />
                      Claim Deal on WhatsApp
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
