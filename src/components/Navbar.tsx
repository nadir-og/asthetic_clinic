import { useState, useEffect } from 'react';
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { clinic, navLinks } from '@/data/clinicData';
import { waPrivilegeLink, telLink } from '@/lib/whatsapp';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const line1Variants = {
    closed: { rotate: 0, y: -6 },
    opened: { rotate: 45, y: 0 }
  };
  const line2Variants = {
    closed: { opacity: 1, scale: 1 },
    opened: { opacity: 0, scale: 0 }
  };
  const line3Variants = {
    closed: { rotate: 0, y: 6 },
    opened: { rotate: -45, y: 0 }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetSelector = href === '#' ? 'body' : href;
      const target = document.querySelector(targetSelector);
      if (target && (window as any).lenis) {
        (window as any).lenis.scrollTo(target, {
          offset: href === '#' ? 0 : -80,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
        });
      } else if (target) {
        const rect = target.getBoundingClientRect();
        const top = rect.top + window.scrollY - (href === '#' ? 0 : 80);
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md transition-colors duration-300 ${
        mobileOpen 
          ? 'bg-transparent border-b border-transparent' 
          : 'bg-white/90 border-b border-zinc-200/80'
      }`}
    >
      {/* Inner Container */}
      <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between">
        {/* LEFT — Logo monogram */}
        <motion.a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2.5 group flex-shrink-0"
        >
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
        </motion.a>

        {/* CENTER — Nav links */}
        <LayoutGroup id="navigation">
          <div 
            className="hidden lg:flex items-center gap-5 xl:gap-8 text-[11px] xl:text-xs uppercase tracking-widest font-normal text-zinc-500"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
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
          <motion.a
            href={telLink()}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden hidden sm:flex items-center gap-1.5 bg-transparent text-zinc-950 border border-zinc-200 hover:border-zinc-950 font-medium p-3 xl:px-6 xl:py-3 text-xs tracking-widest uppercase rounded-full transition-all duration-300 group"
          >
            <span className="absolute inset-0 bg-zinc-950 rounded-t-[100%] translate-y-[102%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-out pointer-events-none" />
            <span className="relative z-10 flex items-center gap-1.5 text-zinc-950 group-hover:text-white transition-colors duration-500">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">Call Reception</span>
            </span>
          </motion.a>

          {/* Book via WhatsApp (Primary Pill) */}
          <motion.a
            href={waPrivilegeLink()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden bg-zinc-950 text-white font-medium p-3 xl:px-6 xl:py-3 text-xs tracking-widest uppercase rounded-full border border-zinc-950 transition-all duration-300 shadow-sm hidden sm:flex items-center justify-center gap-1.5 flex-shrink-0 group"
          >
            <span className="absolute inset-0 bg-white rounded-t-[100%] translate-y-[102%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-out pointer-events-none" />
            <span className="relative z-10 flex items-center gap-1.5 text-white group-hover:text-zinc-950 transition-colors duration-500">
              <MessageCircle className="h-3.5 w-3.5 fill-current opacity-70" />
              <span className="hidden xl:inline">Book on WhatsApp</span>
            </span>
          </motion.a>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden relative h-10 w-10 rounded-full border border-zinc-200 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              variants={line1Variants}
              animate={mobileOpen ? "opened" : "closed"}
              className="w-5 h-[1.5px] bg-zinc-950 absolute rounded-full"
              transition={{ duration: 0.25 }}
            />
            <motion.span
              variants={line2Variants}
              animate={mobileOpen ? "opened" : "closed"}
              className="w-5 h-[1.5px] bg-zinc-950 absolute rounded-full"
              transition={{ duration: 0.25 }}
            />
            <motion.span
              variants={line3Variants}
              animate={mobileOpen ? "opened" : "closed"}
              className="w-5 h-[1.5px] bg-zinc-950 absolute rounded-full"
              transition={{ duration: 0.25 }}
            />
          </motion.button>
        </div>
      </div>
    </motion.nav>

    {/* Mobile menu overlay */}
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-[#FDFCFB] lg:hidden pt-28 pb-12 px-8 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-4 justify-center items-center flex-1">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05, duration: 0.4, ease: "easeOut" }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className="font-serif text-3xl font-light tracking-wide text-zinc-950 hover:text-amber-800 transition-colors py-2 block text-center"
                >
                  {link.label}
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Elegant footer inside the menu */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + navLinks.length * 0.05 + 0.1 }}
            className="text-center mt-auto"
          >
            <div className="w-12 h-[1px] bg-zinc-200 mx-auto mb-6" />
            <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-600 font-semibold select-none leading-none">
              {clinic.name} &middot; {clinic.mapsQuery.split(',')[0]}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
  );
}
