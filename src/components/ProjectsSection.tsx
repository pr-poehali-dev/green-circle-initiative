import Icon from "@/components/ui/icon";

const ProjectsSection = () => {
  const projects = [
    {
      icon: "Brain",
      iconColor: "blue",
      title: "Экосистема Supervisely",
      description:
        "Разработка модульной платформы для компьютерного зрения с поддержкой аннотации данных, обучения моделей и развертывания решений в продакшене.",
      tags: ["PyTorch", "FastAPI", "React", "Docker"],
      tagColors: ["blue", "green", "purple", "gray"],
    },
    {
      icon: "Eye",
      iconColor: "green",
      title: "Система детекции дефектов",
      description:
        "MLOps конвейер для автоматического обнаружения производственных дефектов с точностью 98.5% и временем обработки менее 100мс на изображение.",
      tags: ["TensorFlow", "OpenCV", "Redis", "Kubernetes"],
      tagColors: ["orange", "blue", "red", "yellow"],
    },
    {
      icon: "MessageSquare",
      iconColor: "purple",
      title: "NLP платформа аналитики",
      description:
        "Полнофункциональная платформа для анализа тональности текстов и извлечения ключевых инсайтов из больших объемов неструктурированных данных.",
      tags: ["Transformers", "spaCy", "Elasticsearch", "Vue.js"],
      tagColors: ["green", "blue", "purple", "indigo"],
    },
    {
      icon: "ShoppingCart",
      iconColor: "orange",
      title: "ML рекомендательная система",
      description:
        "Персонализированная система рекомендаций для e-commerce с увеличением конверсии на 45% и обработкой 1M+ пользователей в реальном времени.",
      tags: ["Apache Spark", "MLflow", "PostgreSQL", "GraphQL"],
      tagColors: ["red", "green", "blue", "gray"],
    },
    {
      icon: "BarChart3",
      iconColor: "teal",
      title: "Дашборд реального времени",
      description:
        "Высоконагруженная система мониторинга с WebSocket соединениями, обрабатывающая 50K событий/сек с визуализацией метрик в реальном времени.",
      tags: ["Node.js", "Socket.io", "D3.js", "InfluxDB"],
      tagColors: ["yellow", "green", "purple", "blue"],
    },
    {
      icon: "Network",
      iconColor: "indigo",
      title: "Микросервисная архитектура",
      description:
        "Масштабируемая архитектура из 15+ микросервисов с автоматическим масштабированием, service mesh и распределенным трейсингом.",
      tags: ["Go", "gRPC", "Istio", "Prometheus"],
      tagColors: ["blue", "gray", "orange", "green"],
    },
  ];

  const getTagColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 text-blue-700",
      green: "bg-green-50 text-green-700",
      purple: "bg-purple-50 text-purple-700",
      gray: "bg-gray-50 text-gray-700",
      orange: "bg-orange-50 text-orange-700",
      red: "bg-red-50 text-red-700",
      yellow: "bg-yellow-50 text-yellow-700",
      indigo: "bg-indigo-50 text-indigo-700",
      teal: "bg-teal-50 text-teal-700",
    };
    return (
      colorMap[color as keyof typeof colorMap] || "bg-gray-50 text-gray-700"
    );
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      teal: "bg-teal-100 text-teal-600",
      indigo: "bg-indigo-100 text-indigo-600",
    };
    return (
      colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600"
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-thin text-gray-900 mb-4">Проекты</h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Реализованные решения в области машинного обучения и веб-разработки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div
                className={`w-12 h-12 ${getIconColorClasses(project.iconColor)} rounded-lg flex items-center justify-center mb-4`}
              >
                <Icon name={project.icon as any} size={24} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-2 py-1 ${getTagColorClasses(project.tagColors[tagIndex])} rounded-md text-xs`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
