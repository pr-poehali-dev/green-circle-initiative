import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Icon from "@/components/ui/icon";
import { Booking } from "@/types/booking";

interface TodayBookingsProps {
  bookings: Booking[];
}

const TodayBookings: React.FC<TodayBookingsProps> = ({ bookings }) => {
  const todayBookings = bookings.filter(
    (booking) => booking.date === format(new Date(), "yyyy-MM-dd"),
  );

  return (
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
                  <Icon name="Phone" size={16} className="text-gray-400" />
                  <span className="text-sm">{booking.phone}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodayBookings;
