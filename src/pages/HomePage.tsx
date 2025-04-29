
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import AnimalsSection from '@/components/AnimalsSection';
import EventsSection from '@/components/EventsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Добавляем отступ сверху для учета фиксированной навигационной панели */}
      <div className="pt-16">
        <Hero />
        <AboutSection />
        <AnimalsSection />
        <EventsSection />
        <ContactsSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
