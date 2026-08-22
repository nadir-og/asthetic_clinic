import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { clinic, navLinks } from '@/data/clinicData';
import { waPrivilegeLink, telLink } from '@/lib/whatsapp';

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
      className={`sticky top-0 z-50 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-zinc-200/70 transition-all duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      {/* Inner Container */}
      <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* LEFT — Logo monogram */}
        <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="relative h-8 w-8 rounded-xl bg-zinc-950 flex items-center justify-center shadow-md">
            <span className="font-serif text-base font-bold text-white">E</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 leading-tight">
            <span className="text-zinc-300 font-light text-base select-none">|</span>
            <div>
              <p className="font-serif text-sm font-bold text-zinc-900 tracking-tight leading-none">
                ELIXIR
              </p>
              <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-500 font-semibold leading-none mt-0.5">
                AESTHETICS
              </p>
            </div>
          </div>
        </a>

        {/* CENTER — Nav links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-zinc-950 transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-zinc-950 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* RIGHT — CTAs */}
        <div className="flex items-center gap-3">
          {/* Call pill (Secondary) */}
          <a
            href={telLink()}
            className="hidden sm:flex items-center gap-1.5 bg-white text-zinc-900 border border-stone-300/80 hover:border-zinc-950 font-semibold px-4 py-2 text-xs rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden md:inline">Call Reception</span>
          </a>

          {/* Book via WhatsApp (Primary) */}
          <a
            href={waPrivilegeLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-zinc-950 text-white font-semibold p-3 md:px-5 md:py-2 text-xs rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1.5 group min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0"
          >
            <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></span>
            <MessageCircle className="h-3.5 w-3.5 fill-current opacity-70 relative z-10" />
            <span className="hidden md:inline relative z-10">Book on WhatsApp</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-900 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
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
            className="md:hidden overflow-hidden border-t border-zinc-200/60"
          >
            <div className="px-6 py-4 flex flex-col gap-1 bg-[#FDFCFB]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-zinc-200">
                <a
                  href={telLink()}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {clinic.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
