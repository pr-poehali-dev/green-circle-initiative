import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Games from "./components/Games";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Products />
        <Games />
        <Calendar />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
