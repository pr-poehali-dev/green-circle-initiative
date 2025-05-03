
import React from "react";

interface HeroBackgroundProps {
  imageUrl: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ imageUrl }) => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundPosition: "center 40%"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  );
};

export default HeroBackground;
