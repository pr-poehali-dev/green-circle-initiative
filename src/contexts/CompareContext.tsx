import { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  specs: Record<string, string>;
}

interface CompareContextType {
  products: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
  isInCompare: (id: string) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addToCompare = (product: Product) => {
    setProducts((prev) => {
      if (prev.find((p) => p.id === product.id)) {
        return prev;
      }
      if (prev.length >= 4) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCompare = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCompare = () => {
    setProducts([]);
  };

  const isInCompare = (id: string) => {
    return products.some((p) => p.id === id);
  };

  return (
    <CompareContext.Provider
      value={{ products, addToCompare, removeFromCompare, clearCompare, isInCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within CompareProvider');
  }
  return context;
};
