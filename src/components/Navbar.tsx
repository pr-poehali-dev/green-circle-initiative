import { CirclePower } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-500/20 bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-blue-900/90 backdrop-blur-md shadow-lg shadow-purple-500/10">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CirclePower className="w-5 h-5 text-purple-300" />
            <span className="text-white font-semibold">Orbit</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-purple-200 hover:text-white transition-colors">
              Продукт
            </a>
            <a href="#" className="text-sm text-purple-200 hover:text-white transition-colors">
              Ресурсы
            </a>
            <a href="#" className="text-sm text-purple-200 hover:text-white transition-colors">
              Тарифы
            </a>
            <a href="#" className="text-sm text-purple-200 hover:text-white transition-colors">
              Клиенты
            </a>
            <a href="#" className="text-sm text-purple-200 hover:text-white transition-colors">
              Контакты
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-purple-200 hover:text-white transition-colors">
              Войти
            </a>
            <a
              href="#"
              className="text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-3.5 py-1.5 rounded-md border border-purple-400/30 transition-all shadow-md shadow-purple-500/20"
            >
              Регистрация
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}