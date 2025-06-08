import { BackgroundPaths } from "@/components/BackgroundPaths";
import Header from "@/components/Header";
import FeatureCards from "@/components/FeatureCards";
import { LampDemo } from "@/components/LampDemo";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <BackgroundPaths />
      <FeatureCards />
    </div>
  );
};

export default Index;
