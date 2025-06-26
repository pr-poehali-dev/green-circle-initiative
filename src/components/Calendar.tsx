import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Календарь событий
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
          <Calendar
            onChange={onChange}
            value={value}
            className="border-none"
            locale="ru-RU"
          />
        </div>
        {value && (
          <p className="mt-4 text-gray-600">
            Выбранная дата:{" "}
            {value instanceof Date
              ? value.toLocaleDateString("ru-RU")
              : "Диапазон дат"}
          </p>
        )}
      </div>
    </div>
  );
}
