import { BackgroundPaths } from "@/components/BackgroundPaths";
import Header from "@/components/Header";
import FeatureCards from "@/components/FeatureCards";
import TextTagsDemo from "@/components/TextTagsDemo";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <BackgroundPaths />
      <FeatureCards />
      <TextTagsDemo />
    </div>
  );
};

export default Index;
