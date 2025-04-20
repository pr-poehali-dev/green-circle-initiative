
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Массив с частыми вопросами
const faqItems = [
  {
    question: "Как активировать Apple Gift Card?",
    answer: "Чтобы активировать подарочную карту, зайдите в App Store или iTunes Store, войдите в свой Apple ID, нажмите на свой аватар и выберите 'Использовать подарочную карту или код'. Введите код, который вы получили от нас по email, и нажмите 'Активировать'."
  },
  {
    question: "Сколько времени занимает доставка кода?",
    answer: "Доставка кода происходит автоматически и практически мгновенно после подтверждения оплаты. Вы получите код на указанный при покупке email-адрес в течение нескольких минут."
  },
  {
    question: "Что можно купить за Apple Gift Card?",
    answer: "С помощью Apple Gift Card вы можете приобрести приложения, игры, подписки (включая Apple Music, Apple TV+, Apple Arcade, iCloud+), внутриигровые покупки, фильмы, книги и многое другое в экосистеме Apple."
  },
  {
    question: "Есть ли срок действия у подарочной карты?",
    answer: "Нет, подарочные карты Apple не имеют срока действия. Вы можете активировать и использовать их в любое удобное для вас время."
  },
  {
    question: "Можно ли вернуть деньги за неиспользованную карту?",
    answer: "Согласно нашей политике, мы не осуществляем возврат денежных средств за приобретенные подарочные карты. Однако, если у вас возникли проблемы с активацией, наша служба поддержки всегда готова помочь."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#222]">
          Часто задаваемые вопросы
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-4 hover:bg-gray-50 text-left font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Не нашли ответ на свой вопрос?
          </p>
          <a 
            href="mailto:support@applegiftcards.ru" 
            className="text-[#8B5CF6] font-medium hover:underline"
          >
            Напишите нам
          </a>
        </div>
      </div>
    </section>
  );
};
