import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  table: number;
  status: "confirmed" | "pending";
}

const timeSlots = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
];

const tables = [
  { id: 1, seats: 2, name: "Столик у окна" },
  { id: 2, seats: 4, name: "Семейный столик" },
  { id: 3, seats: 6, name: "Большой столик" },
  { id: 4, seats: 2, name: "Романтический" },
  { id: 5, seats: 8, name: "Банкетный зал" },
];

const BookingSystem = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    time: "",
    guests: "",
    table: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("restaurant-bookings");
    if (saved) {
      setBookings(JSON.parse(saved));
    }
  }, []);

  const saveBookings = (newBookings: Booking[]) => {
    localStorage.setItem("restaurant-bookings", JSON.stringify(newBookings));
    setBookings(newBookings);
  };

  const isTableAvailable = (tableId: number, date: string, time: string) => {
    return !bookings.some(
      (booking) =>
        booking.table === tableId &&
        booking.date === date &&
        booking.time === time &&
        booking.status === "confirmed",
    );
  };

  const getAvailableTables = (date: string, time: string, guests: number) => {
    return tables.filter(
      (table) =>
        table.seats >= guests && isTableAvailable(table.id, date, time),
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !selectedDate ||
      !formData.name ||
      !formData.phone ||
      !formData.time ||
      !formData.guests ||
      !formData.table
    ) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }

    const newBooking: Booking = {
      id: Date.now().toString(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: format(selectedDate, "yyyy-MM-dd"),
      time: formData.time,
      guests: parseInt(formData.guests),
      table: parseInt(formData.table),
      status: "confirmed",
    };

    saveBookings([...bookings, newBooking]);
    toast.success("Бронирование подтверждено!");

    setFormData({
      name: "",
      phone: "",
      email: "",
      time: "",
      guests: "",
      table: "",
    });
    setSelectedDate(undefined);
    setIsDialogOpen(false);
  };

  const todayBookings = bookings.filter(
    (booking) => booking.date === format(new Date(), "yyyy-MM-dd"),
  );

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
          {/* Форма бронирования */}
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

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests">Гостей *</Label>
                        <Select
                          onValueChange={(value) =>
                            setFormData({ ...formData, guests: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="example@mail.ru"
                      />
                    </div>

                    <div>
                      <Label>Дата *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start"
                          >
                            <Icon name="Calendar" size={16} className="mr-2" />
                            {selectedDate
                              ? format(selectedDate, "dd MMMM yyyy", {
                                  locale: ru,
                                })
                              : "Выберите дату"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label>Время *</Label>
                      <Select
                        onValueChange={(value) =>
                          setFormData({ ...formData, time: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите время" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedDate && formData.time && formData.guests && (
                      <div>
                        <Label>Столик *</Label>
                        <Select
                          onValueChange={(value) =>
                            setFormData({ ...formData, table: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите столик" />
                          </SelectTrigger>
                          <SelectContent>
                            {getAvailableTables(
                              format(selectedDate, "yyyy-MM-dd"),
                              formData.time,
                              parseInt(formData.guests),
                            ).map((table) => (
                              <SelectItem
                                key={table.id}
                                value={table.id.toString()}
                              >
                                {table.name} (до {table.seats} мест)
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    <Button type="submit" className="w-full">
                      Подтвердить бронирование
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          {/* Сегодняшние бронирования */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Clock" size={24} />
                Сегодняшние бронирования
              </CardTitle>
              <CardDescription>
                {format(new Date(), "dd MMMM yyyy", { locale: ru })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todayBookings.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">
                    На сегодня бронирований нет
                  </p>
                ) : (
                  todayBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border"
                    >
                      <div>
                        <div className="font-medium">{booking.name}</div>
                        <div className="text-sm text-gray-500">
                          {booking.time} • {booking.guests} гост(ей) • Столик{" "}
                          {booking.table}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          name="Phone"
                          size={16}
                          className="text-gray-400"
                        />
                        <span className="text-sm">{booking.phone}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Статистика столиков */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="BarChart3" size={24} />
              Статус столиков
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {tables.map((table) => {
                const todayReservations = todayBookings.filter(
                  (b) => b.table === table.id,
                ).length;
                return (
                  <div
                    key={table.id}
                    className="text-center p-4 bg-white rounded-lg border"
                  >
                    <div className="text-2xl mb-2">🪑</div>
                    <div className="font-medium">{table.name}</div>
                    <div className="text-sm text-gray-500">
                      до {table.seats} мест
                    </div>
                    <div className="text-xs mt-1">
                      {todayReservations} бронирований
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingSystem;
