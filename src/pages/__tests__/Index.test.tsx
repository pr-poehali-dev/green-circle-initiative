
import { render, screen, fireEvent, act } from "@testing-library/react";
import Index from "../Index";
import { drinksData, drinks } from "@/data/drinksData";
import "@testing-library/jest-dom";

// Мокаем Math.random для предсказуемых результатов в тестах
const originalRandom = Math.random;
const mockRandom = jest.fn();

describe("Index Page with Drink Generator", () => {
  beforeEach(() => {
    // Сбрасываем все моки перед каждым тестом
    jest.clearAllMocks();
    
    // Устанавливаем мок для Math.random
    Math.random = mockRandom;
    
    // Мокаем Dialog Portal для тестирования
    jest.spyOn(document, "getElementById").mockImplementation((id) => {
      if (id === "radix-:r0:") {
        return document.createElement("div");
      }
      return null;
    });
  });

  afterAll(() => {
    // Восстанавливаем оригинальную функцию после тестов
    Math.random = originalRandom;
  });

  test("renders the drink generator page correctly", () => {
    render(<Index />);
    
    // Проверяем, что страница содержит компонент DrinkCard
    expect(screen.getByText("Генератор напитков")).toBeInTheDocument();
    
    // Проверяем наличие кнопки для генерации напитка
    expect(screen.getByText("Нажми меня!")).toBeInTheDocument();
  });

  test("generates a new drink when button is clicked", () => {
    // Устанавливаем результат Math.random для предсказуемости теста
    mockRandom.mockReturnValue(0.1); // Предположим, что это даст нам первый напиток из списка
    
    render(<Index />);
    
    const button = screen.getByText("Нажми меня!");
    
    // Кликаем на кнопку генерации
    act(() => {
      fireEvent.click(button);
    });
    
    // Проверяем, что сгенерированный напиток появился в списке
    // Ожидаем первый напиток из списка, так как mockRandom вернет 0.1
    const firstDrink = drinks[Math.floor(0.1 * drinks.length)];
    expect(screen.getByText(firstDrink)).toBeInTheDocument();
    
    // Проверяем наличие метки "Новый!" для первого напитка
    expect(screen.getByText("Новый!")).toBeInTheDocument();
  });

  test("opens the recipe dialog when a drink is clicked", () => {
    // Устанавливаем результат Math.random для предсказуемости теста
    mockRandom.mockReturnValue(0.1);
    
    render(<Index />);
    
    // Генерируем напиток
    const button = screen.getByText("Нажми меня!");
    act(() => {
      fireEvent.click(button);
    });
    
    // Определяем сгенерированный напиток
    const firstDrink = drinks[Math.floor(0.1 * drinks.length)];
    
    // Кликаем на сгенерированный напиток
    const drinkElement = screen.getByText(firstDrink);
    act(() => {
      fireEvent.click(drinkElement);
    });
    
    // Проверяем, что диалог с рецептом открылся
    // Заголовок должен содержать название напитка
    expect(screen.getByText("Ингредиенты:")).toBeInTheDocument();
    
    // Проверяем наличие рецепта
    const recipe = drinksData[firstDrink];
    expect(recipe).toBeDefined();
    
    // Проверяем наличие первого ингредиента в диалоге
    if (recipe && recipe.ingredients.length > 0) {
      const firstIngredient = recipe.ingredients[0];
      expect(screen.getByText(new RegExp(firstIngredient, "i"))).toBeInTheDocument();
    }
  });

  test("multiple drinks can be generated and stored in history", () => {
    // Устанавливаем различные результаты для последовательных вызовов
    mockRandom
      .mockReturnValueOnce(0.1)  // Первый напиток
      .mockReturnValueOnce(0.3); // Второй напиток
    
    render(<Index />);
    
    const button = screen.getByText("Нажми меня!");
    
    // Генерируем первый напиток
    act(() => {
      fireEvent.click(button);
    });
    
    // Генерируем второй напиток
    act(() => {
      fireEvent.click(button);
    });
    
    // Определяем ожидаемые напитки
    const firstDrink = drinks[Math.floor(0.1 * drinks.length)];
    const secondDrink = drinks[Math.floor(0.3 * drinks.length)];
    
    // Проверяем, что оба напитка присутствуют в списке
    expect(screen.getByText(firstDrink)).toBeInTheDocument();
    expect(screen.getByText(secondDrink)).toBeInTheDocument();
    
    // Проверяем, что метка "Новый!" применена только к последнему напитку
    const newLabels = screen.getAllByText("Новый!");
    expect(newLabels.length).toBe(1);
  });
});
