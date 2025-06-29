import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "contacts">("home");

  const handleNavigate = (page: "home" | "contacts") => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Index />;
      case "contacts":
        return <Contacts />;
      default:
        return <Index />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-blue-950">
          <Header currentPage={currentPage} onNavigate={handleNavigate} />
          {renderCurrentPage()}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
