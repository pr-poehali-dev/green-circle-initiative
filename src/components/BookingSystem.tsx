import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useBookings } from "@/hooks/useBookings";
import BookingForm from "@/components/BookingForm";
import TodayBookings from "@/components/TodayBookings";
import TableStatus from "@/components/TableStatus";

const BookingSystem = () => {
  const { bookings, addBooking } = useBookings();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🍽️ Ресторан "Вкусные встречи"
          </h1>
          <p className="text-lg text-gray-600">Система бронирования столиков</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" size={24} />
                Забронировать столик
              </CardTitle>
              <CardDescription>
                Выберите дату, время и количество гостей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="w-full">
                    <Icon name="Plus" size={20} className="mr-2" />
                    Новое бронирование
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Бронирование столика</DialogTitle>
                    <DialogDescription>
                      Заполните данные для резервации
                    </DialogDescription>
                  </DialogHeader>
                  <BookingForm
                    bookings={bookings}
                    onBookingAdd={addBooking}
                    onClose={() => setIsDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <TodayBookings bookings={bookings} />
        </div>

        <div className="mt-8">
          <TableStatus bookings={bookings} />
        </div>
      </div>
    </div>
  );
};

export default BookingSystem;
