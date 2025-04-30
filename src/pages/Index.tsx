
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import AnimalCare from '@/components/AnimalCare';
import Events from '@/components/Events';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F2FCE2]">
      {/* Навигация */}
      <header className="sticky top-0 z-50 w-full py-4 px-4 md:px-8 bg-white/95 backdrop-blur-sm border-b">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-green-700">Зоопарк «Баба Фрося»</h1>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection('about')}
                  className={navigationMenuTriggerStyle() + 
                    (activeSection === 'about' ? ' bg-green-100 text-green-800' : '')}
                >
                  О нас
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection('animalcare')}
                  className={navigationMenuTriggerStyle() +
                    (activeSection === 'animalcare' ? ' bg-green-100 text-green-800' : '')}
                >
                  Опека над животными
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection('events')}
                  className={navigationMenuTriggerStyle() +
                    (activeSection === 'events' ? ' bg-green-100 text-green-800' : '')}
                >
                  Мероприятия
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => scrollToSection('contacts')}
                  className={navigationMenuTriggerStyle() +
                    (activeSection === 'contacts' ? ' bg-green-100 text-green-800' : '')}
                >
                  Контакты
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="md:hidden">
            <Button variant="outline" onClick={() => {}}>
              Меню
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Hero />
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="animalcare">
          <AnimalCare />
        </div>
        
        <div id="events">
          <Events />
        </div>
        
        <div id="contacts">
          <Contacts />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
