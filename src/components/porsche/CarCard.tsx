
interface CarCardProps {
  name: string;
  image: string;
  price: string;
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
  };
}

const CarCard = ({ name, image, price, specs }: CarCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <span className="text-sm font-medium text-gray-600">{price}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 mb-4">
          <div>
            <strong>Мощность</strong>
            <p>{specs.power}</p>
          </div>
          <div>
            <strong>Разгон</strong>
            <p>{specs.acceleration}</p>
          </div>
          <div>
            <strong>Макс. скорость</strong>
            <p>{specs.topSpeed}</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Button variant="outline" className="text-gray-700 hover:text-gray-900">
            Подробнее
          </Button>
          
          <Button className="bg-[#D5001C] hover:bg-[#B0001A] text-white">
            Заказать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
