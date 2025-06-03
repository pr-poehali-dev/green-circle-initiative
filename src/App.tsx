import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateStore from "./pages/CreateStore";
import StoreManagement from "./pages/StoreManagement";
import NewProducts from "./pages/NewProducts";
import Marketplace from "./pages/Marketplace";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BuyerProfile from "./pages/BuyerProfile";
import NotFound from "./pages/NotFound";
import SellerPage from "@/pages/SellerPage";
import SellerProfile from "@/pages/SellerProfile";
import AdminLogin from "@/pages/AdminLogin";
import AdminRegister from "@/pages/AdminRegister";
import AdminDashboard from "@/pages/AdminDashboard";
import AdminOverview from "@/components/AdminOverview";
import AdminProducts from "@/components/AdminProducts";
import AdminOrders from "@/components/AdminOrders";
import AdminAnalytics from "@/components/AdminAnalytics";
import AdminFinance from "@/components/AdminFinance";
import NewMarketplace from "./pages/NewMarketplace";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewMarketplace />} />
          <Route path="/create-store" element={<CreateStore />} />
          <Route path="/store-management" element={<StoreManagement />} />
          <Route path="/new-products" element={<NewProducts />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
