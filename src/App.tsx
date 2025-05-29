import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "@/pages/Index";
import Products from "@/pages/Products";
import Instructions from "@/pages/Instructions";
import Why from "@/pages/Why";
import Booking from "@/pages/Booking";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/why" element={<Why />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
