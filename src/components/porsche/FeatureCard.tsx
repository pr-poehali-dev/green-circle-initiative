
import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
        <Icon name={icon} size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
