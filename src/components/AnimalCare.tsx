
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const AnimalCare = () => {
  const animals = [
    {
      id: 1,
      name: 'Лев Симба',
      species: 'Африканский лев',
      description: 'Симба — гордый и величественный лев, который стал символом нашего зоопарка. Ему нужна особая диета и внимание.',
      image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1000&auto=format&fit=crop',
      requiredSum: 15000,
      currentSum: 8500
    },
    {
      id: 2,
      name: 'Зося',
      species: 'Бурый медведь',
      description: 'Зося любит мед и рыбу. Она очень игривая и ласковая, хотя и крупная. Помогите нам обеспечить ей комфортные условия.',
      image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1000&auto=format&fit=crop',
      requiredSum: 12000,
      currentSum: 7200
    },
    {
      id: 3,
      name: 'Кеша',
      species: 'Амазонский попугай',
      description: 'Яркий и говорливый Кеша нуждается в специальных кормах и игрушках для поддержания активности.',
      image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=1000&auto=format&fit=crop',
      requiredSum: 5000,
      currentSum: 3000
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-[#E5DEFF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-800">Опека над животными</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700">
            Станьте опекуном животного и помогите нам обеспечить им должный уход, питание и комфортные условия проживания.
            Ваша поддержка имеет огромное значение!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {animals.map(animal => (
            <div key={animal.id} className="bg-white rounded-xl shadow-md overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img 
                  src={animal.image} 
                  alt={animal.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-purple-700">{animal.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{animal.species}</p>
                <p className="text-gray-700 mb-4">{animal.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Собрано: {animal.currentSum} ₽</span>
                    <span>Цель: {animal.requiredSum} ₽</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full" 
                      style={{ width: `${(animal.currentSum / animal.requiredSum) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Icon name="Heart" size={16} />
                  Стать опекуном
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-purple-500 text-purple-700 hover:bg-purple-50">
            Посмотреть всех животных
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnimalCare;
