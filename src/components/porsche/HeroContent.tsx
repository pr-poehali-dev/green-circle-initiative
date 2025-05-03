
interface HeroContentProps {
  title: string;
  subtitle: string;
  text: string;
}

const HeroContent = ({ title, subtitle, text }: HeroContentProps) => {
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
        {title}
      </h1>
      <h2 className="text-xl md:text-2xl text-white/90 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        {subtitle}
      </h2>
      <p className="text-white/80 text-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
        {text}
      </p>
    </div>
  );
};

export default HeroContent;
