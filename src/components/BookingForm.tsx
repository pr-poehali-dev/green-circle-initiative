import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Booking } from "@/types/booking";
import { timeSlots, tables } from "@/data/restaurant-data";

interface BookingFormProps {
  bookings: Booking[];
  onBookingAdd: (booking: Booking) => void;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  bookings,
  onBookingAdd,
  onClose,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    time: "",
    guests: "",
    table: "",
  });

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

    onBookingAdd(newBooking);
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
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Имя *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+7 (999) 123-45-67"
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="example@mail.ru"
        />
      </div>

      <div>
        <Label>Дата *</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start">
              <Icon name="Calendar" size={16} className="mr-2" />
              {selectedDate
                ? format(selectedDate, "dd MMMM yyyy", { locale: ru })
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
          onValueChange={(value) => setFormData({ ...formData, time: value })}
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
                <SelectItem key={table.id} value={table.id.toString()}>
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
  );
};

export default BookingForm;
