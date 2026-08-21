import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { doctors } from '@/data/clinicData';

export default function Doctors() {
  return (
    <section id="doctors" className="relative overflow-hidden py-16 lg:py-24">
      {/* Subtle ambient orb */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-80 w-80 rounded-full bg-stone-200/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 border border-zinc-200 px-4 py-1.5 mb-4 mx-auto shadow-sm">
            <Award className="h-3.5 w-3.5 text-zinc-950" />
            <span className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              Medical Board & Authority
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-zinc-950 text-center mb-4">
            Lead Specialist Physicians
          </h2>
          <p className="text-sm lg:text-base text-zinc-600 max-w-xl mx-auto text-center leading-relaxed">
            All procedures are directed and performed by PMDC-verified board specialists, combining
            extensive clinical dermatology, laser physics, and aesthetic expertise.
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
          {doctors.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border border-zinc-200/90 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                {/* Image Wrapper */}
                <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-6 bg-zinc-100 group">
                  <img
                    src={doctor.portrait}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  {/* Experience floating chip */}
                  <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-white/10 py-2 text-center shadow-lg">
                    <p className="text-xs text-zinc-100 font-semibold uppercase tracking-widest leading-none">
                      {doctor.experience}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div>
                  {/* PMDC Verified Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{doctor.pmcReg}</span>
                  </div>

                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-zinc-950 mb-1.5">{doctor.name}</h3>
                  <p className="text-sm font-semibold text-amber-850 text-amber-900/90 mb-1">
                    {doctor.title}
                  </p>
                  <p className="text-xs text-zinc-500 font-medium mb-4 leading-relaxed">
                    {doctor.credentials}
                  </p>
                </div>
              </div>

              {/* Specialties */}
              <div className="pt-5 border-t border-zinc-100 mt-4">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3 leading-none">
                  Core Clinical Focus
                </p>
                <ul className="flex flex-col gap-2">
                  {doctor.specialties.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
