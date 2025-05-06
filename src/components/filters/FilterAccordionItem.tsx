
import React, { ReactNode } from 'react';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FilterAccordionItemProps {
  value: string;
  title: string;
  icon: string;
  badgeValue?: string | number | null;
  children: ReactNode;
}

const FilterAccordionItem: React.FC<FilterAccordionItemProps> = ({
  value,
  title,
  icon,
  badgeValue,
  children
}) => {
  return (
    <AccordionItem value={value} className="border rounded-md">
      <AccordionTrigger className="px-4 py-3 hover:no-underline data-[state=open]:bg-slate-50 rounded-t-md">
        <div className="flex justify-between w-full">
          <span className="flex items-center gap-2">
            <Icon name={icon} className="h-4 w-4 text-slate-500" />
            <span>{title}</span>
          </span>
          {badgeValue && (
            <Badge variant="secondary" className="ml-auto mr-2">
              {badgeValue}
            </Badge>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-2 px-4 pb-4">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FilterAccordionItem;
