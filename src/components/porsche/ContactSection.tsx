
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Остались вопросы? Мы всегда на связи</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Свяжитесь с нами любым удобным способом — наши консультанты с радостью ответят на все ваши вопросы и помогут подобрать идеальный Porsche
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
