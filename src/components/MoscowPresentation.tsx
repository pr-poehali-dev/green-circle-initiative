import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: "intro",
    title: "МОСКВА",
    subtitle: "Три века истории столицы",
    description:
      "От пожара 1812 года до цифровой столицы — история величайших трансформаций города",
    background:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=2000",
    style: {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=2000')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      width: "100%",
    },
  },
  {
    id: "19th-overview",
    title: "XIX век: Возрождение из пепла",
    subtitle: "1812-1900",
    stats: [
      { label: "Разрушено зданий", value: 75, unit: "%" },
      { label: "Рост населения", value: 90, unit: "%" },
      { label: "Новые постройки", value: 60, unit: "%" },
    ],
  },
  {
    id: "19th-fire",
    title: "1812 год: Великий пожар",
    subtitle: "Разрушение и последствия",
    content: "Наполеоновские войны привели к разрушению 75% городских построек",
    stats: [
      { label: "Разрушено домов", value: 6496, unit: "шт" },
      { label: "Эвакуировано жителей", value: 270000, unit: "чел" },
      { label: "Площадь пожара", value: 75, unit: "%" },
    ],
    chart: {
      type: "destruction",
      data: [
        { name: "Каменные дома", before: 2567, after: 468 },
        { name: "Деревянные дома", before: 6584, after: 1087 },
        { name: "Церкви", before: 329, after: 286 },
      ],
    },
  },
  {
    id: "19th-rebuild",
    title: "1813-1850: Восстановление",
    subtitle: "Архитектурное возрождение",
    content: "Масштабная реконструкция под руководством архитектора Бове",
    stats: [
      { label: "Восстановлено зданий", value: 85, unit: "%" },
      { label: "Новые проекты", value: 156, unit: "шт" },
      { label: "Рост бюджета", value: 340, unit: "%" },
    ],
    achievements: [
      "Красная площадь",
      "Большой театр",
      "Триумфальная арка",
      "Манеж",
    ],
  },
  {
    id: "20th-overview",
    title: "XX век: Советская модернизация",
    subtitle: "1917-1991",
    stats: [
      { label: "Рост населения", value: 400, unit: "%" },
      { label: "Линии метро", value: 12, unit: "шт" },
      { label: "Высотки", value: 7, unit: "шт" },
    ],
  },
  {
    id: "21st-overview",
    title: "XXI век: Цифровая трансформация",
    subtitle: "2000-2025",
    stats: [
      { label: "Цифровых сервисов", value: 300, unit: "+" },
      { label: "Население агломерации", value: 12, unit: "млн" },
      { label: "Рейтинг в мире", value: 5, unit: "место" },
    ],
  },
];

const MoscowPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderStats = () => {
    if (!slide.stats) return null;

    return (
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {slide.stats.map((stat, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-amber-300 mb-2">
                {typeof stat.value === "number" && stat.value > 100
                  ? stat.value.toLocaleString()
                  : stat.value}
                {stat.unit}
              </div>
              <div className="text-slate-300">{stat.label}</div>
              {stat.value <= 100 && typeof stat.value === "number" && (
                <Progress value={stat.value} className="mt-3 h-2" />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderChart = () => {
    if (!slide.chart) return null;

    return (
      <Card className="bg-slate-800/50 border-slate-700 mb-8">
        <CardHeader>
          <CardTitle className="text-amber-300">
            Статистика разрушений
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {slide.chart.data.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>{item.name}</span>
                  <span>
                    {item.before} → {item.after}
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full bg-red-500 transition-all duration-1000"
                      style={{
                        width: `${(item.before / Math.max(...slide.chart.data.map((d) => d.before))) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full bg-green-500 transition-all duration-1000"
                      style={{
                        width: `${(item.after / Math.max(...slide.chart.data.map((d) => d.before))) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-slate-300">До пожара</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-slate-300">После восстановления</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderAchievements = () => {
    if (!slide.achievements) return null;

    return (
      <Card className="bg-slate-800/50 border-slate-700 mb-8">
        <CardHeader>
          <CardTitle className="text-amber-300">Ключевые достижения</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {slide.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg"
              >
                <Icon name="CheckCircle" className="text-green-400" size={20} />
                <span className="text-slate-200">{achievement}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderSlideContent = () => {
    if (slide.id === "intro") {
      return (
        <div
          className="relative min-h-screen flex items-center justify-center text-white"
          style={slide.style}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center max-w-4xl px-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              {slide.title}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 opacity-90">
              {slide.subtitle}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-80">
              {slide.description}
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-montserrat">
          {slide.title}
        </h1>
        {slide.description && (
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {slide.description}
          </p>
        )}
        {slide.content && (
          <p className="text-xl text-amber-300 mt-4">{slide.content}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col">
      {/* Header with progress */}
      <div className="p-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <Progress
            value={(currentSlide / (slides.length - 1)) * 100}
            className="mb-4"
          />
          <div className="flex justify-between items-center text-sm text-slate-400">
            <span>
              Слайд {currentSlide + 1} из {slides.length}
            </span>
            <span>{slide.subtitle}</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-amber-300 scale-125"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Slide content */}
          {renderSlideContent()}

          {/* Stats, charts, achievements */}
          {renderStats()}
          {renderChart()}
          {renderAchievements()}
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Button
            onClick={prevSlide}
            variant="outline"
            disabled={currentSlide === 0}
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <Icon name="ChevronLeft" size={20} />
            Назад
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            disabled={currentSlide === slides.length - 1}
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            Далее
            <Icon name="ChevronRight" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MoscowPresentation;
