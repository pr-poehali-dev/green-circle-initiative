
import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  const contactDetails = [
    {
      title: "Адрес шоурума",
      content: "ул. Автомобильная, 911, Москва, Россия",
      icon: "MapPin"
    },
    {
      title: "Телефон",
      content: "+7 (495) 911-91-11",
      icon: "Phone"
    },
    {
      title: "Электронная почта",
      content: "info@porsche-moscow.ru",
      icon: "Mail"
    },
    {
      title: "Часы работы",
      content: "Ежедневно с 9:00 до 21:00",
      icon: "Clock"
    }
  ];

  return (
    <div className="p-8 bg-white rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Контактная информация</h3>
      
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-4 mt-1 text-primary">
              <Icon name={item.icon} size={20} />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="font-medium text-gray-900 mb-3">Мы в социальных сетях</h4>
        <div className="flex space-x-4">
          {["Instagram", "Facebook", "Twitter", "Youtube"].map((platform, index) => (
            <a 
              key={index}
              href="#" 
              className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Icon name={platform} size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
