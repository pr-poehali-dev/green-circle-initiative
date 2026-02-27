import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-neutral-100">Тестовая страница</h1>
        <p className="text-neutral-500">Всё работает 🚀</p>
        <Link to="/" className="inline-block mt-4 text-neutral-400 hover:text-neutral-100 underline">
          ← Назад
        </Link>
      </div>
    </div>
  );
};

export default Test;
