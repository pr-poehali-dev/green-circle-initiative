
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Calendar, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-green-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            О нашем зоопарке
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Зоопарк «Баба Фрося» — это место, где вы можете познакомиться с разнообразными животными и узнать много интересного о фауне.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Забота о животных</h3>
              <p className="mt-2 text-base text-gray-500">
                Мы создаём комфортные условия для наших питомцев, максимально приближенные к естественной среде обитания.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Образовательные программы</h3>
              <p className="mt-2 text-base text-gray-500">
                Регулярно проводим познавательные экскурсии для детей и взрослых, рассказывая о жизни и повадках животных.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Интересные мероприятия</h3>
              <p className="mt-2 text-base text-gray-500">
                Организуем тематические праздники, мастер-классы и показательные кормления животных.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Удобное расположение</h3>
              <p className="mt-2 text-base text-gray-500">
                Наш зоопарк находится в живописном месте с удобной транспортной доступностью и парковкой.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
