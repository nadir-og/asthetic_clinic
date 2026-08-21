import { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
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
    <div className="bg-[#FDFCFB] text-zinc-900 min-h-screen relative overflow-x-hidden">
      <AmbientBackground />
      <AnnouncementBar />
      <Navbar />
      <main>
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
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Animated Message Bubble */}
        <a
          href={waPrivilegeLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-white text-zinc-900 border border-zinc-200 shadow-xl px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-zinc-950 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span>💬 Book on WhatsApp (Fast Reply)</span>
        </a>

        {/* Green WhatsApp Button */}
        <a
          href={waPrivilegeLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
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
