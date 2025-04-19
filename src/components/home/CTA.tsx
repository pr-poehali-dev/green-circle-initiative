import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="apple-container">
        <div className="bg-black text-white rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Начните использовать Apple Gift Cards сегодня
              </h2>
              <p className="text-gray-300 mb-8">
                Приобретайте приложения, игры, музыку и другой контент в экосистеме Apple с помощью подарочных карт
              </p>
              <div>
                <Link 
                  to="/cards" 
                  className="apple-button inline-block px-8 py-3 text-base"
                >
                  Купить сейчас
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px]">
              <img 
                src="/placeholder.svg" 
                alt="Apple Gift Cards" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;