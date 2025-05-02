
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContactsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Контакты</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MapPin" className="text-primary" />
                Адрес
              </CardTitle>
              <CardDescription>Наш главный офис</CardDescription>
            </CardHeader>
            <CardContent>
              <p>г. Москва, ул. Строителей, 15</p>
              <p className="mt-2">Пн-Пт: 9:00 - 18:00</p>
              <p>Сб-Вс: 10:00 - 16:00</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Phone" className="text-primary" />
                Телефон
              </CardTitle>
              <CardDescription>Свяжитесь с нами</CardDescription>
            </CardHeader>
            <CardContent>
              <p>+7 (999) 123-45-67</p>
              <p className="mt-2">info@kirpichi.ru</p>
              <p className="mt-4 text-sm text-muted-foreground">Мы отвечаем на звонки и письма в рабочее время</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;
