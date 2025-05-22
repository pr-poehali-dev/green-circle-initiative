import React from "react";
import * as LucideIcons from "lucide-react";

export interface IconProps {
  name: keyof typeof LucideIcons | string;
  size?: number;
  color?: string;
  className?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  className = "",
  fallback = "CircleAlert",
}) => {
  // Try to get the icon from Lucide
  const IconComponent =
    LucideIcons[name as keyof typeof LucideIcons] ||
    LucideIcons[fallback as keyof typeof LucideIcons];

  if (!IconComponent) {
    console.warn(
      `Icon "${name}" not found and fallback "${fallback}" also not found`,
    );
    return null;
  }

  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      aria-hidden="true"
    />
  );
};

export default Icon;
