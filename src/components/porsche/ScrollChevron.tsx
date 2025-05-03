
import React from "react";
import Icon from "@/components/ui/icon";

interface ScrollChevronProps {
  onClick: () => void;
}

const ScrollChevron: React.FC<ScrollChevronProps> = ({ onClick }) => {
  return (
    <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
      <button 
        onClick={onClick}
        className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full backdrop-blur-sm"
        aria-label="Прокрутить вниз"
      >
        <Icon name="ChevronDown" size={32} className="text-white" />
      </button>
    </div>
  );
};

export default ScrollChevron;
