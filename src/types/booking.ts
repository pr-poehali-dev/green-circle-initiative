export interface Booking {
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

export interface Table {
  id: number;
  seats: number;
  name: string;
}
