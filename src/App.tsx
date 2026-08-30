import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { waPrivilegeLink } from '@/lib/whatsapp';
import AmbientBackground from '@/components/AmbientBackground';
import AnnouncementBar from '@/components/AnnouncementBar';
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
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[#FDFCFB] text-zinc-900 min-h-screen relative overflow-x-hidden w-full">
      <AmbientBackground />
      <AnnouncementBar />
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
      <Analytics />
    </div>
  );
}

export default App;
