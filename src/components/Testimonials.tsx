import { motion } from 'framer-motion';
import { Star, BadgeCheck, Quote, Heart, Instagram } from 'lucide-react';
import { testimonials, socialStats } from '@/data/clinicData';

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-16 lg:py-24">
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
            <Heart className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Verified Social Proof
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-deep mb-3">
            What Our <span className="text-gold-gradient">Patients Say</span>
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Real reviews from verified patients who transformed their skin and hair at Elixir.
          </p>
        </motion.div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {socialStats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-5 text-center"
            >
              <p className="font-serif text-3xl font-bold text-emerald-deep">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col rounded-3xl glass-card p-6 hover:shadow-glass-hover transition-shadow"
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 h-8 w-8 text-gold/15" />

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                "{t.review}"
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-gold/20"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-slate-deep truncate">{t.name}</p>
                    {t.verified && (
                      <BadgeCheck className="h-4 w-4 text-emerald-mid flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-400 truncate">{t.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mt-10"
        >
          <Instagram className="h-5 w-5 text-emerald-mid" />
          <p className="text-sm text-slate-500">
            Follow us on Instagram for more transformations and patient stories.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
