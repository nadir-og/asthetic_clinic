import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Users,
  Stethoscope,
  MessageCircle,
  ArrowRight,
  BadgeCheck,
} from 'lucide-react';
import { clinic, heroStats, heroImage } from '@/data/clinicData';
import { waPrivilegeLink } from '@/lib/whatsapp';

const phrases = [
  'Natural Radiance.',
  'Flawless Skin.',
  'Youthful Vitality.',
  'Permanent Hair Density.',
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    // Pause on completed phrase: 2000ms
    if (!isDeleting && currentText === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    // Pause before typing next phrase: 300ms
    if (isDeleting && currentText === '') {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 300);
      return () => clearTimeout(timeout);
    }

    // Typing speed: ~80ms per character; Deleting speed: ~40ms per character
    const speed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      setCurrentText(
        currentPhrase.substring(0, currentText.length + (isDeleting ? -1 : 1))
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section className="relative overflow-visible">
      {/* Ambient radial glow — behind hero */}
      <div className="absolute -top-24 left-1/3 w-[650px] h-[500px] bg-gradient-to-b from-stone-200/40 via-amber-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-zinc-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-16 min-h-[calc(100vh-100px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">

          {/* LEFT column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Trust pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/90 border border-zinc-200 shadow-sm px-4 py-2 rounded-full text-xs font-semibold text-zinc-800 mb-6 max-w-fit"
            >
              <BadgeCheck className="h-4 w-4 text-zinc-950" />
              <span>Rated #1 Aesthetic Clinic in {clinic.city}</span>
              <span className="flex items-center gap-0.5 ml-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </span>
            </motion.div>

            {/* Luxury Balanced Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.2] mb-6 max-w-xl text-balance">
              <span>Advanced Medical Aesthetics for</span>{' '}
              <span className="inline-block relative text-amber-800 italic whitespace-nowrap">
                <span>{currentText}</span>
                {/* Blinking Vertical Cursor */}
                <span className="inline-block w-[2.5px] h-[0.85em] bg-amber-800 ml-1.5 align-middle animate-pulse" />
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-zinc-600 text-sm lg:text-base max-w-lg leading-relaxed mb-8 font-normal">
              {clinic.tagline}. Experience world-class non-surgical and surgical treatments delivered
              by specialist doctors — now at up to{' '}
              <span className="font-semibold text-zinc-950">50% OFF</span> during our seasonal
              privilege period.
            </p>

            {/* Social proof badges */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-y border-zinc-200/80 mb-8">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-zinc-100 border border-zinc-200 flex-shrink-0">
                    {i === 0 && <Users className="h-4 w-4 text-zinc-900" />}
                    {i === 1 && <Star className="h-4 w-4 text-zinc-900 fill-zinc-900/10" />}
                    {i === 2 && <Stethoscope className="h-4 w-4 text-zinc-900" />}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-zinc-900 leading-none">{stat.value}</p>
                    <p className="text-xs text-zinc-500 mt-1 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* High-End Inverting CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={waPrivilegeLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-950 text-white border-2 border-zinc-950 font-medium px-8 py-3.5 rounded-full shadow-md transition-all duration-300 hover:bg-white hover:text-zinc-950 hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 text-sm"
              >
                <MessageCircle className="h-4 w-4 fill-current opacity-70" />
                <span>Book VIP Consultation</span>
              </a>
              <a
                href="#treatments"
                className="bg-white text-zinc-900 border border-zinc-200 font-medium px-8 py-3.5 rounded-full shadow-sm transition-all duration-300 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 hover:shadow-md text-sm flex items-center justify-center gap-2 group"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT column — image with floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 relative w-full max-w-lg mx-auto rounded-[2.5rem] p-2 bg-gradient-to-b from-zinc-200 to-white shadow-2xl border border-zinc-200/60 overflow-visible"
          >
            <img
              src={heroImage}
              alt="Elixir Aesthetics clinic interior"
              className="w-full h-[450px] lg:h-[500px] object-cover rounded-[2rem] transition-all duration-700 hover:scale-[1.02] shadow-2xl"
            />

            {/* Floating badge — Google rating (top-left) */}
            <div className="animate-bounce [animation-duration:3.5s] absolute -top-4 -left-6 bg-white/95 backdrop-blur-xl border border-zinc-200/90 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-zinc-100 border border-zinc-200 flex-shrink-0">
                <BadgeCheck className="h-4 w-4 text-zinc-950" />
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-800 leading-none">4.9★ Google</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Verified</p>
              </div>
            </div>

            {/* Floating badge — 50% OFF (bottom-right) */}
            <div className="animate-pulse [animation-duration:4s] absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-xl border border-zinc-200/90 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-zinc-100 border border-zinc-200 flex-shrink-0">
                <span className="text-xs font-bold text-zinc-950">%</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-800 leading-none">Up to 50% OFF</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Seasonal Privilege</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
