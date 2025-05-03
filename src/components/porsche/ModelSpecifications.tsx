
interface SpecificationsProps {
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
    transmission: string;
  };
}

/**
 * Компонент для отображения технических характеристик модели
 */
const ModelSpecifications = ({ specs }: SpecificationsProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Технические характеристики</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-3">
            <h3 className="text-sm font-medium text-gray-500">Двигатель</h3>
            <p className="text-base font-medium text-gray-900 mt-1">{specs.engine}</p>
          </div>
          
          <div className="border-b border-gray-200 pb-3">
            <h3 className="text-sm font-medium text-gray-500">Мощность</h3>
            <p className="text-base font-medium text-gray-900 mt-1">{specs.power}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-3">
            <h3 className="text-sm font-medium text-gray-500">Разгон</h3>
            <p className="text-base font-medium text-gray-900 mt-1">{specs.acceleration}</p>
          </div>
          
          <div className="border-b border-gray-200 pb-3">
            <h3 className="text-sm font-medium text-gray-500">Максимальная скорость</h3>
            <p className="text-base font-medium text-gray-900 mt-1">{specs.topSpeed}</p>
          </div>
          
          <div className="border-b border-gray-200 pb-3">
            <h3 className="text-sm font-medium text-gray-500">Трансмиссия</h3>
            <p className="text-base font-medium text-gray-900 mt-1">{specs.transmission}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSpecifications;
