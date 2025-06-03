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
