import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock } from 'lucide-react';
import { clinic } from '@/data/clinicData';
import { waPrivilegeLink } from '@/lib/whatsapp';

function getRollingTarget(): number {
  const now = new Date();
  // Rolling: end of current month at 9:00 PM
  const target = new Date(now.getFullYear(), now.getMonth() + 1, 0, 21, 0, 0);
  // If we're within 3 days of month end, push to 3 days from now
  const threeDaysFromNow = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
  if (target.getTime() - now.getTime() < 3 * 24 * 60 * 60 * 1000) {
    return threeDaysFromNow.getTime();
  }
  return target.getTime();
}

function useCountdown() {
  const [target] = useState(getRollingTarget);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return timeLeft;
}

export default function AnnouncementBar() {
  const { days, hours, minutes, seconds } = useCountdown();

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative z-50"
    >
      <div className="bg-zinc-950 text-zinc-200 py-2.5 px-4 text-xs md:text-sm text-center font-medium">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles className="h-4 w-4 text-white" />
            </motion.div>
            <p className="text-xs sm:text-sm font-medium tracking-wide">
              {clinic.announcement}
            </p>
          </div>

          <a
            href={waPrivilegeLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 hover:bg-white/20 transition-all text-white"
          >
            <Clock className="h-3.5 w-3.5 text-zinc-300" />
            <span className="text-xs font-semibold tabular-nums tracking-wider">
              {pad(days)}d : {pad(hours)}h : {pad(minutes)}m : {pad(seconds)}s
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
