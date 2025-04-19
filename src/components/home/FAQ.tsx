import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Как активировать Apple Gift Card?",
    answer: "Для активации карты откройте App Store на своем устройстве, войдите в свой аккаунт Apple ID, нажмите на фото профиля и выберите «Пополнить счет». Введите код с подарочной карты и нажмите «Погасить»."
  },
  {
    question: "Как долго действует Apple Gift Card?",
    answer: "Apple Gift Cards не имеют срока действия. Вы можете использовать ее в любой момент после покупки."
  },
  {
    question: "Можно ли использовать карту частями?",
    answer: "Да, сумма будет зачислена на ваш счет Apple ID и вы сможете использовать эти средства постепенно для разных покупок."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 bg-apple-gray">
      <div className="apple-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-apple-darkgray max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о Apple Gift Cards
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-apple-darkgray">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <Link to="/faq" className="text-apple-blue font-medium hover:underline">
              Посмотреть все вопросы →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;