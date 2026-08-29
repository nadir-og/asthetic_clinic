import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, MessageCircle, Instagram, Heart } from 'lucide-react';
import { clinic, navLinks } from '@/data/clinicData';
import { waPrivilegeLink, telLink, mapsLink } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden">
      {/* Deep zinc-950 background */}
      <div className="absolute inset-0 bg-zinc-950 border-t border-zinc-900" />

      {/* Subtle orbs */}
      <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-zinc-800/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-zinc-900/5 blur-3xl" />

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
              <div className="relative h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-white">A</span>
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-500" />
              </div>
              <div>
                <p className="font-serif text-xl font-bold text-white">
                  {clinic.name}
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-zinc-400 font-semibold">
                  Advanced Aesthetics
                </p>
              </div>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed max-w-md mb-6">
              {clinic.tagline}. Located in {clinic.city}, delivering world-class
              aesthetic treatments with specialist doctors and FDA-cleared technology.
            </p>

            <a
              href={waPrivilegeLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-white text-zinc-900 font-medium px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 text-sm group"
            >
              <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-zinc-950/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-in-out"></span>
              <MessageCircle className="h-4 w-4 fill-current opacity-80 relative z-10" />
              <span className="relative z-10">Book via WhatsApp</span>
            </a>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-300 hover:text-white transition-colors"
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
            <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={telLink()}
                  className="flex items-start gap-2.5 text-sm text-stone-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                  {clinic.phone}
                </a>
              </li>
              <li>
                <a
                  href={mapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-stone-300 hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                  {clinic.address}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-stone-300">
                <Clock className="h-4 w-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                {clinic.timings}
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-start gap-2.5 text-sm text-stone-300 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4 text-zinc-400 flex-shrink-0 mt-0.5" />
                  @aura.aesthetics
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-stone-400 text-center sm:text-left">
              © {new Date().getFullYear()} {clinic.name}. All rights reserved.
            </p>
            <p className="text-xs text-stone-400 flex items-center gap-1.5">
              <Heart className="h-3 w-3 text-zinc-400" />
              Crafted with care for your aesthetic journey.
            </p>
          </div>
          <p className="text-[10px] text-stone-500 mt-3 text-center sm:text-left max-w-3xl leading-relaxed">
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
