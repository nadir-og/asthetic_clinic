import { motion } from 'framer-motion';
import { Check, MessageCircle, Crown, Star, Zap } from 'lucide-react';
import { bundles } from '@/data/clinicData';
import { waBundleLink } from '@/lib/whatsapp';

export default function Bundles() {
  return (
    <section id="bundles" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 mb-4">
            <Zap className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Limited-Time Flash Offers
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-deep mb-3">
            Anniversary <span className="text-gold-gradient">Bundle Deals</span>
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Save more with curated treatment bundles. All offers end soon — claim via WhatsApp.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {bundles.map((bundle, idx) => {
            const discount = Math.round(
              ((bundle.originalPrice - bundle.price) / bundle.originalPrice) * 100
            );
            return (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col rounded-3xl p-6 lg:p-8 transition-shadow ${
                  bundle.bestValue
                    ? 'glass-card border-2 border-gold shadow-gold-glow lg:scale-105 lg:-my-2'
                    : 'glass-card hover:shadow-glass-hover'
                }`}
              >
                {/* Best Seller ribbon */}
                {bundle.bestValue && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-champagne-deep px-4 py-1.5 text-xs font-bold text-white shadow-lg whitespace-nowrap">
                    <Crown className="h-3.5 w-3.5" />
                    Best Seller
                  </div>
                )}

                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                      bundle.bestValue
                        ? 'bg-gold/15 text-gold-deep'
                        : 'bg-emerald-mid/10 text-emerald-deep'
                    }`}
                  >
                    {bundle.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-mid">
                    {discount}% OFF
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-serif text-2xl font-bold text-slate-deep mb-1">
                  {bundle.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6 mt-2">
                  <span className="text-3xl font-bold text-emerald-deep">
                    Rs. {bundle.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    Rs. {bundle.originalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Treatments list */}
                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {bundle.treatments.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-mid/10 flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-emerald-mid" />
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={waBundleLink(bundle.name, bundle.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`whatsapp-shimmer relative flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white transition-all ${
                    bundle.bestValue
                      ? 'bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-whatsapp-glow animate-pulse-glow'
                      : 'bg-gradient-to-r from-emerald-mid to-emerald-deep hover:shadow-emerald-glow'
                  }`}
                >
                  <MessageCircle className="h-4 w-4 fill-white/20" />
                  Claim Bundle Deal
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Rating note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mt-8"
        >
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Loved by 490+ patients · 73+ Google reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
