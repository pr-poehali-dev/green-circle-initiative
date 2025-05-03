
import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

interface ScrollChevronProps {
  targetId: string;
}

const ScrollChevron = ({ targetId }: ScrollChevronProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 animate-bounce ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTarget}
      aria-label="Прокрутить вниз"
    >
      <Icon name="ChevronDown" className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollChevron;
