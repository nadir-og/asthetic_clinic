import { motion } from 'framer-motion';
import { ShieldCheck, XCircle, CheckCircle2, Sparkles, AlertTriangle, Stethoscope } from 'lucide-react';
import { waPrivilegeLink } from '@/lib/whatsapp';

const comparisonPoints = [
  {
    feature: 'Practitioner Qualifications',
    salon: 'Non-medical salon staff or uncertified beauticians with no dermatology training.',
    clinic: 'PMC-Verified Aesthetic Physicians & Board-Certified Dermatologists.',
    isClinicBetter: true,
  },
  {
    feature: 'Equipment & Technology',
    salon: 'Generic, uncalibrated cosmetic machines without regulatory verification.',
    clinic: 'US-FDA Cleared medical lasers, sterile micro-needling & calibrated energy devices.',
    isClinicBetter: true,
  },
  {
    feature: 'Hygiene & Sterilization',
    salon: 'Shared non-sterile tools, open cosmetic jars, high risk of breakouts & infection.',
    clinic: 'Hospital-grade autoclaved instruments, disposable tips & clinical aseptic protocol.',
    isClinicBetter: true,
  },
  {
    feature: 'Depth of Treatment',
    salon: 'Superficial temporary surface polish that washes off in 24–48 hours.',
    clinic: 'Dermal cellular remodeling, collagen stimulation & targeted follicular revival.',
    isClinicBetter: true,
  },
  {
    feature: 'Safety & Risk Management',
    salon: 'Unregulated chemical formulas with significant risk of post-inflammatory burns.',
    clinic: 'Personalized Fitzpatrick skin profiling with zero-harm safety margins.',
    isClinicBetter: true,
  },
];

export default function MedicalVsSalon() {
  return (
    <section id="why-medical" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-100/30 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200/80 px-4 py-1.5 mb-4 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-emerald-700" />
            <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Clinical Authority & Safety Standard
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-zinc-950 text-center mb-4">
            Why Medical Aesthetics vs. Ordinary Salons
          </h2>
          <p className="text-sm lg:text-base text-zinc-600 max-w-2xl mx-auto text-center leading-relaxed">
            Your skin and hair deserve medical-grade science, not superficial parlor tricks.
            Discover the difference clinical dermatology makes for long-term health and safety.
          </p>
        </motion.div>

        {/* 2-Column Comparison Matrix */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Commercial Salons / Parlors */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-sm border border-red-200/60 rounded-3xl p-8 lg:p-10 shadow-sm relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-red-100">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center text-red-600 flex-shrink-0">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900">Commercial Salons / Parlors</h3>
                    <p className="text-xs text-red-700 font-medium">Cosmetic Only · High Long-Term Risk</p>
                  </div>
                </div>
                <span className="rounded-full bg-red-50 text-red-700 border border-red-200 text-[11px] font-bold px-3 py-1 uppercase tracking-wider">
                  Caution
                </span>
              </div>

              <div className="space-y-5">
                {comparisonPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-red-50/40 border border-red-100/50">
                    <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-zinc-800 uppercase tracking-wide mb-0.5">
                        {pt.feature}
                      </p>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {pt.salon}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
              <p className="text-xs text-zinc-500 italic">
                ⚠️ Temporary cosmetic masking often worsens deep skin barriers & follicle vitality.
              </p>
            </div>
          </motion.div>

          {/* Right: Elixir Medical Aesthetics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-emerald-500/80 rounded-3xl p-8 lg:p-10 shadow-xl relative flex flex-col justify-between ring-4 ring-emerald-500/10"
          >
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 right-8 bg-emerald-600 text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-md flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" />
              Medical Standard of Care
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-950">Elixir Medical Aesthetics</h3>
                    <p className="text-xs text-emerald-800 font-semibold">Doctor-Led · Clinical Transformation</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold px-3 py-1 uppercase tracking-wider">
                  Verified
                </span>
              </div>

              <div className="space-y-5">
                {comparisonPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-emerald-950 uppercase tracking-wide mb-0.5">
                        {pt.feature}
                      </p>
                      <p className="text-sm text-zinc-700 font-medium leading-relaxed">
                        {pt.clinic}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-emerald-900 font-medium">
                ✨ 100% Doctor-supervised clinical procedures with proven medical outcomes.
              </p>
              <a
                href={waPrivilegeLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-zinc-950 text-white border-2 border-zinc-950 font-medium px-8 py-3.5 rounded-full shadow-md transition-all duration-300 hover:bg-white hover:text-zinc-950 hover:shadow-xl hover:scale-105 active:scale-95 text-xs whitespace-nowrap text-center"
              >
                Book Doctor Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
