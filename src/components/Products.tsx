
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Products = () => {
  const products = [
    {
      name: "М100 B7.5",
      description: "Используется для подготовительных работ и стяжек",
      price: "от 3 200 ₽/м³",
      features: ["Морозостойкость F50", "Подвижность П3", "Для небольших нагрузок"],
      popular: false
    },
    {
      name: "М200 B15",
      description: "Для фундаментов небольших построек и площадок",
      price: "от 3 700 ₽/м³",
      features: ["Морозостойкость F100", "Подвижность П3-П4", "Водонепроницаемость W4"],
      popular: true
    },
    {
      name: "М300 B22.5",
      description: "Для монолитных конструкций и промышленных объектов",
      price: "от 4 100 ₽/м³",
      features: ["Морозостойкость F150", "Подвижность П4", "Водонепроницаемость W6"],
      popular: false
    },
    {
      name: "М350 B25",
      description: "Для несущих элементов и высоконагруженных конструкций",
      price: "от 4 500 ₽/м³",
      features: ["Морозостойкость F200", "Подвижность П4", "Водонепроницаемость W8"],
      popular: false
    }
  ];

  return (
    <section id="products" className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Наша продукция</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="backdrop-blur-lg bg-zinc-800/40 border border-zinc-700/50 overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold text-white">{product.name}</CardTitle>
                {product.popular && (
                  <Badge className="bg-blue-500/80 text-white">Популярный</Badge>
                )}
              </div>
              <CardDescription className="text-zinc-300">{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-2xl font-bold text-blue-400 mb-4">{product.price}</p>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-zinc-300">
                    <span className="mr-2 text-green-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full backdrop-blur-sm bg-zinc-700/50 hover:bg-zinc-600/50 border border-zinc-600/50">
                Заказать
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
