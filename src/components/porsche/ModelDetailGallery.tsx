
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModelDetailGalleryProps {
  images: string[];
}

/**
 * Галерея изображений для детальной страницы модели
 */
const ModelDetailGallery = ({ images }: ModelDetailGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative rounded-xl overflow-hidden bg-gray-900 h-[400px] md:h-[600px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Изображение модели ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-12 w-12"
            onClick={prevImage}
          >
            <ChevronLeft size={24} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-12 w-12"
            onClick={nextImage}
          >
            <ChevronRight size={24} />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ModelDetailGallery;
