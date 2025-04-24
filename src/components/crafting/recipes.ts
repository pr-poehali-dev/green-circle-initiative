import { CraftingRecipe, ItemType } from './types';

export const ITEMS: ItemType[] = [
  { id: 'wood', name: 'Дерево', image: '/wood.png' },
  { id: 'stone', name: 'Камень', image: '/stone.png' },
  { id: 'iron', name: 'Железо', image: '/iron.png' },
  { id: 'stick', name: 'Палка', image: '/stick.png' },
  { id: 'diamond', name: 'Алмаз', image: '/diamond.png' },
];

export const RECIPES: CraftingRecipe[] = [
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
