
import { ReactNode } from "react";

interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default FooterColumn;
