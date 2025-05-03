
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/90 to-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Готовы ощутить привилегию быть владельцем Porsche?
        </h2>
        <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
          Запишитесь на персональную консультацию, и мы создадим уникальное предложение, 
          которое превзойдет ваши ожидания. Ваш идеальный Porsche ждет именно вас.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white hover:bg-white/90 text-primary font-medium px-8"
          >
            Записаться на консультацию
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 px-8"
          >
            Узнать о специальных предложениях
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
