import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react';
import { clinic } from '@/data/clinicData';
import { telLink, mapsLink, mapsEmbedUrl } from '@/lib/whatsapp';

function isClinicOpen(): { isOpen: boolean; text: string } {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (day === 0) {
    return { isOpen: false, text: 'Closed Now · Opens Mon 1:00 PM' };
  }

  // Hours: 1:00 PM – 9:00 PM (13:00 to 21:00)
  const currentMinutes = hours * 60 + minutes;
  const openMinutes = 13 * 60; // 13:00
  const closeMinutes = 21 * 60; // 21:00

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return { isOpen: true, text: 'Open Now · Closes at 9:00 PM' };
  } else {
    if (currentMinutes < openMinutes) {
      return { isOpen: false, text: 'Closed Now · Opens at 1:00 PM' };
    } else {
      const isSat = day === 6;
      return {
        isOpen: false,
        text: isSat ? 'Closed Now · Opens Mon 1:00 PM' : 'Closed Now · Opens tomorrow at 1:00 PM',
      };
    }
  }
}

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
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 border border-zinc-200 px-4 py-1.5 mb-4 shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-zinc-950" />
            <span className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              Prime Medical Location
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-zinc-950 text-center mb-4">
            Clinic Location & Hours
          </h2>
          <p className="text-sm lg:text-base text-zinc-600 max-w-xl mx-auto text-center mb-12">
            Visit us in {clinic.city}. Valet parking and private consultation suites available.
          </p>
        </motion.div>

        {/* 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Map card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-white border border-zinc-200 p-2 shadow-sm"
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 justify-between"
          >
            <div className="space-y-5">
              {/* Address */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white border border-zinc-200/90 rounded-3xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-zinc-100 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-zinc-950" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-zinc-950 mb-1">
                      Our Multan Clinic
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                      {clinic.name}
                      <br />
                      {clinic.address}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white border border-zinc-200/90 rounded-3xl p-6 lg:p-7 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-zinc-100 flex-shrink-0">
                    <Clock className="h-5 w-5 text-zinc-950" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                      <h3 className="font-serif text-lg font-bold text-zinc-950">
                        Consultation Timings
                      </h3>
                      <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border transition-all ${
                        isClinicOpen().isOpen 
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                          : 'bg-red-50 border-red-200 text-red-800'
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${
                          isClinicOpen().isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-red-500'
                        }`} />
                        <span>{isClinicOpen().isOpen ? 'Open Now' : 'Closed'}</span>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-700 font-medium leading-relaxed">{clinic.timings}</p>
                    <p className="text-xs text-zinc-500 mt-1">{isClinicOpen().text}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Inverting Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={telLink()}
                className="relative overflow-hidden bg-white text-zinc-950 border border-stone-300/80 hover:border-zinc-950 font-medium px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 flex-1 text-sm group"
              >
                <span className="absolute inset-0 bg-zinc-950 rounded-t-[100%] translate-y-[102%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-out pointer-events-none" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-zinc-950 group-hover:text-white transition-colors duration-500">
                  <Phone className="h-4 w-4" />
                  <span>Call Reception</span>
                </span>
              </a>
              <a
                href={mapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-zinc-950 text-white border border-zinc-950 font-medium px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 flex-1 text-sm group"
              >
                <span className="absolute inset-0 bg-white rounded-t-[100%] translate-y-[102%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-out pointer-events-none" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-zinc-950 transition-colors duration-500">
                  <Navigation className="h-4 w-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
