
import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-white rounded-full p-6 mb-4 shadow-md">
        <Icon name={feature.icon} size={48} />
      </div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
