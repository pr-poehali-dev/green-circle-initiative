import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import Icon from "@/components/ui/icon";
import { Booking } from "@/types/booking";
import { tables } from "@/data/restaurant-data";

interface TableStatusProps {
  bookings: Booking[];
}

const TableStatus: React.FC<TableStatusProps> = ({ bookings }) => {
  const todayBookings = bookings.filter(
    (booking) => booking.date === format(new Date(), "yyyy-MM-dd"),
  );

  return (
    <Card>
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
  );
};

export default TableStatus;
