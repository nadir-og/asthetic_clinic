import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal, FileText, Info } from 'lucide-react';
import { beforeAfterCases } from '@/data/clinicData';

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const currentCase = beforeAfterCases[activeCase];

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updateSlider(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging.current && e.touches[0]) updateSlider(e.touches[0].clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section id="results" className="relative py-16 lg:py-24">
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
            <FileText className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Clinical Results
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-deep mb-3">
            Before & <span className="text-gold-gradient">After</span>
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Drag the slider to see real clinical outcomes. Results may vary per individual.
          </p>
        </motion.div>

        {/* Category toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-1 rounded-full glass-card p-1.5">
            {beforeAfterCases.map((c, i) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCase(i);
                  setSliderPos(50);
                }}
                className={`relative whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  activeCase === i ? 'text-white' : 'text-slate-600 hover:text-emerald-mid'
                }`}
              >
                {activeCase === i && (
                  <motion.div
                    layoutId="ba-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-mid to-emerald-deep shadow-emerald-glow"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{c.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Slider + Case note */}
        <div className="grid lg:grid-cols-5 gap-6 items-center">
          {/* Slider */}
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3"
          >
            <div
              ref={containerRef}
              className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-xl cursor-ew-resize select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
              onTouchStart={handleMouseDown}
              onTouchMove={handleTouchMove}
              onTouchEnd={stopDragging}
            >
              {/* After image (background) */}
              <img
                src={currentCase.afterImage}
                alt="After treatment"
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />

              {/* Before image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt="Before treatment"
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: 'none' }}
                  draggable={false}
                />
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                Before
              </div>
              <div className="absolute top-4 right-4 rounded-full bg-emerald-mid px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                After
              </div>

              {/* Slider handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full glass-card shadow-xl">
                  <MoveHorizontal className="h-5 w-5 text-emerald-mid" />
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
              <Info className="h-3 w-3" />
              {currentCase.disclaimer}
            </p>
          </motion.div>

          {/* Case note */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-3xl p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-emerald-mid/10">
                  <FileText className="h-4.5 w-4.5 text-emerald-mid" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-deep">
                  {currentCase.title}
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {currentCase.caseNote}
              </p>
              <div className="flex items-center gap-2 rounded-xl bg-gold/8 px-4 py-3">
                <Info className="h-4 w-4 text-gold-deep flex-shrink-0" />
                <p className="text-xs text-slate-600">
                  Individual results may vary. Book a consultation for a personalised assessment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
