import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ItemType, itemEmojis } from './types';

type ItemSlotProps = {
  item: ItemType | null;
  selected?: boolean;
  count?: number;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
  showTooltip?: boolean;
};

export const ItemSlot = ({
  item,
  selected = false,
  count = 0,
  onClick,
  size = 'md',
  showTooltip = true,
}: ItemSlotProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
  
  const imgSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const SlotContent = () => (
    <div 
      className={`${sizeClasses[size]} bg-minecraft-dirt border-2 ${selected ? 'border-minecraft-green' : 'border-black'} flex items-center justify-center cursor-pointer hover:bg-minecraft-dirt/70`}
      onClick={onClick}
    >
      {item && (
        <div className={`${item.id === 'crafting_table' ? imgSizeClasses[size] : imgSizeClasses[size]} flex items-center justify-center relative`}>
          {item.image ? (
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-contain" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = itemEmojis[item.id] || '❓';
              }}
            />
          ) : (
            <span className="text-2xl">{itemEmojis[item.id] || '❓'}</span>
          )}
          {count > 1 && (
            <span className="absolute bottom-0 right-0 bg-black/50 text-white text-xs px-1 rounded">
              {count}
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (!showTooltip || !item) {
    return <SlotContent />;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <SlotContent />
        </TooltipTrigger>
        <TooltipContent>
          <p>{item.name}{count > 1 ? ` x${count}` : ''}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
