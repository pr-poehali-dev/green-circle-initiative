import GreenCircle from "@/components/GreenCircle";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <GreenCircle />
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold mb-4 color-black">Зеленый круг</h1>
        <p className="text-xl text-gray-600">Простой компонент зеленого круга</p>
      </div>
    </div>
  );
};

export default Index;
