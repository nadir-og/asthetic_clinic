import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Instagram, Heart } from 'lucide-react';
import { clinic, navLinks } from '@/data/clinicData';
import { waAnniversaryLink, telLink, mapsLink } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden">
      {/* Deep emerald/black background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-deep via-emerald-deep to-slate-deep" />

      {/* Subtle orbs */}
      <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-emerald-light/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-light to-emerald-mid flex items-center justify-center shadow-emerald-glow">
                <span className="font-serif text-2xl font-bold text-champagne-light">E</span>
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gold animate-pulse-glow" />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-white">
                  {clinic.name}
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-champagne-light/70 font-semibold">
                  Aesthetics & Health Care
                </p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-md mb-6">
              {clinic.tagline}. Located in {clinic.city}, delivering world-class
              aesthetic treatments with specialist doctors and FDA-cleared technology.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={waAnniversaryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-shimmer relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-5 py-3 text-sm font-semibold text-white shadow-whatsapp-glow animate-pulse-glow hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-4 w-4 fill-white/20" />
              Book via WhatsApp
            </a>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-champagne-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={telLink()}
                  className="flex items-start gap-2.5 text-sm text-white/60 hover:text-champagne-light transition-colors"
                >
                  <Phone className="h-4 w-4 text-emerald-light flex-shrink-0 mt-0.5" />
                  {clinic.phone}
                </a>
              </li>
              <li>
                <a
                  href={mapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-white/60 hover:text-champagne-light transition-colors"
                >
                  <MapPin className="h-4 w-4 text-emerald-light flex-shrink-0 mt-0.5" />
                  {clinic.address}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Clock className="h-4 w-4 text-emerald-light flex-shrink-0 mt-0.5" />
                {clinic.timings}
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-start gap-2.5 text-sm text-white/60 hover:text-champagne-light transition-colors"
                >
                  <Instagram className="h-4 w-4 text-emerald-light flex-shrink-0 mt-0.5" />
                  @elixir.aesthetics
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/40 text-center sm:text-left">
              © {new Date().getFullYear()} {clinic.name}. All rights reserved.
            </p>
            <p className="text-xs text-white/40 flex items-center gap-1.5">
              <Heart className="h-3 w-3 text-gold/60" />
              Crafted with care for {clinic.city}.
            </p>
          </div>
          <p className="text-[10px] text-white/30 mt-3 text-center sm:text-left max-w-3xl">
            Disclaimer: Results may vary per individual. All treatments are performed by
            qualified dermatologists. This website is for informational purposes and does
            not constitute medical advice. Please consult our specialists for a personalised
            treatment plan.
          </p>
        </div>
      </div>
    </footer>
  );
}
