
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-semibold mb-6">Наши контакты</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-red-100 rounded-full p-3 mr-4">
            <Icon name="MapPin" className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Адрес</h4>
            <p className="text-gray-600">Москва, Ленинградское шоссе, 63с2</p>
            <p className="text-gray-600">Ежедневно с 9:00 до 21:00</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-red-100 rounded-full p-3 mr-4">
            <Icon name="Phone" className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Телефон</h4>
            <p className="text-gray-600">+7 (495) 123-45-67</p>
            <p className="text-gray-600">Звоните в любое удобное время</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-red-100 rounded-full p-3 mr-4">
            <Icon name="Mail" className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <p className="text-gray-600">info@porsche-club.ru</p>
            <p className="text-gray-600">Ответим в течение 2 часов</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-medium mb-3">Мы в социальных сетях</h4>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-100">
            <Icon name="Instagram" className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-100">
            <Icon name="Facebook" className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-100">
            <Icon name="Youtube" className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
