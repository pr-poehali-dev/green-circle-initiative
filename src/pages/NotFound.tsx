import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="apple-container text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">404</h1>
          <p className="text-xl md:text-2xl mb-8 text-apple-darkgray">
            Страница не найдена
          </p>
          <Link 
            to="/" 
            className="apple-button inline-block px-8 py-3 text-base"
          >
            Вернуться на главную
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;