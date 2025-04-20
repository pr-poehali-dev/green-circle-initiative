
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="backdrop-blur-lg bg-zinc-800/30 rounded-3xl border border-zinc-700/50 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-0"></div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Качественный бетон для вашего строительства
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl mb-8">
              Надежные решения для любых строительных задач. Производство, доставка и укладка бетона любой марки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="backdrop-blur-sm bg-blue-500/80 hover:bg-blue-600/80 text-white border border-blue-400/50 py-6 px-8 text-lg">
                Рассчитать стоимость
              </Button>
              <Button variant="outline" className="backdrop-blur-sm bg-zinc-800/30 text-white border border-zinc-700/50 hover:bg-zinc-700/50 py-6 px-8 text-lg">
                Наша продукция
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Бетонный завод" 
                className="w-full h-full object-cover object-center opacity-80 mix-blend-overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
