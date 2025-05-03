
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="hover-scale transition-all duration-300 border-none shadow-md hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
          <Icon name={icon} className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
