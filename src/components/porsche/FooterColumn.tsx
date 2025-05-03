
import { Link } from "react-router-dom";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              to={link.href} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
