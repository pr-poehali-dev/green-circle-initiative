import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Index = () => {
  const [count, setCount] = useState(52);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const triggerError = () => {
    // Эта функция вызовет ошибку JavaScript
    const obj = undefined;
    obj.nonExistentProperty.anotherProperty = "boom!";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl relative">
        {/* Градиентный круг */}
        <div className="w-24 h-24 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2 shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 flex items-center justify-center">
          <Rocket size={40} className="text-white" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-black mt-8">Число + 1</h1>
        <div className="text-6xl font-bold my-8 text-purple-600">{count}</div>
        <div className="flex space-x-4 justify-center">
          <Button 
            onClick={increment}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md text-lg"
          >
            Прибавить 1
          </Button>
          <Button 
            onClick={triggerError}
            variant="destructive"
            className="px-6 py-2 rounded-md text-lg"
          >
            Сломать всё
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
