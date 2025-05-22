import { useEffect } from "react";

interface BookingWidgetProps {
  calendlyUrl?: string;
  height?: number;
}

const BookingWidget = ({
  calendlyUrl = "https://calendly.com/your-username",
  height = 630,
}: BookingWidgetProps) => {
  useEffect(() => {
    // Загружаем Calendly скрипт
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Записаться на услугу
      </h2>
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: `${height}px` }}
      />
    </div>
  );
};

export default BookingWidget;
