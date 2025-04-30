
import React from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof LucideIcons | string;
  fallback?: keyof typeof LucideIcons;
  className?: string;
}

const Icon = ({ name, fallback = "CircleAlert", className, ...props }: IconProps) => {
  const LucideIcon = (LucideIcons[name as keyof typeof LucideIcons] || 
                      LucideIcons[fallback]) as LucideIcon;
  
  return (
    <LucideIcon 
      className={cn("h-5 w-5", className)} 
      aria-hidden="true" 
      {...props} 
    />
  );
};

export default Icon;
