import React from "react";
import StarWarsCrawl from "@liorpo/react-star-wars-crawl";

const StarWarsText: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <StarWarsCrawl
        title="ПОЕХАЛИ!"
        subTitle="Эпизод I"
        text={`Давным-давно в галактике, далёкой-далёкой...

Сила кода пробудилась! Великий ассистент Юра, мастер разработки, создает удивительные сайты для всей галактики.

Используя мощь React, TypeScript и Tailwind CSS, он превращает идеи в реальность. Никого не оставляет равнодушным его мастерство создания компонентов.

Время пришло! Присоединяйтесь к космическому путешествию разработки, где каждый проект - это новая планета, полная возможностей и открытий.

Да пребудет с вами код!`}
      />
    </div>
  );
};

export default StarWarsText;
