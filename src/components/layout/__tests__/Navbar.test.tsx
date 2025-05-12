
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../Navbar";
import "@testing-library/jest-dom";

describe("Navbar Component", () => {
  beforeEach(() => {
    // Оборачиваем Navbar в BrowserRouter для корректной работы Link
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  test("renders the navbar with logo and title", () => {
    // Проверяем наличие названия приложения
    expect(screen.getByText("Мир Напитков")).toBeInTheDocument();
  });

  test("renders navigation links correctly", () => {
    // Проверяем наличие всех основных навигационных ссылок
    expect(screen.getByText("Генератор")).toBeInTheDocument();
    
    // Проверяем кнопку корзины
    // В мобильном виде текст может быть скрыт, но иконка должна присутствовать
    const cartButton = screen.getByRole("button", { name: /корзина/i }) || 
                      screen.getByText("Корзина");
    expect(cartButton).toBeInTheDocument();
    
    // Проверяем кнопку профиля
    const profileButton = screen.getByRole("button", { name: /профиль/i }) || 
                          screen.getByText("Профиль");
    expect(profileButton).toBeInTheDocument();
    
    // Проверяем кнопку админа
    const adminButton = screen.getByRole("button", { name: /админ/i }) || 
                        screen.getByText("Админ");
    expect(adminButton).toBeInTheDocument();
  });

  test("all navigation links have correct href attributes", () => {
    // Проверяем, что ссылка на главную страницу имеет правильный href
    const homeLink = screen.getByText("Мир Напитков").closest("a");
    expect(homeLink).toHaveAttribute("href", "/");
    
    // Проверяем ссылку на генератор
    const generatorLink = screen.getByText("Генератор").closest("a");
    expect(generatorLink).toHaveAttribute("href", "/drinks");
    
    // Проверяем ссылку на корзину
    const cartLinks = document.querySelectorAll("a[href='/cart']");
    expect(cartLinks.length).toBeGreaterThan(0);
    
    // Проверяем ссылку на профиль
    const profileLinks = document.querySelectorAll("a[href='/profile']");
    expect(profileLinks.length).toBeGreaterThan(0);
    
    // Проверяем ссылку на админ панель
    const adminLinks = document.querySelectorAll("a[href='/admin']");
    expect(adminLinks.length).toBeGreaterThan(0);
  });
});
