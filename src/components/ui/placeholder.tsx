import { FC } from "react";
import { cn } from "@/lib/utils";

interface PlaceholderProps {
  className?: string;
  text?: string;
  width?: string | number;
  height?: string | number;
  isSquare?: boolean;
  bgColor?: string;
  textColor?: string;
}

const Placeholder: FC<PlaceholderProps> = ({
  className,
  text,
  width,
  height,
  isSquare = false,
  bgColor = "bg-gray-200",
  textColor = "text-gray-500"
}) => {
  const computedHeight = isSquare ? width : height;
  
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-lg",
        bgColor,
        textColor,
        className
      )}
      style={{
        width: width ? (typeof width === 'number' ? `${width}px` : width) : '100%',
        height: computedHeight ? (typeof computedHeight === 'number' ? `${computedHeight}px` : computedHeight) : '200px'
      }}
    >
      <div className="text-center p-4">
        {text || (
          <span className="flex flex-col items-center">
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mb-2"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <span className="text-sm">Плейсхолдер изображения</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Placeholder;