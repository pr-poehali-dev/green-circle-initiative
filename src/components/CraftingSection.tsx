import { Button } from "@/components/ui/button";
import CraftingTable from "./CraftingTable";

const CraftingSection = () => {
  return (
    <section id="крафтинг" className="py-20 dirt-bg">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-minecraft mb-4">
            Крафтинг
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Попробуйте скрафтить предметы как в настоящем Minecraft!
          </p>
          <div className="pixel-corners overflow-hidden">
            <CraftingTable />
          </div>
          <div className="mt-8 text-sm text-foreground/70 font-minecraft">
            <p>Подсказка: Положите дерево в верхние 4 ячейки для создания верстака</p>
            <p>Положите 2 дерева в первую колонку для создания палок</p>
            <p>Дерево сверху и палки под ним для создания лопаты</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingSection;