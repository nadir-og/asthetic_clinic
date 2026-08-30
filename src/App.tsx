import { useEffect } from 'react';
import Lenis from 'lenis';
import { MessageCircle } from 'lucide-react';
import { waPrivilegeLink } from '@/lib/whatsapp';
import AmbientBackground from '@/components/AmbientBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Doctors from '@/components/Doctors';
import Treatments from '@/components/Treatments';
import BeforeAfter from '@/components/BeforeAfter';
import MedicalVsSalon from '@/components/MedicalVsSalon';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium easeOutExpo curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Expose lenis instance globally for section transitions
    (window as any).lenis = lenis;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      (window as any).lenis = null;
    };
  }, []);




  return (
    <div className="bg-[#FDFCFB] text-zinc-900 min-h-screen relative w-full pt-[80px]">
      <AmbientBackground />
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Doctors />
        <Treatments />
        <BeforeAfter />
        <MedicalVsSalon />
        <Testimonials />
        <Location />
        <FAQ />
      </main>
      <Footer />

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
