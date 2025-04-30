
import { useRef } from 'react';
import AboutContent from '@/components/AboutContent';
import CircleImage from '@/components/CircleImage';
import { useCirclesAnimation } from '@/hooks/useCirclesAnimation';

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { circles } = useCirclesAnimation(containerRef);

  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-green-800">О нашем зоопарке</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AboutContent />
          
          <div ref={containerRef} className="relative h-[400px] overflow-hidden bg-gray-50 rounded-lg shadow-inner">
            {circles.map(circle => (
              <CircleImage key={circle.id} circle={circle} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
