
import React from "react";
import * as LucideIcons from "lucide-react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  color?: string;
  fallback?: string;
}

const Icon = ({ name, size = 24, color = "currentColor", fallback = "CircleAlert", ...props }: IconProps) => {
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons] || LucideIcons[fallback as keyof typeof LucideIcons];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react, using fallback "${fallback}"`);
    return null;
  }
  
  return <IconComponent size={size} color={color} {...props} />;
};

export default Icon;
