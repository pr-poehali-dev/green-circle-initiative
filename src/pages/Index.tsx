import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarkdownDemo from "@/components/MarkdownDemo";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MarkdownDemo />
      <Projects />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;
