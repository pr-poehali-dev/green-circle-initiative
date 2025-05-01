import React from 'react';
import * as LucideIcons from 'lucide-react';

type IconName = keyof typeof LucideIcons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  fallback?: string;
}

const Icon = ({ name, size = 24, fallback = "AlertCircle", ...props }: IconProps) => {
  // Using the name prop to identify which Lucide icon to render
  let IconComponent: React.FC<React.SVGProps<SVGSVGElement>> | null = null;
  
  // Check if the icon exists in lucide-react
  if (name in LucideIcons) {
    IconComponent = LucideIcons[name as IconName];
  } else if (fallback in LucideIcons) {
    // Use the fallback icon if specified and it exists
    IconComponent = LucideIcons[fallback as IconName];
  } else {
    // Default fallback
    IconComponent = LucideIcons.AlertCircle;
  }
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found and fallback failed.`);
    return null;
  }
  
  return <IconComponent size={size} {...props} />;
};

export default Icon;