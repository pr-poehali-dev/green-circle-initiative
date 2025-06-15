import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Как проверить подлинность карты?",
      answer:
        "Каждая карта проходит автоматическую проверку в системе Apple перед продажей. Вы также можете проверить баланс карты на официальном сайте Apple или в приложении App Store.",
    },
    {
      question: "Как происходит доставка?",
      answer:
        "После оплаты код карты мгновенно отправляется на ваш email. Проверьте папку спам, если письмо не пришло в течение 5 минут.",
    },
    {
      question: "Какие способы оплаты доступны?",
      answer:
        "Мы принимаем банковские карты Visa/MasterCard, СБП, ЮMoney, QIWI кошелек и другие популярные способы оплаты.",
    },
    {
      question: "Можно ли активировать карту позже?",
      answer:
        "Да, подарочные карты Apple не имеют срока действия. Вы можете активировать и использовать карту в любое время после покупки.",
    },
    {
      question: "Что делать, если карта не работает?",
      answer:
        "Если возникли проблемы с картой, обратитесь в нашу поддержку в течение 24 часов. Мы проверим карту и при необходимости предоставим замену.",
    },
    {
      question: "Можно ли вернуть карту?",
      answer:
        "Возврат возможен только в случае, если карта оказалась недействительной. Для уже активированных карт возврат не предусмотрен согласно политике Apple.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Ответы на популярные вопросы о покупке Apple Gift Cards
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
