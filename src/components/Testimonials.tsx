import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, BadgeCheck, Quote, Heart, Instagram } from 'lucide-react';
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
  return (
    <section id="reviews" className="relative py-16 lg:py-24">
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
            <Heart className="h-3.5 w-3.5 text-zinc-950" />
            <span className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              Verified Social Proof
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold tracking-tight text-zinc-950 text-center mb-4">
            What Our Patients Say
          </h2>
          <p className="text-sm lg:text-base text-zinc-600 max-w-xl mx-auto text-center mb-12">
            Real clinical reviews from verified patients who experienced deep skin and hair rejuvenation at Elixir.
          </p>
        </motion.div>

        {/* Rolling Counter Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          {socialStats.map((stat) => {
            const isDec = stat.numericTarget % 1 !== 0;
            return (
              <div
                key={stat.label}
                className="bg-white border border-zinc-200/90 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <RollingCounter
                  target={stat.numericTarget}
                  suffix={stat.suffix}
                  isDecimal={isDec}
                  duration={1500}
                />
                <p className="text-xs font-semibold text-zinc-500 mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative flex flex-col rounded-3xl bg-white border border-zinc-200/90 hover:border-zinc-300 p-6 lg:p-7 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 h-8 w-8 text-zinc-950/5" />

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-sm text-zinc-700 leading-relaxed mb-6 flex-1 italic">
                "{t.review}"
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-zinc-950/10"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-zinc-950 truncate">{t.name}</p>
                    {t.verified && (
                      <BadgeCheck className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-zinc-500 truncate">{t.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mt-12 text-center"
        >
          <Instagram className="h-5 w-5 text-zinc-950" />
          <p className="text-sm text-zinc-600 font-medium">
            Follow our clinic on Instagram for weekly patient journey updates and medical insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
