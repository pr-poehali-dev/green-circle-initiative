
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Compare from "./pages/Compare";
import OrderSuccess from "./pages/OrderSuccess";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import RegisterTest from "./pages/RegisterTest";
import Auth from "./pages/Auth";
import VkCallback from "./pages/VkCallback";
import GoogleCallback from "./pages/GoogleCallback";
import EmailBroadcast from "./pages/EmailBroadcast";
import FluxPlayground from "./pages/FluxPlayground";
import { CartProvider } from "./contexts/CartContext";
import { CompareProvider } from "./contexts/CompareContext";
import { UnisenderTestButton } from "@/components/extensions/unisender/UnisenderTestButton";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <CompareProvider>
            <Toaster />
            <Sonner />
            <UnisenderTestButton apiUrl="https://devfunctions.poehali.dev/016fc154-c7e9-4deb-b174-a94dd098fdf0" />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/success" element={<OrderSuccess />} />
                <Route path="/order/:orderNumber" element={<Order />} />
                <Route path="/register-test" element={<RegisterTest />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/vk/callback" element={<VkCallback />} />
                <Route path="/auth/google/callback" element={<GoogleCallback />} />
                <Route path="/email-broadcast" element={<EmailBroadcast />} />
                <Route path="/flux" element={<FluxPlayground />} />








                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </CompareProvider>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;