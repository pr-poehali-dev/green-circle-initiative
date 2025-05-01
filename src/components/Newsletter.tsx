import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Здесь был бы API-запрос для отправки email
    }
  };

  return (
    <section className="py-12 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {!subscribed ? (
            <>
              <Icon name="Mail" size={32} className="mx-auto mb-4 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Подпишитесь на наши новости</h2>
              <p className="text-gray-600 mb-8">
                Будьте в курсе новых поступлений, акций и эксклюзивных предложений
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <Button type="submit">Подписаться</Button>
              </form>
              <p className="text-xs text-gray-500 mt-4">
                Нажимая кнопку "Подписаться", вы соглашаетесь с нашей{" "}
                <a href="/policy" className="underline hover:text-primary">
                  политикой конфиденциальности
                </a>
              </p>
            </>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 animate-fade-in">
              <Icon name="CheckCircle" size={48} className="mx-auto mb-4 text-green-500" />
              <h2 className="text-2xl font-bold mb-2">Спасибо за подписку!</h2>
              <p className="text-gray-600">
                Мы отправили письмо с подтверждением на ваш email.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;