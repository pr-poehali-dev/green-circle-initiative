import { useState } from 'react';
import { ITEMS, RECIPES } from './crafting/recipes';
import { ItemType, CraftingGridType, CraftResultType } from './crafting/types';
import CraftingGrid from './crafting/CraftingGrid';
import CraftingResult from './crafting/CraftingResult';
import InventoryBar from './crafting/InventoryBar';

const CraftingTable = () => {
  const [grid, setGrid] = useState<CraftingGridType>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);
  const [craftResult, setCraftResult] = useState<CraftResultType>(null);

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

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    if (grid[rowIndex][colIndex]) {
      removeItemFromGrid(rowIndex, colIndex);
    } else {
      addItemToGrid(rowIndex, colIndex);
    }
  };

  const checkRecipes = (currentGrid: CraftingGridType) => {
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
        <CraftingGrid grid={grid} onCellClick={handleCellClick} />
        <CraftingResult result={craftResult} onTakeResult={takeResult} />
      </div>
      
      <InventoryBar 
        items={ITEMS} 
        selectedItem={selectedItem} 
        onItemSelect={setSelectedItem} 
      />
      
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
