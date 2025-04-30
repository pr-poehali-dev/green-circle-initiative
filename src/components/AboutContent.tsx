
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutContent: React.FC = () => {
  return (
    <div>
      <p className="text-lg mb-4 text-gray-700">
        Зоопарк «Баба Фрося» — это уникальное место, где мы создаем комфортные условия для жизни животных и 
        стремимся сохранить исчезающие виды.
      </p>
      <p className="text-lg mb-4 text-gray-700">
        Основанный в 2005 году, наш зоопарк стал домом для более чем 200 видов животных со всего мира. 
        Мы гордимся нашими программами по сохранению редких видов и образовательной деятельностью.
      </p>
      <p className="text-lg mb-6 text-gray-700">
        Наша миссия — не только показать посетителям удивительный мир животных, но и привить любовь к природе, 
        научить заботиться об окружающей среде и её обитателях.
      </p>
      
      <div className="flex flex-wrap gap-4">
        <Button className="bg-green-600 hover:bg-green-700">Узнать больше</Button>
        <Button variant="outline">Наша история</Button>
      </div>
    </div>
  );
};

export default AboutContent;
