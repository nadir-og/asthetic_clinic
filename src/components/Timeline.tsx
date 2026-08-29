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
      <div className="max-w-[1600px] w-full mx-auto px-6 lg:px-12 2xl:px-24 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-transparent text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 mx-auto">
            <Compass className="h-3.5 w-3.5 text-zinc-950" />
            <span>Clinical Journey</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-light tracking-tighter text-[#0A0A0A] text-center mb-6 leading-none">
            What To Expect
          </h2>
          <p className="text-sm lg:text-base text-zinc-650 max-w-xl mx-auto text-center font-light">
            From your preliminary Wood's Lamp diagnosis to clinical repair, understand our rigorous,
            patient-centric treatment path.
          </p>
        </motion.div>

        {/* Timeline Line & Grid */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[88px] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent hidden lg:block" />

          {/* Steps Grid (Canvas editorial format) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-transparent flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  {/* Step number & icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif font-light text-zinc-950 leading-none">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center text-zinc-950">
                      {idx === 0 && <Eye className="h-5 w-5" />}
                      {idx === 1 && <ShieldAlert className="h-5 w-5" />}
                      {idx === 2 && <Wand2 className="h-5 w-5" />}
                      {idx === 3 && <Sparkles className="h-5 w-5" />}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-light text-zinc-950 mb-2">{step.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-5 font-light">{step.desc}</p>
                </div>

                {/* Sub-detail bullets */}
                <div className="mt-4 pt-4 border-t border-zinc-200">
                  <ul className="flex flex-col gap-2">
                    {step.details.map((det) => (
                      <li key={det} className="text-[10px] text-zinc-400 flex items-center gap-2 uppercase tracking-widest font-normal">
                        <span className="h-1 w-1 bg-zinc-950 flex-shrink-0" />
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
