import { motion } from 'framer-motion';
import { Eye, ShieldAlert, Sparkles, Wand2, Compass } from 'lucide-react';

interface TimelineStep {
  number: string;
  title: string;
  desc: string;
  details: string[];
}

const steps: TimelineStep[] = [
  {
    number: '01',
    title: "Wood's Lamp & Skin Scan",
    desc: 'Deep sub-dermal scanning to reveal active UV damage, dehydration pockets, and active bacterial hotspots.',
    details: ['UV illumination scan', 'Fitzpatrick typing', 'Oil gland mapping'],
  },
  {
    number: '02',
    title: 'Medical Prep & Numbing',
    desc: 'Application of clinical-strength topical anesthetics or micro-cleansers to ensure absolute client comfort.',
    details: ['Double sterile cleanse', 'Clinical numbing cream', 'Barrier protection'],
  },
  {
    number: '03',
    title: 'Precision Energy Delivery',
    desc: 'Targeted procedure delivery (lasers, micro-channels, or GFC infusion) with precision control parameters.',
    details: ['Dermatologist guided', 'FDA-cleared energy curves', 'Real-time cooling relief'],
  },
  {
    number: '04',
    title: 'Post-Soothing & Homecare',
    desc: 'Application of stem-cell repairing factors, mineral solar block, and delivery of a customized home recovery plan.',
    details: ['Exosome recovery mask', 'Ceramide hydration lock', 'Prescription skincare routine'],
  },
];

export default function Timeline() {
  return (
    <section id="workflow" className="relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-amber-100/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 border border-zinc-200 px-4 py-1.5 mb-4 mx-auto">
            <Compass className="h-3.5 w-3.5 text-zinc-950" />
            <span className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              Clinical Journey
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-950 text-center mb-4">
            What To Expect
          </h2>
          <p className="text-sm lg:text-base text-zinc-500 max-w-xl mx-auto text-center">
            From your preliminary Wood's Lamp diagnosis to clinical repair, understand our rigorous,
            patient-centric treatment path.
          </p>
        </motion.div>

        {/* Timeline Line & Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[88px] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent hidden lg:block" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white border border-zinc-200/80 rounded-3xl p-7 flex flex-col justify-between hover:border-zinc-300 hover:-translate-y-1 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Step number & icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-bold text-zinc-900 leading-none">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100 border border-zinc-200">
                      {idx === 0 && <Eye className="h-5 w-5 text-zinc-950" />}
                      {idx === 1 && <ShieldAlert className="h-5 w-5 text-zinc-950" />}
                      {idx === 2 && <Wand2 className="h-5 w-5 text-zinc-950" />}
                      {idx === 3 && <Sparkles className="h-5 w-5 text-zinc-950" />}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed mb-5">{step.desc}</p>
                </div>

                {/* Sub-detail bullets */}
                <div className="mt-4 pt-4 border-t border-zinc-200">
                  <ul className="flex flex-col gap-1.5">
                    {step.details.map((det) => (
                      <li key={det} className="text-[10px] text-zinc-500 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
                        <span>{det}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
