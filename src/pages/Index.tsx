import GreenCircle from "@/components/GreenCircle";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <GreenCircle size="large" className="shadow-lg" />
        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Зелёный круг</h1>
          <p className="text-xl text-gray-600">Простой компонент зелёного круга</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
