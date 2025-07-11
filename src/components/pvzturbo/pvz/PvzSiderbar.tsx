import { NavLink } from "react-router-dom";
import Icon from "@/components/ui/icon";

const PvzSidebar = () => {
  const menuItems = [
    { path: "/pvzturbo/overview", icon: "BarChart3", label: "Сводка" },
    {
      path: "/pvzturbo/order-issuance",
      icon: "Truck",
      label: "Выдача заказов",
    },
    {
      path: "/pvzturbo/shipment-receipt",
      icon: "Inbox",
      label: "Прием отправлений",
    },
    {
      path: "/pvzturbo/order-place",
      icon: "LayoutGrid",
      label: "Размещение заказов",
    },
    {
      path: "/pvzturbo/returns-from-client",
      icon: "Undo2",
      label: "Возвраты от клиента",
    },
    {
      path: "/pvzturbo/returns-from-seller",
      icon: "RotateCcw",
      label: "Возвраты от продавца",
    },
    { path: "/pvzturbo/sklad", icon: "Boxes", label: "Склад" },
    { path: "/pvzturbo/training", icon: "BookOpenCheck", label: "Обучение" },
    {
      path: "/pvzturbo/support",
      icon: "MessageCircleQuestion",
      label: "Поддержка",
    },
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200/60 min-h-screen flex flex-col shadow-sm">
      <div className="p-6 border-b border-slate-200/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
            <Icon name="Zap" size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">PVZ Turbo</h1>
            <p className="text-xs text-slate-500">Система управления</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              <Icon name={item.icon as any} size={18} />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-slate-200/60">
        <NavLink
          to="/pvzturbo/profile"
          className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-all duration-200"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">А</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">
              Александр Волков
            </p>
            <p className="text-xs text-slate-500 truncate">
              admin@potionshop.ru
            </p>
          </div>
          <Icon name="ChevronRight" size={16} className="text-slate-400" />
        </NavLink>
      </div>
    </aside>
  );
};

export default PvzSidebar;
