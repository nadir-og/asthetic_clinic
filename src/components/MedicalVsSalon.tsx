import { motion } from 'framer-motion';
import { ShieldCheck, Stethoscope, Zap } from 'lucide-react';

const standards = [
  {
    title: 'Board-Certified Physicians',
    description:
      'Every procedure is directed by PMC-verified doctors, not salon technicians. Precise dosage and anatomical safety.',
    icon: Stethoscope,
  },
  {
    title: 'FDA-Cleared Energy & Laser Tech',
    description:
      'Medical-grade lasers with active cooling for zero burn risk across all Pakistani skin tones.',
    icon: Zap,
  },
  {
    title: 'Hospital-Grade Sterilization',
    description:
      'Autoclaved single-use instruments and medical aseptic protocols for absolute zero infection risk.',
    icon: ShieldCheck,
  },
];

export default function MedicalVsSalon() {
  return (
    <section id="why-medical" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-100/20 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-stone-600" />
            <span>Clinical Standards</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-zinc-950 text-center mb-3">
            The Elixir Standard of Clinical Care
          </h2>
          <p className="text-sm lg:text-base text-zinc-500 max-w-xl mx-auto text-center mb-12">
            Why discerning clients choose board-certified medical dermatology over commercial salons.
          </p>
        </motion.div>

        {/* 3-Column Luxury Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {standards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <motion.div
                key={std.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white border border-stone-200/90 rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:border-amber-200/80 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Subtle Gold Gradient Corner Accent on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/30 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-all duration-700"></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="h-12 w-12 rounded-2xl bg-amber-50/80 border border-amber-100 text-amber-800 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-amber-100/80 group-hover:text-amber-900">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-zinc-950 mb-3">
                    {std.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-650 leading-relaxed font-normal">
                    {std.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
