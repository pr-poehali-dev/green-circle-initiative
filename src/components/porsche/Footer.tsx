
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import FooterColumn from "./FooterColumn";

interface FooterLink {
  label: string;
  href: string;
}

const Footer = () => {
  const modelLinks: FooterLink[] = [
    { label: "911", href: "#" },
    { label: "Taycan", href: "#" },
    { label: "Cayenne", href: "#" },
    { label: "Panamera", href: "#" },
    { label: "Macan", href: "#" }
  ];

  const serviceLinks: FooterLink[] = [
    { label: "Тест-драйв", href: "#" },
    { label: "Финансирование", href: "#" },
    { label: "Сервисное обслуживание", href: "#" },
    { label: "Оригинальные запчасти", href: "#" },
    { label: "Аксессуары", href: "#" }
  ];

  const socialLinks = [
    { icon: "Instagram", href: "#" },
    { icon: "Facebook", href: "#" },
    { icon: "Youtube", href: "#" },
    { icon: "Twitter", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <FooterColumn title="Porsche">
            <p className="text-gray-400">Воплощение роскоши и спортивного духа, созданное с немецкой точностью и страстью к совершенству.</p>
          </FooterColumn>
          
          <FooterColumn title="Модели">
            <ul className="space-y-2">
              {modelLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </FooterColumn>
          
          <FooterColumn title="Услуги">
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </FooterColumn>
          
          <FooterColumn title="Соцсети">
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name={social.icon} />
                </a>
              ))}
            </div>
          </FooterColumn>
        </div>
        
        <Separator className="bg-gray-700 mb-6" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Porsche. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
