import { useState, useEffect } from "react";
import { Booking } from "@/types/booking";

export const useBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

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

  const addBooking = (booking: Booking) => {
    const updatedBookings = [...bookings, booking];
    saveBookings(updatedBookings);
  };

  return { bookings, addBooking };
};
