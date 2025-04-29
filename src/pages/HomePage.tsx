
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AnimalsSection from "@/components/AnimalsSection";
import EventsSection from "@/components/EventsSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <AnimalsSection />
      <EventsSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
