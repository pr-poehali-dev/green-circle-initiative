import { CraftResultType } from './types';
import { ItemSlot } from './ItemSlot';

type CraftingResultProps = {
  result: CraftResultType;
  onTakeResult: () => void;
};

const CraftingResult = ({ result, onTakeResult }: CraftingResultProps) => {
  return (
    <div className="arrow-and-result flex flex-col items-center justify-center">
      <div className="arrow text-2xl mb-2">➡️</div>
      <ItemSlot 
        item={result?.item || null} 
        count={result?.count || 0}
        onClick={onTakeResult}
        size="lg"
        showTooltip={result !== null}
      />
    </div>
  );
};

export default CraftingResult;
