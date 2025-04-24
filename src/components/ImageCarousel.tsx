
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: { src: string; alt: string; id: string }[];
  autoPlayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" 
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image) => (
          <div 
            key={image.id}
            className="min-w-full w-full h-[500px] flex-shrink-0"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button 
          onClick={goToPrevious}
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/80 hover:bg-white text-art-charcoal"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button 
          onClick={goToNext}
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/80 hover:bg-white text-art-charcoal"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? "bg-art-charcoal" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
