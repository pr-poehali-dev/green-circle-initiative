import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "@/pages/Index";
import Experience from "@/pages/Experience";
import Summary from "@/pages/Summary";
import Contacts from "@/pages/Contacts";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
