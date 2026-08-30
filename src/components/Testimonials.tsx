import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, BadgeCheck, Quote, Heart } from 'lucide-react';
import { testimonials, socialStats } from '@/data/clinicData';

interface CounterProps {
  target: number;
  suffix: string;
  isDecimal?: boolean;
  duration?: number;
}

function RollingCounter({ target, suffix, isDecimal = false, duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      
      const currentVal = easedProgress * target;
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  const formattedValue = isDecimal ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <p ref={ref} className="font-serif text-3xl lg:text-4xl font-bold text-zinc-950 tracking-tight">
      {formattedValue}
      <span>{suffix}</span>
    </p>
  );
}

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-transparent text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6 mx-auto">
            <Heart className="h-3.5 w-3.5 text-zinc-950" />
            <span>Verified Social Proof</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-zinc-950 text-center mb-6 leading-tight tracking-tight">
            What Our Patients Say
          </h2>
          <p className="font-sans text-sm md:text-base text-zinc-600 max-w-xl mx-auto text-center mb-12">
            Real clinical reviews from verified patients who experienced deep skin and hair rejuvenation at Aura.
          </p>
        </motion.div>

        {/* Rolling Counter Metrics Row (Flat canvas format) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-20 max-w-[1600px] mx-auto"
        >
          {socialStats.map((stat) => {
            const isDec = stat.numericTarget % 1 !== 0;
            return (
              <div
                key={stat.label}
                className="bg-transparent py-4 text-center"
              >
                <RollingCounter
                  target={stat.numericTarget}
                  suffix={stat.suffix}
                  isDecimal={isDec}
                  duration={1500}
                />
                <p className="text-[10px] font-medium text-zinc-400 mt-3 uppercase tracking-[0.2em]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6 }}
              transition={{ 
                type: 'spring', 
                stiffness: 120, 
                damping: 18, 
                opacity: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                delay: index * 0.08
              }}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 flex flex-col relative hover:shadow-md cursor-pointer"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-6 h-8 w-8 text-zinc-950/5" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Review */}
              <p className="font-sans text-sm text-zinc-600 leading-relaxed mb-6 flex-1 italic">
                "{t.review}"
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-5 border-t border-zinc-150">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  decoding="async"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-semibold text-zinc-950 uppercase tracking-[0.15em] truncate">{t.name}</p>
                    {t.verified && (
                      <BadgeCheck className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 mt-1 truncate">{t.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
