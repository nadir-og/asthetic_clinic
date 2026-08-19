import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { clinic, navLinks } from '@/data/clinicData';
import { waAnniversaryLink, telLink } from '@/lib/whatsapp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-mid to-emerald-deep flex items-center justify-center shadow-emerald-glow">
              <span className="font-serif text-xl font-bold text-champagne-light">E</span>
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gold animate-pulse-glow" />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="font-serif text-base font-bold text-slate-deep tracking-tight">
                Elixir
              </p>
              <p className="text-[10px] uppercase tracking-[0.15em] text-emerald-mid font-semibold">
                Aesthetics
              </p>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-slate-600 hover:text-emerald-mid transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={telLink()}
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-emerald-mid/20 px-3.5 py-2 text-sm font-semibold text-emerald-deep hover:bg-emerald-mid/5 transition-all"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Call</span>
            </a>

            <a
              href={waAnniversaryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-shimmer relative flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-3.5 sm:px-5 py-2 text-sm font-semibold text-white shadow-whatsapp-glow animate-pulse-glow hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-4 w-4 fill-white/20" />
              <span className="hidden sm:inline">Book via WhatsApp</span>
              <span className="sm:hidden">Book</span>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-deep hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden glass border-t border-white/20"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-mid/5 hover:text-emerald-mid transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={telLink()}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-emerald-deep hover:bg-emerald-mid/5 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {clinic.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
