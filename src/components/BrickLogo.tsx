
import React from "react";

const BrickLogo: React.FC = () => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect 
        x="2" 
        y="7" 
        width="20" 
        height="10" 
        rx="1" 
        fill="#FBB040" 
        stroke="#1A1F2C" 
        strokeWidth="1.5"
      />
      <line 
        x1="8" 
        y1="7" 
        x2="8" 
        y2="17" 
        stroke="#1A1F2C" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <line 
        x1="16" 
        y1="7" 
        x2="16" 
        y2="17" 
        stroke="#1A1F2C" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BrickLogo;
