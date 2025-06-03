import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
              <Icon name="User" size={48} className="text-white" />
            </div>

            <h1 className="text-6xl lg:text-7xl font-thin text-gray-900 tracking-tight">
              Иван Петров
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 font-light max-w-2xl mx-auto">
              Full-Stack разработчик с 5+ годами опыта в создании современных
              веб-приложений
            </p>

            <div className="pt-8 flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium"
                asChild
              >
                <Link to="/experience">Опыт работы</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 rounded-lg text-lg font-medium"
                asChild
              >
                <Link to="/contacts">Связаться</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection />
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin text-gray-900 mb-4">Проекты</h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Реализованные решения в области машинного обучения и
              веб-разработки
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Supervisely Ecosystem */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Brain" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Экосистема Supervisely
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Разработка модульной платформы для компьютерного зрения с
                поддержкой аннотации данных, обучения моделей и развертывания
                решений в продакшене.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">
                  PyTorch
                </span>
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-xs">
                  FastAPI
                </span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded-md text-xs">
                  Docker
                </span>
              </div>
            </div>

            {/* Computer Vision Pipeline */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Eye" size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Система детекции дефектов
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                MLOps конвейер для автоматического обнаружения производственных
                дефектов с точностью 98.5% и временем обработки менее 100мс на
                изображение.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-md text-xs">
                  TensorFlow
                </span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">
                  OpenCV
                </span>
                <span className="px-2 py-1 bg-red-50 text-red-700 rounded-md text-xs">
                  Redis
                </span>
                <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded-md text-xs">
                  Kubernetes
                </span>
              </div>
            </div>

            {/* NLP Analytics Platform */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  name="MessageSquare"
                  size={24}
                  className="text-purple-600"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                NLP платформа аналитики
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Полнофункциональная платформа для анализа тональности текстов и
                извлечения ключевых инсайтов из больших объемов
                неструктурированных данных.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-xs">
                  Transformers
                </span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">
                  spaCy
                </span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-xs">
                  Elasticsearch
                </span>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs">
                  Vue.js
                </span>
              </div>
            </div>

            {/* E-commerce ML Platform */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Icon
                  name="ShoppingCart"
                  size={24}
                  className="text-orange-600"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                ML рекомендательная система
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Персонализированная система рекомендаций для e-commerce с
                увеличением конверсии на 45% и обработкой 1M+ пользователей в
                реальном времени.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-red-50 text-red-700 rounded-md text-xs">
                  Apache Spark
                </span>
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-xs">
                  MLflow
                </span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">
                  PostgreSQL
                </span>
                <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded-md text-xs">
                  GraphQL
                </span>
              </div>
            </div>

            {/* Real-time Analytics Dashboard */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="BarChart3" size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Дашборд реального времени
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Высоконагруженная система мониторинга с WebSocket соединениями,
                обрабатывающая 50K событий/сек с визуализацией метрик в реальном
                времени.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded-md text-xs">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-xs">
                  Socket.io
                </span>
                <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-xs">
                  D3.js
                </span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">
                  InfluxDB
                </span>
              </div>
            </div>

            {/* Microservices Architecture */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Network" size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Микросервисная архитектура
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Масштабируемая архитектура из 15+ микросервисов с автоматическим
                масштабированием, service mesh и распределенным трейсингом.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs">
                  Go
                </span>
                <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded-md text-xs">
                  gRPC
                </span>
                <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-md text-xs">
                  Istio
                </span>
                <span className="px-2 py-1 bg-green-50 text-green-700 rounded-md text-xs">
                  Prometheus
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Code" size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Frontend</h3>
              <p className="text-gray-600 font-light">
                React, TypeScript, Vue.js, современные CSS фреймво
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Server" size={28} className="text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">Backend</h3>
              <p className="text-gray-600 font-light">
                Node.js, Python, PostgreSQL, API разработка
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Zap" size={28} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900">DevOps</h3>
              <p className="text-gray-600 font-light">
                Docker, CI/CD, облачные платформы
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
