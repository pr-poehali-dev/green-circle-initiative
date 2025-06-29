import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getCurrentPage = (): "home" | "contacts" => {
    if (location.pathname === "/contacts") return "contacts";
    return "home";
  };

  const handleNavigate = (page: "home" | "contacts") => {
    if (page === "home") {
      navigate("/");
    } else if (page === "contacts") {
      navigate("/contacts");
    }
  };

  return (
    <div className="min-h-screen bg-blue-950">
      <Header currentPage={getCurrentPage()} onNavigate={handleNavigate} />
      <Outlet />
    </div>
  );
};

export default Layout;
