import AmbientBackground from '@/components/AmbientBackground';
import AnnouncementBar from '@/components/AnnouncementBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Treatments from '@/components/Treatments';
import BeforeAfter from '@/components/BeforeAfter';
import Bundles from '@/components/Bundles';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Treatments />
        <BeforeAfter />
        <Bundles />
        <Testimonials />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
