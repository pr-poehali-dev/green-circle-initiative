import { FC } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  CircleAlert,
  Zap,
  Menu,
  Home,
  Users,
  Settings,
  Star,
  Heart,
  Search,
  Plus,
  Minus,
  X,
  LucideProps,
} from "lucide-react";

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const iconMap: Record<string, FC<LucideProps>> = {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  CircleAlert,
  Zap,
  Menu,
  Home,
  Users,
  Settings,
  Star,
  Heart,
  Search,
  Plus,
  Minus,
  X,
};

const Icon: FC<IconProps> = ({ name, fallback = "CircleAlert", ...props }) => {
  const IconComponent = iconMap[name] || iconMap[fallback];
  return <IconComponent {...props} />;
};

export default Icon;
