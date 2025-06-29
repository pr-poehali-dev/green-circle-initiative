import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentPage = (): "home" | "contacts" => {
    if (location.pathname === "/contacts") return "contacts";
    return "home";
  };

  const handleNavigate = (page: "home" | "contacts" | "offer") => {
    if (page === "home") {
      navigate("/");
    } else if (page === "contacts") {
      navigate("/contacts");
    } else if (page === "offer") {
      navigate("/offer");
    }
  };

  return (
    <div className="min-h-screen bg-blue-950">
      <Header currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      <Outlet />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default Layout;
