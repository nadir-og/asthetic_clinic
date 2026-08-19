import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Star,
  Users,
  Stethoscope,
  MessageCircle,
  ArrowRight,
  BadgeCheck,
} from 'lucide-react';
import { clinic, heroStats, heroImage } from '@/data/clinicData';
import { waAnniversaryLink } from '@/lib/whatsapp';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Trust pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 self-start rounded-full glass-card px-4 py-2"
            >
              <BadgeCheck className="h-4 w-4 text-emerald-mid" />
              <span className="text-xs font-semibold text-slate-600 tracking-wide">
                Rated #1 Aesthetic Clinic in {clinic.city}
              </span>
              <span className="ml-1 flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                ))}
              </span>
            </motion.div>

            {/* Headline */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-deep">
                Transform Your{' '}
                <span className="relative inline-block">
                  <span className="text-gold-gradient">Hair & Skin</span>
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <motion.path
                      d="M2 5 Q 100 1 198 5"
                      stroke="#e6c168"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>{' '}
                With Best-In-Class Medical Aesthetics
              </h1>
            </div>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {clinic.tagline}. Experience world-class non-surgical and surgical
              treatments delivered by specialist doctors — now at up to{' '}
              <span className="font-semibold text-emerald-mid">70% OFF</span>{' '}
              during our anniversary special.
            </p>

            {/* Social proof badges */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex items-center justify-center h-9 w-9 rounded-full bg-emerald-mid/10">
                    {i === 0 && <Users className="h-4 w-4 text-emerald-mid" />}
                    {i === 1 && <Star className="h-4 w-4 text-emerald-mid fill-emerald-mid/20" />}
                    {i === 2 && <Stethoscope className="h-4 w-4 text-emerald-mid" />}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-deep leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href={waAnniversaryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-shimmer relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-3.5 text-base font-semibold text-white shadow-whatsapp-glow animate-pulse-glow hover:scale-105 transition-transform"
              >
                <MessageCircle className="h-5 w-5 fill-white/20" />
                Book via WhatsApp
              </a>
              <a
                href="#treatments"
                className="flex items-center justify-center gap-2 rounded-full glass-card px-6 py-3.5 text-base font-semibold text-slate-deep hover:shadow-glass-hover transition-all group"
              >
                View Treatments
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right column — image with floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10">
              {/* Main image */}
              <img
                src={heroImage}
                alt="Elixir Aesthetics clinic interior"
                className="w-full h-[400px] sm:h-[500px] lg:h-[560px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/30 via-transparent to-transparent" />

              {/* Glass border effect */}
              <div className="absolute inset-0 rounded-[2rem] border border-white/30 pointer-events-none" />
            </div>

            {/* Floating badge — Google rating */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-2 sm:top-6 sm:-left-6 glass-card rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/80">
                  <ShieldCheck className="h-5 w-5 text-emerald-mid" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-deep leading-none">
                    4.9★ Google
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Verified</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge — 70% OFF */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -right-2 sm:bottom-8 sm:-right-6 glass-card rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gold/20">
                  <span className="text-sm font-bold text-gold-deep">%</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-deep leading-none">
                    Up to 70% OFF
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Anniversary Special</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge — Clients */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -right-3 sm:-right-8 glass-card rounded-2xl px-3 py-2.5 shadow-lg hidden sm:block"
            >
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-emerald-mid" />
                <p className="text-xs font-bold text-slate-deep">1,000+ Clients</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
