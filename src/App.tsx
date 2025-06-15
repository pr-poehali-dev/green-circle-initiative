import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscriptions from "./components/Subscriptions";
import Games from "./components/Games";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Subscriptions />
      <Games />
      <Footer />
    </div>
  );
}

export default App;
