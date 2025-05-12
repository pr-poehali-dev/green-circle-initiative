
import { render, screen, fireEvent } from "@testing-library/react";
import { DrinkCard } from "../DrinkCard";
import "@testing-library/jest-dom";

describe("DrinkCard Component", () => {
  const mockGeneratedDrinks = ["Мохито", "Пина Колада"];
  const mockAnimationKey = 1;
  const mockOnGenerateDrink = jest.fn();
  const mockOnDrinkClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders DrinkCard component correctly", () => {
    render(
      <DrinkCard
        generatedDrinks={mockGeneratedDrinks}
        animationKey={mockAnimationKey}
        onGenerateDrink={mockOnGenerateDrink}
        onDrinkClick={mockOnDrinkClick}
      />
    );

    // Проверяем, что заголовок отображается
    expect(screen.getByText("Генератор напитков")).toBeInTheDocument();
    
    // Проверяем, что кнопка генерации напитка отображается
    expect(screen.getByText("Нажми меня!")).toBeInTheDocument();
    
    // Проверяем, что список напитков отображается
    expect(screen.getByText("Сгенерированные напитки:")).toBeInTheDocument();
    
    // Проверяем наличие напитков из списка
    expect(screen.getByText("Мохито")).toBeInTheDocument();
    expect(screen.getByText("Пина Колада")).toBeInTheDocument();
  });

  test("calls onGenerateDrink when button is clicked", () => {
    render(
      <DrinkCard
        generatedDrinks={mockGeneratedDrinks}
        animationKey={mockAnimationKey}
        onGenerateDrink={mockOnGenerateDrink}
        onDrinkClick={mockOnDrinkClick}
      />
    );

    const button = screen.getByText("Нажми меня!");
    fireEvent.click(button);

    expect(mockOnGenerateDrink).toHaveBeenCalledTimes(1);
  });

  test("calls onDrinkClick when a drink is clicked", () => {
    render(
      <DrinkCard
        generatedDrinks={mockGeneratedDrinks}
        animationKey={mockAnimationKey}
        onGenerateDrink={mockOnGenerateDrink}
        onDrinkClick={mockOnDrinkClick}
      />
    );

    const drinkItem = screen.getByText("Мохито");
    fireEvent.click(drinkItem);

    expect(mockOnDrinkClick).toHaveBeenCalledTimes(1);
    expect(mockOnDrinkClick).toHaveBeenCalledWith("Мохито");
  });

  test("displays empty state when no drinks", () => {
    render(
      <DrinkCard
        generatedDrinks={[]}
        animationKey={mockAnimationKey}
        onGenerateDrink={mockOnGenerateDrink}
        onDrinkClick={mockOnDrinkClick}
      />
    );

    expect(screen.getByText("Нажмите на кнопку, чтобы создать напиток")).toBeInTheDocument();
  });
});
