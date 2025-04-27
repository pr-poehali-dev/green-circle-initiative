import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [count, setCount] = useState(45);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-black">Число + 1</h1>
        <div className="text-6xl font-bold my-8 text-purple-600">{count}</div>
        <Button 
          onClick={increment}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md text-lg"
        >
          Прибавить 1
        </Button>
      </div>
    </div>
  );
};

export default Index;