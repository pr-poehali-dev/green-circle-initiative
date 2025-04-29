import { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AnimalsSection from "@/components/AnimalsSection";
import EventsSection from "@/components/EventsSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";
import AnimatedAnimal from "@/components/AnimatedAnimal";

const HomePage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      <div className="relative">
        <Hero />
        <AnimatedAnimal />
      </div>
      <div id="about" className="py-16 bg-green-50">
        <AboutSection />
      </div>
      <div id="animals" className="py-16">
        <AnimalsSection />
      </div>
      <div id="events" className="py-16 bg-green-50">
        <EventsSection />
      </div>
      <div id="contacts" className="py-16">
        <ContactsSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;