
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const PorscheGallery = () => {
  // Данные для галереи
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Porsche 911 на трассе"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Porsche 911 GT3"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1610019969767-bbc12a686e35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Porsche 911 в движении"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Porsche 911 Carrera"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1584060622420-0657f3ec1d8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      alt: "Детали Porsche 911"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Галерея Porsche 911</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-3xl">
          Восхититесь каждой линией, каждой деталью, каждым аспектом инженерного совершенства Porsche 911.
        </p>
        
        <Carousel className="w-full">
          <CarouselContent>
            {galleryImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <div className="h-[400px] overflow-hidden rounded-lg relative group">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white text-lg font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Хотите увидеть больше изображений Porsche 911?
          </p>
          <a 
            href="#" 
            className="text-red-500 hover:text-red-400 transition-colors text-lg inline-flex items-center"
          >
            Посмотреть полную галерею
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PorscheGallery;
