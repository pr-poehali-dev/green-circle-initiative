import Icon from "@/components/ui/icon";

interface DrinksListProps {
  drinks: string[];
  animationKey: number;
  onDrinkClick: (drink: string) => void;
}

export function DrinksList({
  drinks,
  animationKey,
  onDrinkClick,
}: DrinksListProps) {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-3 text-[#D6BCFA]">
        Сгенерированные напитки:
      </h3>

      {drinks.length === 0 ? (
        <p className="text-center text-gray-400 italic min-h-[240px] flex items-center justify-center">
          Нажмите на кнопку, чтобы создать напиток
        </p>
      ) : (
        <ul className="space-y-2 h-[240px] overflow-auto pr-2 custom-scrollbar">
          {drinks.map((drink, index) => (
            <li
              key={`${drink}-${index}`}
              onClick={() => onDrinkClick(drink)}
              className={`flex items-center p-3 rounded-md cursor-pointer transition-all duration-200 hover:bg-[#3F4670] ${index === 0 ? "bg-[#9b87f5]/20 animate-fade-in font-semibold" : "bg-[#3A4058]"}`}
            >
              <Icon
                name="GlassWater"
                size={20}
                className="mr-2 text-[#9b87f5]"
              />
              {index === 0 && (
                <span className="absolute left-0 bg-[#9b87f5]/10"></span>
              )}
              <span>{drink}</span>
              {index === 0 && (
                <span
                  key={animationKey}
                  className="ml-auto text-[#D6BCFA] font-normal text-sm animate-pulse"
                >
                  Новый!
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
