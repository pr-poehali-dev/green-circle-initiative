
import Icon from "@/components/ui/icon";

interface ContactDetail {
  icon: string;
  text: string;
}

const ContactInfo = () => {
  const contactDetails: ContactDetail[] = [
    { icon: "MapPin", text: "Ленинградское шоссе, 71А, Москва" },
    { icon: "Phone", text: "+7 (495) 123-45-67" },
    { icon: "Mail", text: "info@porsche-moscow.ru" },
    { icon: "Clock", text: "Ежедневно с 9:00 до 21:00" }
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Porsche Центр Москва</h3>
      {contactDetails.map((detail, index) => (
        <div key={index} className="flex items-start mb-3">
          <Icon name={detail.icon} className="mr-2 mt-1" />
          <p>{detail.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
