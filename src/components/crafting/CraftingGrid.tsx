import { ItemType } from './types';
import { ItemSlot } from './ItemSlot';

type CraftingGridProps = {
  grid: (ItemType | null)[][];
  onCellClick: (rowIndex: number, colIndex: number) => void;
};

const CraftingGrid = ({ grid, onCellClick }: CraftingGridProps) => {
  return (
    <div className="crafting-grid bg-minecraft-wood p-2 border-2 border-black">
      {grid.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} className="flex">
          {row.map((cell, colIndex) => (
            <div key={`cell-${rowIndex}-${colIndex}`} className="m-1">
              <ItemSlot 
                item={cell} 
                onClick={() => onCellClick(rowIndex, colIndex)}
                size="lg" 
                showTooltip={cell !== null}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CraftingGrid;
