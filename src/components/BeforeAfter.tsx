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
      } catch {
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
      <div className="mx-auto max-w-7xl px-6">
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
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-zinc-950 text-center mb-4 leading-tight tracking-tight">
            Before & After Clinical Outcomes
          </h2>
          <p className="font-sans text-sm md:text-base text-zinc-650 max-w-xl mx-auto text-center mb-12">
            Interactive side-by-side medical evaluations. Slide the divider to inspect structural restoration.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center justify-center p-1.5 bg-stone-100/80 backdrop-blur-md rounded-full border border-stone-200/80 mb-10 overflow-x-auto max-w-full no-scrollbar">
            {beforeAfterCases.map((c, i) => {
              const isActive = activeCase === i;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCase(i);
                    sliderPosVal.set(50);
                  }}
                  className={
                    isActive
                      ? 'bg-zinc-950 text-white shadow-sm px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300'
                      : 'text-stone-600 hover:text-zinc-950 hover:bg-white/60 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200'
                  }
                >
                  <span className="relative z-10">{c.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Slider + Case note */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Slider */}
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div
              ref={containerRef}
              className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-[2rem] border border-zinc-200/80 shadow-sm cursor-ew-resize select-none touch-none bg-zinc-950"
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
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[700ms]"
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
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[700ms]"
                  draggable={false}
                />
              </motion.div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-900 z-20 rounded-md shadow-sm">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-zinc-950/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white z-20 rounded-md shadow-sm">
                After
              </div>

              {/* Slider handle */}
              <motion.div
                className="absolute top-0 bottom-0 w-0.5 bg-white pointer-events-none z-30"
                style={{ left: handleLeft }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-10 w-10 rounded-full bg-white text-zinc-950 shadow-md border border-zinc-200">
                  <MoveHorizontal className="h-4 w-4" />
                </div>
              </motion.div>
            </div>

            {/* Disclaimer */}
            <p className="mt-3 flex items-center gap-1.5 text-xs text-zinc-400 font-light italic">
              <Info className="h-3.5 w-3.5 flex-shrink-0 text-zinc-400" />
              {currentCase.disclaimer}
            </p>
          </motion.div>

          {/* Case note */}
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-white border border-zinc-200/80 rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-zinc-950" />
                <h3 className="font-serif text-2xl font-bold text-zinc-950 leading-snug">
                  {currentCase.title}
                </h3>
              </div>

              {/* Clinical Metadata */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-5">
                <span>{currentCase.fitzpatrick}</span>
                <span>•</span>
                <span>{currentCase.sessions}</span>
                <span>•</span>
                <span>{currentCase.parameter}</span>
              </div>

              <p className="font-sans text-sm md:text-base text-zinc-600 leading-relaxed mb-6">
                {currentCase.caseNote}
              </p>

              <div className="flex items-start gap-3 border-t border-zinc-150 pt-5">
                <Info className="h-4 w-4 text-zinc-800 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-500 leading-relaxed">
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
