import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-black text-white pt-16 pb-12 md:py-24">
      <div className="apple-container text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          Apple Gift Cards
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-300 mb-8 max-w-2xl mx-auto">
          Один подарок. Бесконечные возможности.
        </p>
        <Link 
          to="/cards" 
          className="apple-button bg-apple-blue text-white px-8 py-3 inline-block text-base"
        >
          Купить сейчас
        </Link>
        
        <div className="mt-12 md:mt-20 relative max-w-4xl mx-auto">
          <img 
            src="/placeholder.svg" 
            alt="Apple Gift Cards" 
            className="w-full rounded-2xl shadow-lg"
          />
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-apple-gray text-black py-3 px-6 rounded-full text-sm font-medium">
            Моментальная доставка на email
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;