
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Paw, Heart, DollarSign } from 'lucide-react';

const AnimalSponsorCard = ({ 
  name, 
  species, 
  image, 
  description, 
  monthlyCost 
}: { 
  name: string; 
  species: string; 
  image: string; 
  description: string; 
  monthlyCost: number 
}) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Paw size={18} className="text-primary" />
          {name}
        </CardTitle>
        <CardDescription>{species}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center gap-2 text-primary font-medium">
          <DollarSign size={16} />
          <span>{monthlyCost} ₽/месяц</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Heart size={16} className="mr-2" />
          Стать опекуном
        </Button>
      </CardFooter>
    </Card>
  );
};

const AdoptionPage = () => {
  const animals = [
    {
      name: "Лео",
      species: "Африканский лев",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Величественный король зверей, нуждающийся в вашей поддержке для здорового питания и ветеринарного ухода.",
      monthlyCost: 5000
    },
    {
      name: "Марта",
      species: "Бурый медведь",
      image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Дружелюбная медведица, которая обожает мёд и нуждается в просторном вольере и специальном уходе.",
      monthlyCost: 3500
    },
    {
      name: "Кеша",
      species: "Попугай ара",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Яркий и разговорчивый попугай, которому нужны особые витамины и игрушки для развития.",
      monthlyCost: 1200
    },
    {
      name: "Глаша",
      species: "Жираф",
      image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Высокая красавица с нежным характером, требующая специального рациона с высоким содержанием клетчатки.",
      monthlyCost: 4500
    },
    {
      name: "Шнырь",
      species: "Сурикат",
      image: "https://images.unsplash.com/photo-1528229592233-544701fce628?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Маленький любопытный сурикат, который постоянно наблюдает за посетителями и требует разнообразного питания.",
      monthlyCost: 1000
    },
    {
      name: "Умка",
      species: "Белый медведь",
      image: "https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Северный гигант, требующий особых условий содержания, включая охлаждаемый бассейн и специальную диету.",
      monthlyCost: 6000
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Опека над животными</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Станьте опекуном животного в зоопарке "Баба Фрося" и помогите нам обеспечить лучшие условия жизни для наших питомцев.
            </p>
          </div>

          <div className="mb-16 bg-muted p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Как стать опекуном?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Выберите животное</h3>
                <p className="text-muted-foreground">Познакомьтесь с нашими питомцами и выберите того, кого хотите поддержать</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-4">
                  <DollarSign size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Оформите опеку</h3>
                <p className="text-muted-foreground">Заполните форму и выберите вариант ежемесячной поддержки</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-4">
                  <Paw size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2">Получите сертификат</h3>
                <p className="text-muted-foreground">Мы вручим вам именной сертификат опекуна и будем присылать новости о вашем подопечном</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-8">Наши животные, ждущие опеки</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {animals.map((animal, index) => (
              <AnimalSponsorCard
                key={index}
                name={animal.name}
                species={animal.species}
                image={animal.image}
                description={animal.description}
                monthlyCost={animal.monthlyCost}
              />
            ))}
          </div>

          <div className="mt-16 bg-primary/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Преимущества опеки</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary">✓</div>
                <p>Именная табличка у вольера с указанием вашего имени как опекуна</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary">✓</div>
                <p>Сертификат опекуна и сувениры от зоопарка</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary">✓</div>
                <p>Ежемесячные отчеты о состоянии вашего подопечного</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary">✓</div>
                <p>Приглашения на особые мероприятия зоопарка</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 text-primary">✓</div>
                <p>Возможность посещения "закулисья" зоопарка (по предварительной записи)</p>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdoptionPage;
