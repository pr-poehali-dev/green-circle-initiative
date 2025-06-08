import { BackgroundPaths } from "@/components/BackgroundPaths";
import Header from "@/components/Header";
import { LampDemo } from "@/components/LampDemo";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <LampDemo />
      <BackgroundPaths />
    </div>
  );
};

export default Index;
