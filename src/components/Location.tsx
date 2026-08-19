import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';
import { clinic } from '@/data/clinicData';
import { telLink, mapsLink, mapsEmbedUrl } from '@/lib/whatsapp';

export default function Location() {
  return (
    <section id="location" className="relative py-16 lg:py-24">
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
            <MapPin className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Visit Us
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-deep mb-3">
            Clinic <span className="text-gold-gradient">Location</span>
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Find us in the heart of {clinic.city}. Walk-ins welcome, or book via WhatsApp.
          </p>
        </motion.div>

        {/* 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden glass-card p-2 shadow-lg"
          >
            <div className="relative w-full h-full min-h-[320px] sm:min-h-[400px] rounded-2xl overflow-hidden">
              <iframe
                src={mapsEmbedUrl()}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic location on Google Maps"
              />
            </div>
          </motion.div>

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            {/* Address */}
            <div className="glass-card rounded-3xl p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-11 w-11 rounded-2xl bg-emerald-mid/10 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-emerald-mid" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-deep mb-1">
                    Our Address
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {clinic.name}
                    <br />
                    {clinic.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card rounded-3xl p-6 lg:p-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-11 w-11 rounded-2xl bg-gold/15 flex-shrink-0">
                  <Clock className="h-5 w-5 text-gold-deep" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-deep mb-1">
                    Opening Hours
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{clinic.timings}</p>
                  <p className="text-xs text-slate-400 mt-1">Closed on Sundays</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={telLink()}
                className="flex items-center justify-center gap-2 rounded-full glass-card px-5 py-3.5 text-sm font-semibold text-slate-deep hover:shadow-glass-hover transition-all"
              >
                <Phone className="h-4 w-4 text-emerald-mid" />
                Call Reception
              </a>
              <a
                href={mapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-mid to-emerald-deep px-5 py-3.5 text-sm font-semibold text-white shadow-emerald-glow hover:scale-105 transition-transform"
              >
                <Navigation className="h-4 w-4" />
                Open in Google Maps
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
