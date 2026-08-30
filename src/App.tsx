import { useEffect, lazy, Suspense } from 'react';
import { MessageCircle } from 'lucide-react';
import { waPrivilegeLink } from '@/lib/whatsapp';
import AmbientBackground from '@/components/AmbientBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Code-split below-the-fold sections to drastically reduce initial JS bundle size
const Doctors = lazy(() => import('@/components/Doctors'));
const Treatments = lazy(() => import('@/components/Treatments'));
const BeforeAfter = lazy(() => import('@/components/BeforeAfter'));
const MedicalVsSalon = lazy(() => import('@/components/MedicalVsSalon'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Location = lazy(() => import('@/components/Location'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Footer = lazy(() => import('@/components/Footer'));

function App() {
  useEffect(() => {
    // Check if the device has a fine pointer (like a mouse) or if it's a touch device
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
      return;
    }

    let lenisInstance: Window['lenis'] = null;
    let rafId: number;

    // Dynamically import Lenis only for non-touch desktop clients
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium easeOutExpo curve
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
      });

      lenisInstance = lenis;

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      // Expose lenis instance globally for section transitions
      window.lenis = lenis;
    });

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="bg-[#FDFCFB] text-zinc-900 min-h-screen relative w-full pt-[80px]">
      <AmbientBackground />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Suspense fallback={null}>
          <Doctors />
          <Treatments />
          <BeforeAfter />
          <MedicalVsSalon />
          <Testimonials />
          <Location />
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Floating Interactive WhatsApp Pop-Up Widget */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-3">
        {/* Gentle Floating Notification Pill on Desktop */}
        <a
          href={waPrivilegeLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-white text-zinc-900 border border-stone-200/90 shadow-xl px-4 py-2.5 rounded-full text-xs font-semibold hover:border-zinc-950 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span>💬 Direct Doctor Consultation</span>
        </a>

        {/* Green WhatsApp Button with Continuous Subtle Breathing Ping */}
        <a
          href={waPrivilegeLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] text-white p-3.5 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center min-w-[44px] min-h-[44px] md:min-w-[48px] md:min-h-[48px]"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
          <MessageCircle className="h-6 w-6 fill-white/20 relative z-10" />
        </a>
      </div>
    </div>
  );
}

export default App;
