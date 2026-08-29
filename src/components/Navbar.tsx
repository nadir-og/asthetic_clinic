import { useState } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { clinic, navLinks } from '@/data/clinicData';
import { waPrivilegeLink, telLink } from '@/lib/whatsapp';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 px-6 py-4"
    >
      {/* Inner Container */}
      <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between">
        {/* LEFT — Logo monogram */}
        <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="relative h-8 w-8 rounded-lg bg-zinc-950 flex items-center justify-center">
            <span className="font-serif text-base font-light text-white">A</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 leading-tight">
            <span className="text-zinc-300 font-light text-base select-none">|</span>
            <div>
              <p className="font-serif text-sm font-semibold text-zinc-950 tracking-widest leading-none uppercase">
                Aura
              </p>
              <p className="text-[8px] uppercase tracking-[0.25em] text-zinc-950 font-medium leading-none mt-0.5">
                Medical Aesthetics
              </p>
            </div>
          </div>
        </a>

        {/* CENTER — Nav links */}
        <LayoutGroup id="navigation">
          <div 
            className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                className="relative py-1.5 text-sm font-semibold text-zinc-950 hover:text-amber-700 transition-colors"
              >
                {link.label}
                {hoveredLink === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-700 origin-left"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30
                    }}
                  />
                )}
              </a>
            ))}
          </div>
        </LayoutGroup>

        {/* RIGHT — CTAs */}
        <div className="flex items-center gap-3">
          {/* Call (Secondary Outline) */}
          <a
            href={telLink()}
            className="relative overflow-hidden hidden sm:flex items-center gap-1.5 bg-transparent text-zinc-950 border border-zinc-200 hover:border-zinc-950 font-medium px-6 py-3 text-xs tracking-widest uppercase rounded-full transition-all duration-300 group"
          >
            <span className="absolute inset-0 bg-zinc-950 rounded-t-[100%] translate-y-[102%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-out pointer-events-none" />
            <span className="relative z-10 flex items-center gap-1.5 text-zinc-950 group-hover:text-white transition-colors duration-500">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Call Reception</span>
            </span>
          </a>

          {/* Book via WhatsApp (Primary Pill) */}
          <a
            href={waPrivilegeLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-zinc-950 text-white font-medium px-6 py-3 text-xs tracking-widest uppercase rounded-full border border-zinc-950 transition-all duration-300 shadow-sm flex items-center justify-center gap-1.5 flex-shrink-0 group"
          >
            <span className="absolute inset-0 bg-white rounded-t-[100%] translate-y-[102%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-out pointer-events-none" />
            <span className="relative z-10 flex items-center gap-1.5 text-white group-hover:text-zinc-950 transition-colors duration-500">
              <MessageCircle className="h-3.5 w-3.5 fill-current opacity-70" />
              <span className="hidden md:inline">Book on WhatsApp</span>
            </span>
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
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-950 hover:text-amber-700 transition-colors"
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
