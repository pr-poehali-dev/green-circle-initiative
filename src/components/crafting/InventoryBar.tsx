import { ItemType } from './types';
import { ItemSlot } from './ItemSlot';

type InventoryBarProps = {
  items: ItemType[];
  selectedItem: ItemType | null;
  onItemSelect: (item: ItemType) => void;
};

const InventoryBar = ({ items, selectedItem, onItemSelect }: InventoryBarProps) => {
  return (
    <div className="inventory-items flex flex-wrap gap-2 mt-4 justify-center">
      {items.map((item) => (
        <ItemSlot 
          key={item.id}
          item={item} 
          selected={selectedItem?.id === item.id}
          onClick={() => onItemSelect(item)}
        />
      ))}
    </div>
  );
};

export default InventoryBar;
