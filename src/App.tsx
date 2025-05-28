import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "@/pages/Index";
import Booking from "@/pages/Booking";
import Why from "@/pages/Why";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/why" element={<Why />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
