export type ItemType = {
  id: string;
  name: string;
  image: string;
};

export type CraftingRecipe = {
  pattern: (string | null)[][];
  result: ItemType;
  count: number;
};

export type CraftingGridType = (ItemType | null)[][];

export type CraftResultType = { 
  item: ItemType; 
  count: number 
} | null;

export const itemEmojis: Record<string, string> = {
  'wood': '🪵',
  'stone': '🪨',
  'iron': '⚙️',
  'stick': '🥢',
  'diamond': '💎',
  'crafting_table': '🧰',
  'wooden_shovel': '🥄',
};
