import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, LayoutGroup } from 'framer-motion';
import { MoveHorizontal, FileText, Info } from 'lucide-react';
import { beforeAfterCases } from '@/data/clinicData';
export default function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

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

  const containerRectRef = useRef<{ left: number; width: number } | null>(null);

  const updateSlider = (clientX: number, forceRecalc = false) => {
    if (!containerRef.current) return;
    if (forceRecalc || !containerRectRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      containerRectRef.current = { left: rect.left, width: rect.width };
    }
    const { left, width } = containerRectRef.current;
    if (width === 0) return;
    const x = clientX - left;
    const pct = Math.max(0, Math.min(100, (x / width) * 100));
    sliderPosVal.set(pct);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDragging.current = true;
    updateSlider(e.clientX, true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      updateSlider(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      isDragging.current = false;
      containerRectRef.current = null;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Ignore capture errors
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
    updateSlider(e.touches[0].clientX, true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      updateSlider(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    containerRectRef.current = null;
  };

  return (
    <section id="results" className="relative py-16 lg:py-24">
      {/* Custom Blemish Overlay Styles */}
      <style>{`
        .acne-overlay {
          background-image: 
            radial-gradient(circle at 38% 45%, rgba(200, 70, 70, 0.7) 4px, transparent 12px),
            radial-gradient(circle at 40% 43%, rgba(180, 50, 50, 0.6) 3px, transparent 10px),
            radial-gradient(circle at 36% 47%, rgba(200, 70, 70, 0.5) 5px, transparent 14px),
            radial-gradient(circle at 33% 50%, rgba(190, 60, 60, 0.55) 4px, transparent 11px),
            
            radial-gradient(circle at 62% 48%, rgba(200, 70, 70, 0.65) 5px, transparent 13px),
            radial-gradient(circle at 64% 50%, rgba(180, 50, 50, 0.6) 3px, transparent 9px),
            radial-gradient(circle at 59% 52%, rgba(200, 70, 70, 0.5) 6px, transparent 15px),
            
            radial-gradient(circle at 45% 58%, rgba(200, 70, 70, 0.5) 4px, transparent 11px),
            radial-gradient(circle at 52% 60%, rgba(190, 60, 60, 0.45) 5px, transparent 14px),
            radial-gradient(circle at 48% 62%, rgba(180, 50, 50, 0.55) 3px, transparent 10px),
            
            radial-gradient(circle at 38% 54%, rgba(200, 70, 70, 0.5) 6px, transparent 16px),
            radial-gradient(circle at 60% 56%, rgba(190, 60, 60, 0.4) 7px, transparent 17px);
          filter: blur(0.5px);
        }
        .melasma-overlay {
          background-image: 
            radial-gradient(ellipse at 32% 46%, rgba(105, 60, 25, 0.45) 20px, transparent 40px),
            radial-gradient(ellipse at 36% 44%, rgba(120, 70, 30, 0.35) 15px, transparent 32px),
            radial-gradient(ellipse at 30% 48%, rgba(105, 60, 25, 0.4) 18px, transparent 35px),
            
            radial-gradient(ellipse at 65% 48%, rgba(105, 60, 25, 0.45) 24px, transparent 45px),
            radial-gradient(ellipse at 62% 46%, rgba(120, 70, 30, 0.35) 17px, transparent 37px),
            radial-gradient(ellipse at 68% 50%, rgba(105, 60, 25, 0.35) 20px, transparent 40px),
            
            radial-gradient(ellipse at 48% 42%, rgba(105, 60, 25, 0.3) 14px, transparent 30px);
          filter: blur(1.2px);
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-zinc-950 text-center mb-4 leading-tight tracking-tight">
            Before & After Clinical Outcomes
          </h2>
          <p className="font-sans text-sm md:text-base text-zinc-600 max-w-xl mx-auto text-center mb-8 sm:mb-10">
            Interactive side-by-side medical evaluations. Slide the divider to inspect structural restoration.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8 w-full px-6 md:px-0">
          <div className="grid grid-cols-2 gap-2 p-1.5 w-full max-w-sm mx-auto relative md:flex md:inline-flex md:items-center md:bg-stone-100/80 md:backdrop-blur-md md:rounded-full md:border md:border-stone-200/80 md:w-auto md:max-w-full">
            <LayoutGroup id="before-after-filters">
              {beforeAfterCases.map((c, i) => {
                const isActive = activeCase === i;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveCase(i);
                      sliderPosVal.set(50);
                    }}
                    className={`relative px-5 py-2 rounded-full text-xs font-semibold transition-colors duration-350 ease-out whitespace-nowrap z-10 ${
                      isActive
                        ? 'text-white'
                        : 'text-stone-600 bg-stone-100 border border-stone-200/60 hover:text-zinc-950 hover:bg-stone-200/60 md:bg-transparent md:border-none'
                    }`}
                  >
                    <span className="relative z-10">{c.category}</span>
                    {isActive && (
                      <motion.span
                        layoutId="active-ba-tab-pill"
                        className="absolute inset-0 bg-zinc-950 rounded-full -z-10 shadow-sm"
                        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                      />
                    )}
                  </button>
                );
              })}
            </LayoutGroup>
          </div>
        </div>

        {/* Slider + Case note */}
        <div className="grid lg:grid-cols-12 gap-12 items-center lg:items-stretch">
          {/* Slider Static Scroll Wrapper */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Inner Slider (remounts cleanly on tab change) */}
            <motion.div
              key={`slider-${currentCase.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
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
                srcSet={`${currentCase.afterImage.replace('.webp', '-mobile.webp')} 480w, ${currentCase.afterImage} 800w`}
                sizes="(max-width: 768px) 100vw, 800px"
                alt="After clinical treatment"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
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
                  srcSet={`${currentCase.beforeImage.replace('.webp', '-mobile.webp')} 480w, ${currentCase.beforeImage} 800w`}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt="Before clinical treatment"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[700ms]"
                  draggable={false}
                />
                {/* Dynamically overlay blemish effects on Before view */}
                {currentCase.id === 'acne-scar' && (
                  <div className="absolute inset-0 acne-overlay mix-blend-multiply opacity-85" />
                )}
                {currentCase.id === 'skin-radiance' && (
                  <div className="absolute inset-0 melasma-overlay mix-blend-multiply opacity-80" />
                )}
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
          </motion.div>
        </motion.div>

          {/* Case note Static Scroll Wrapper */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:h-full lg:flex lg:flex-col"
          >
            {/* Inner Case note (remounts cleanly on tab change) */}
            <motion.div
              key={`note-${currentCase.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="lg:h-full lg:flex lg:flex-col lg:flex-1"
            >
            <motion.div 
              whileHover={isTouch ? {} : { y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white border border-zinc-200/80 rounded-[2rem] p-6 lg:p-8 shadow-sm hover:shadow-xl flex flex-col justify-between lg:h-full lg:flex-1 cursor-pointer"
            >
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="h-5 w-5 text-zinc-950 flex-shrink-0 mt-1.5" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-950 leading-snug">
                    {currentCase.title}
                  </h3>
                </div>

                {/* Clinical Metadata */}
                <div className="flex flex-wrap gap-2 text-[9px] sm:text-[10px] font-semibold text-zinc-600 uppercase tracking-wider mb-5">
                  <span className="bg-stone-100/90 border border-stone-200/60 rounded-md px-2.5 py-1">
                    {currentCase.fitzpatrick}
                  </span>
                  <span className="bg-stone-100/90 border border-stone-200/60 rounded-md px-2.5 py-1">
                    {currentCase.sessions}
                  </span>
                  <span className="bg-stone-100/90 border border-stone-200/60 rounded-md px-2.5 py-1">
                    {currentCase.parameter}
                  </span>
                </div>

                <p className="font-sans text-sm md:text-base text-zinc-600 leading-relaxed mb-6">
                  {currentCase.caseNote}
                </p>

              </div>

              <div className="flex items-start gap-3 border-t border-zinc-150 pt-5">
                <Info className="h-4 w-4 text-zinc-800 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Clinical parameters are customized after medical photography and diagnostic examination.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </section>
  );
}
