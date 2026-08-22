import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MoveHorizontal, FileText, Info } from 'lucide-react';
import { beforeAfterCases } from '@/data/clinicData';

export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const currentCase = beforeAfterCases[activeCase];

  // Performance-optimized MotionValues for slider percentage (0 to 100) - default exact 50%
  const sliderPosVal = useMotionValue(50);
  
  // Smooth spring physics for slider divider
  const smoothSliderPos = useSpring(sliderPosVal, {
    stiffness: 220,
    damping: 30,
    mass: 0.1
  });

  // Calculate clip path polygon coordinates based on spring state
  const clipPath = useTransform(
    smoothSliderPos,
    (pos) => `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`
  );

  // Position for the absolute central handle line
  const handleLeft = useTransform(smoothSliderPos, (pos) => `${pos}%`);

  const updateSlider = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    sliderPosVal.set(pct);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDragging.current = true;
    updateSlider(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      updateSlider(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      isDragging.current = false;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {
        // Ignore capture errors
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
    updateSlider(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      updateSlider(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
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
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 border border-zinc-200 px-4 py-1.5 mb-4 shadow-sm">
            <FileText className="h-3.5 w-3.5 text-zinc-950" />
            <span className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              Clinical Photographic Results
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-zinc-950 text-center mb-4">
            Before & After Clinical Outcomes
          </h2>
          <p className="text-sm lg:text-base text-zinc-600 max-w-xl mx-auto text-center mb-12">
            Interactive side-by-side medical evaluations. Slide the divider to inspect structural restoration.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto rounded-full bg-stone-100 border border-stone-200 p-1.5 max-w-full">
            {beforeAfterCases.map((c, i) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCase(i);
                  sliderPosVal.set(50);
                }}
                className={`relative whitespace-nowrap rounded-full px-5 py-2 text-xs md:text-sm font-medium transition-all ${
                  activeCase === i ? 'text-white font-bold' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {activeCase === i && (
                  <motion.div
                    layoutId="ba-tab"
                    className="absolute inset-0 rounded-full bg-zinc-950 shadow-md"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{c.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Slider + Case note */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Slider */}
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <div
              ref={containerRef}
              className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl shadow-2xl border border-zinc-200 cursor-ew-resize select-none touch-none bg-zinc-950"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
            >
              {/* After image (background) */}
              <img
                src={currentCase.afterImage}
                alt="After clinical treatment"
                className="absolute inset-0 h-full w-full object-cover object-center"
                draggable={false}
              />

              {/* Before image (clipped container) */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ clipPath }}
              >
                <img
                  src={currentCase.beforeImage}
                  alt="Before clinical treatment"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  draggable={false}
                />
              </motion.div>

              {/* Labels */}
              <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200 px-3.5 py-1 text-xs font-bold text-zinc-900 uppercase tracking-wider z-20 shadow-md">
                Before
              </div>
              <div className="absolute top-4 right-4 rounded-full bg-zinc-950/95 backdrop-blur-md border border-white/20 px-3.5 py-1 text-xs font-bold text-white uppercase tracking-wider z-20 shadow-md">
                After
              </div>

              {/* Slider handle */}
              <motion.div
                className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-30 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: handleLeft }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-11 w-11 rounded-full bg-white border border-zinc-200 shadow-2xl text-zinc-950 transition-transform active:scale-95">
                  <MoveHorizontal className="h-5 w-5" />
                </div>
              </motion.div>
            </div>

            {/* Disclaimer */}
            <p className="mt-3 flex items-center gap-1.5 text-xs text-zinc-500 italic">
              <Info className="h-3.5 w-3.5 flex-shrink-0 text-zinc-400" />
              {currentCase.disclaimer}
            </p>
          </motion.div>

          {/* Case note */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white border border-zinc-200/90 rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-zinc-100 flex-shrink-0">
                  <FileText className="h-5 w-5 text-zinc-950" />
                </div>
                <h3 className="font-serif text-xl lg:text-2xl font-bold text-zinc-950 leading-snug">
                  {currentCase.title}
                </h3>
              </div>

              {/* Clinical Metadata Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                  {currentCase.fitzpatrick}
                </span>
                <span className="rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1 text-[11px] font-bold text-zinc-800 uppercase tracking-wider">
                  {currentCase.sessions}
                </span>
                <span className="rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1 text-[11px] font-medium text-zinc-600">
                  {currentCase.parameter}
                </span>
              </div>

              <p className="text-sm text-zinc-700 leading-relaxed mb-6">
                {currentCase.caseNote}
              </p>

              <div className="flex items-center gap-3 rounded-2xl bg-zinc-50 border border-zinc-200/80 p-4">
                <Info className="h-4 w-4 text-zinc-800 flex-shrink-0" />
                <p className="text-xs text-zinc-600 leading-normal">
                  Clinical parameters are customized after medical photography and diagnostic examination.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
