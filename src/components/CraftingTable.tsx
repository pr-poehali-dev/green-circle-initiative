import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type ItemType = {
  id: string;
  name: string;
  image: string;
};

type CraftingRecipe = {
  pattern: (string | null)[][];
  result: ItemType;
  count: number;
};

const ITEMS: ItemType[] = [
  { id: 'wood', name: 'Дерево', image: '/wood.png' },
  { id: 'stone', name: 'Камень', image: '/stone.png' },
  { id: 'iron', name: 'Железо', image: '/iron.png' },
  { id: 'stick', name: 'Палка', image: '/stick.png' },
  { id: 'diamond', name: 'Алмаз', image: '/diamond.png' },
];

const RECIPES: CraftingRecipe[] = [
  {
    pattern: [
      ['wood', 'wood', null],
      ['wood', 'wood', null],
      [null, null, null],
    ],
    result: { id: 'crafting_table', name: 'Верстак', image: '/crafting_table.png' },
    count: 1,
  },
  {
    pattern: [
      ['wood', null, null],
      ['wood', null, null],
      [null, null, null],
    ],
    result: { id: 'stick', name: 'Палка', image: '/stick.png' },
    count: 4,
  },
  {
    pattern: [
      [null, 'wood', null],
      [null, 'stick', null],
      [null, 'stick', null],
    ],
    result: { id: 'wooden_shovel', name: 'Деревянная лопата', image: '/wooden_shovel.png' },
    count: 1,
  },
];

const CraftingTable = () => {
  const [grid, setGrid] = useState<(ItemType | null)[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
  const [craftResult, setCraftResult] = useState<{ item: ItemType; count: number } | null>(null);

  // Используем эмодзи как fallback если изображения не загружены
  const itemEmojis: Record<string, string> = {
    'wood': '🪵',
    'stone': '🪨',
    'iron': '⚙️',
    'stick': '🥢',
    'diamond': '💎',
    'crafting_table': '🧰',
    'wooden_shovel': '🥄',
  };

  const addItemToGrid = (rowIndex: number, colIndex: number) => {
    if (!selectedItem) return;

    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = selectedItem;
    setGrid(newGrid);
    
    checkRecipes(newGrid);
  };

  const removeItemFromGrid = (rowIndex: number, colIndex: number) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = null;
    setGrid(newGrid);
    
    checkRecipes(newGrid);
  };

  const checkRecipes = (currentGrid: (ItemType | null)[][]) => {
    for (const recipe of RECIPES) {
      let matches = true;
      
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const recipeItem = recipe.pattern[i][j];
          const gridItem = currentGrid[i][j];
          
          if (recipeItem === null && gridItem === null) continue;
          if (recipeItem === null && gridItem !== null) {
            matches = false;
            break;
          }
          if (recipeItem !== null && gridItem === null) {
            matches = false;
            break;
          }
          if (recipeItem !== null && gridItem !== null && recipeItem !== gridItem.id) {
            matches = false;
            break;
          }
        }
        if (!matches) break;
      }
      
      if (matches) {
        setCraftResult({ item: recipe.result, count: recipe.count });
        return;
      }
    }
    
    setCraftResult(null);
  };

  const clearGrid = () => {
    setGrid([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    setCraftResult(null);
  };

  const takeResult = () => {
    if (craftResult) {
      alert(`Вы скрафтили: ${craftResult.item.name} x${craftResult.count}`);
      clearGrid();
    }
  };

  return (
    <div className="minecraft-card w-full max-w-md mx-auto">
      <h2 className="text-2xl font-minecraft text-center mb-4">Верстак</h2>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-4 justify-between">
        <div className="crafting-grid bg-minecraft-wood p-2 border-2 border-black">
          {grid.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="flex">
              {row.map((cell, colIndex) => (
                <div 
                  key={`cell-${rowIndex}-${colIndex}`}
                  className="w-16 h-16 bg-minecraft-dirt border-2 border-black m-1 flex items-center justify-center cursor-pointer hover:bg-minecraft-dirt/70"
                  onClick={() => cell ? removeItemFromGrid(rowIndex, colIndex) : addItemToGrid(rowIndex, colIndex)}
                >
                  {cell && (
                    <div className="w-12 h-12 flex items-center justify-center">
                      {cell.image ? (
                        <img 
                          src={cell.image} 
                          alt={cell.name} 
                          className="w-full h-full object-contain" 
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = itemEmojis[cell.id] || '❓';
                          }}
                        />
                      ) : (
                        <span className="text-2xl">{itemEmojis[cell.id] || '❓'}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="arrow-and-result flex flex-col items-center justify-center">
          <div className="arrow text-2xl mb-2">➡️</div>
          <div 
            className="result-slot w-16 h-16 bg-minecraft-dirt border-2 border-black flex items-center justify-center cursor-pointer"
            onClick={takeResult}
          >
            {craftResult && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-12 h-12 flex items-center justify-center relative">
                      {craftResult.item.image ? (
                        <img 
                          src={craftResult.item.image} 
                          alt={craftResult.item.name} 
                          className="w-full h-full object-contain" 
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = itemEmojis[craftResult.item.id] || '❓';
                          }}
                        />
                      ) : (
                        <span className="text-2xl">{itemEmojis[craftResult.item.id] || '❓'}</span>
                      )}
                      {craftResult.count > 1 && (
                        <span className="absolute bottom-0 right-0 bg-black/50 text-white text-xs px-1 rounded">
                          {craftResult.count}
                        </span>
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{craftResult.item.name} x{craftResult.count}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </div>
      
      <div className="inventory-items flex flex-wrap gap-2 mt-4 justify-center">
        {ITEMS.map((item) => (
          <TooltipProvider key={item.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div 
                  className={`w-12 h-12 bg-minecraft-dirt border-2 ${selectedItem?.id === item.id ? 'border-minecraft-green' : 'border-black'} flex items-center justify-center cursor-pointer hover:bg-minecraft-dirt/70`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item.image ? (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-8 h-8 object-contain" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = itemEmojis[item.id] || '❓';
                      }}
                    />
                  ) : (
                    <span className="text-2xl">{itemEmojis[item.id] || '❓'}</span>
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      
      <div className="flex justify-between mt-4">
        <button 
          className="minecraft-btn bg-red-700"
          onClick={clearGrid}
        >
          Очистить
        </button>
        <div className="flex items-center">
          {selectedItem ? (
            <span className="font-minecraft">Выбрано: {selectedItem.name}</span>
          ) : (
            <span className="font-minecraft">Выберите предмет</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CraftingTable;