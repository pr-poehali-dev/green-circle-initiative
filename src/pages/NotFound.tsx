import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 px-4 bg-[#F5F5F7]">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-[#0071E3] mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8">
            Запрашиваемая вами страница не существует или была перемещена.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#0071E3] hover:bg-[#0077ED] text-white rounded-full px-8"
          >
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
