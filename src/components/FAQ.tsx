import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Как отслеживаются мои клиенты?",
      answer:
        "Каждый клиент привязывается к вашей уникальной реферальной ссылке при регистрации. Система автоматически отслеживает все их пополнения и начисляет вам комиссию.",
    },
    {
      question: "Когда происходят выплаты?",
      answer:
        "Выплаты происходят автоматически до 10 числа каждого месяца. Минимальная сумма для выплаты составляет 5000₽.",
    },
    {
      question: "Что если клиент перестал пополнять и вернулся?",
      answer:
        "Клиент остается привязанным к вам в течение 24 месяцев с момента регистрации. Если он вернется и снова начнет пополнять баланс, вы продолжите получать комиссию.",
    },
    {
      question: "Могу ли я рекламировать сервис?",
      answer:
        "Да, вы можете свободно рекламировать Poehali.dev любыми способами, соблюдая наши правила партнерской программы. Мы предоставляем готовые маркетинговые материалы.",
    },
    {
      question: "Какие маркетинговые материалы вы предоставляете?",
      answer:
        "Мы предоставляем баннеры различных размеров, промо-видео, описания продукта, кейсы использования и другие материалы для эффективного продвижения.",
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
            Ответы на популярные вопросы партнеров
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
