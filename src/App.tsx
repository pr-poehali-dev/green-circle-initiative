import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/buyer/profile" element={<BuyerProfile />} />
          <Route path="/marketplace" element={<NewMarketplace />} />
          <Route
            path="/marketplace/category/:category"
            element={<NewMarketplace />}
          />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/seller/:sellerId" element={<SellerPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<AdminOverview />} />
            <Route path="/admin/overview" element={<AdminOverview />} />
            <Route path="/admin/profile" element={<SellerProfile />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="finance" element={<AdminFinance />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
