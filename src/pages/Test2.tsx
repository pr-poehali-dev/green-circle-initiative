import { Link } from "react-router-dom";

const Test2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-neutral-100">Test 2</h1>
        <p className="text-neutral-500">Вторая тестовая страница</p>
        <div className="flex gap-4 justify-center mt-4">
          <Link to="/test" className="text-neutral-400 hover:text-neutral-100 underline">
            ← Test 1
          </Link>
          <Link to="/" className="text-neutral-400 hover:text-neutral-100 underline">
            Главная
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Test2;
