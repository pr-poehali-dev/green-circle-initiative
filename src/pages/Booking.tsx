import BookingWidget from "@/components/BookingWidget";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад на главную
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Онлайн бронирование
            </h1>
            <p className="text-lg text-gray-600">
              Выберите удобное время для записи
            </p>
          </div>

          <BookingWidget />

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Не нашли подходящее время? Свяжитесь с нами:</p>
            <p className="mt-2">📞 +7 (495) 123-45-67 | ✉️ info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
