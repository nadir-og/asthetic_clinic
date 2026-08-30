import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Sparkles } from 'lucide-react';
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
  const mapRef = useRef<HTMLDivElement>(null);
  // Aggressively start loading map well before it enters view (1200px ahead)
  const isMapNear = useInView(mapRef, { once: true, margin: '1200px' });
  const [shouldMountMap, setShouldMountMap] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    if (isMapNear) {
      setShouldMountMap(true);
    }
  }, [isMapNear]);

  // Idle background pre-warming: Mount map iframe in the background after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldMountMap(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Map card */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden bg-white border border-zinc-200 p-2 shadow-sm"
          >
            <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden bg-[#e8ece9]">
              {/* Instant High-End Stylized Map Facade (Active immediately with 0ms delay) */}
              <div 
                className={`absolute inset-0 w-full h-full bg-[#f4f3f0] transition-opacity duration-700 flex flex-col items-center justify-center p-6 ${
                  isIframeLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                {/* Stylized Map Grid & Road Vector Overlay */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 600"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <defs>
                    <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d5d3cb" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  {/* Stylized River / Contour */}
                  <path
                    d="M-50,180 Q200,240 380,190 T750,320 T900,450"
                    fill="none"
                    stroke="#cad7db"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />
                  {/* Stylized Main Arteries & Roads */}
                  <path
                    d="M-10,380 L820,120"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="10"
                  />
                  <path
                    d="M-10,380 L820,120"
                    fill="none"
                    stroke="#dfdbd0"
                    strokeWidth="6"
                  />
                  <path
                    d="M260,-20 L480,620"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="12"
                  />
                  <path
                    d="M260,-20 L480,620"
                    fill="none"
                    stroke="#dfdbd0"
                    strokeWidth="7"
                  />
                  <path
                    d="M100,500 Q400,320 700,520"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="8"
                  />
                  <path
                    d="M100,500 Q400,320 700,520"
                    fill="none"
                    stroke="#e4dfd3"
                    strokeWidth="4"
                  />
                  {/* Secondary Avenue */}
                  <path
                    d="M150,150 L650,450"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="6"
                  />
                </svg>

                {/* Pulsating Pin & Clinic Marker Badge */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="relative flex items-center justify-center mb-3">
                    {/* Animated radar rings */}
                    <span className="absolute h-16 w-16 rounded-full bg-amber-600/20 animate-ping" />
                    <span className="absolute h-24 w-24 rounded-full bg-amber-600/10 animate-pulse" />
                    <div className="relative h-12 w-12 rounded-2xl bg-zinc-950 text-white shadow-xl flex items-center justify-center border-2 border-white">
                      <MapPin className="h-6 w-6 text-amber-400" />
                    </div>
                  </div>

                  {/* Luxury Clinic Card Preview */}
                  <div className="bg-white/95 backdrop-blur-md border border-zinc-200/90 rounded-2xl px-5 py-3.5 shadow-lg max-w-[280px]">
                    <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-zinc-900 mb-0.5">
                      <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                      <span>{clinic.name}</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 font-medium">
                      Multan, Pakistan &middot; Prime Medical District
                    </p>
                    <div className="mt-2.5 pt-2 border-t border-zinc-100 flex items-center justify-between gap-2 text-[10px] font-semibold">
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {clinic.rating}
                      </span>
                      <a
                        href={mapsLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-900 hover:text-amber-800 flex items-center gap-1 transition-colors"
                      >
                        <span>Directions</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* Subtle Loading status bar */}
                  {!isIframeLoaded && (
                    <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-zinc-200 text-[11px] text-zinc-600 font-medium shadow-xs">
                      <span className="h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
                      <span>Connecting interactive map...</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Fast-Mounted Interactive Google Maps Embed with Smooth Crossfade */}
              {shouldMountMap && (
                <iframe
                  src={mapsEmbedUrl()}
                  onLoad={() => setIsIframeLoaded(true)}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                    isIframeLoaded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{ border: 0 }}
                  title="Clinic location on Google Maps"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              )}
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
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 pt-2">
              <motion.a
                href={telLink()}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-white text-zinc-950 border border-stone-300/80 hover:border-zinc-950 font-medium px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 flex-1 text-sm group"
              >
                <span className="absolute inset-0 bg-zinc-950 rounded-t-[100%] translate-y-[102%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-out pointer-events-none" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-zinc-950 group-hover:text-white transition-colors duration-500">
                  <Phone className="h-4 w-4" />
                  <span>Call Reception</span>
                </span>
              </motion.a>
              <motion.a
                href={mapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-zinc-950 text-white border border-zinc-950 font-medium px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2 flex-1 text-sm group"
              >
                <span className="absolute inset-0 bg-white rounded-t-[100%] translate-y-[102%] group-hover:translate-y-0 group-hover:rounded-none transition-all duration-500 ease-out pointer-events-none" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-zinc-950 transition-colors duration-500">
                  <Navigation className="h-4 w-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
