
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import AnimalCare from '@/components/AnimalCare';
import Events from '@/components/Events';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16"> {/* Add padding top to account for fixed header */}
        <Hero />
        <AboutSection />
        <AnimalCare />
        <Events />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
