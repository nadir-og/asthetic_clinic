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
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 border border-zinc-200 px-4 py-1.5 mb-4">
            <Zap className="h-3.5 w-3.5 text-zinc-950" />
            <span className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              Limited-Time Flash Offers
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 text-center mb-4">
            Signature Bundle Deals
          </h2>
          <p className="text-sm lg:text-base text-zinc-500 max-w-xl mx-auto text-center mb-12">
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
                className={`relative flex flex-col rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-zinc-300 ${
                  bundle.bestValue
                    ? 'border-2 border-zinc-950 bg-white shadow-lg lg:scale-105 lg:-my-2 z-10'
                    : 'bg-white/90 backdrop-blur-md border border-zinc-200 shadow-sm'
                }`}
              >
                {/* Best Seller ribbon */}
                {bundle.bestValue && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-1.5 text-xs font-bold text-white shadow-lg whitespace-nowrap">
                    <Crown className="h-3.5 w-3.5" />
                    Best Seller
                  </div>
                )}

                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider border bg-zinc-100 text-zinc-800 border-zinc-200`}
                  >
                    {bundle.badge}
                  </span>
                  <span className="text-xs font-bold text-zinc-950">
                    {discount}% OFF
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-zinc-950 mb-1">
                  {bundle.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6 mt-2">
                  <span className="text-3xl font-bold text-zinc-950">
                    Rs. {bundle.price.toLocaleString()}
                  </span>
                  <span className="text-stone-400 line-through text-sm">
                    Rs. {bundle.originalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Treatments list */}
                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {bundle.treatments.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-zinc-650">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-zinc-100 border border-zinc-200 flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-zinc-900" />
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
                  className="bg-zinc-950 hover:bg-zinc-800 text-white font-medium px-6 py-3.5 rounded-full shadow-md transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 w-full mt-auto"
                >
                  <MessageCircle className="h-4 w-4 fill-white/10" />
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
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-sm text-slate-600">
            Loved by 490+ patients · 73+ Google reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
