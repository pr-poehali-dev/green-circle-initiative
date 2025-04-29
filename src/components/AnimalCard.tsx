
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface AnimalCardProps {
  name: string;
  species: string;
  image: string;
  description: string;
  adoptionLink?: string;
}

const AnimalCard = ({ name, species, image, description, adoptionLink }: AnimalCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="text-green-700 font-medium">{species}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
      {adoptionLink && (
        <CardFooter>
          <Button className="w-full bg-green-600 hover:bg-green-700">
            Опекать {name}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default AnimalCard;
