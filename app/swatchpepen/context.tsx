import { createContext, useContext, ReactNode, useState } from 'react';

import { Edition } from '@/app/swatchpepen/types';

interface SwatchpepenContextType {
  selectedItem: { edition: Edition; index: string };
  setSelectedItem: (edition: Edition, index: string) => void;
}

export const SwatchpepenContext = createContext<SwatchpepenContextType | undefined>(undefined);

interface SwatchpepenProviderProps {
  children: ReactNode;
}

export const SwatchpepenProvider = ({ children }: SwatchpepenProviderProps) => {
  const [selectedItem, setSelectedItemState] = useState<{ edition: Edition; index: string }>({
    edition: 'Twenty',
    index: '1',
  });

  const setSelectedItem = (edition: Edition, index: string) => {
    setSelectedItemState({ edition, index });
  };

  return (
    <SwatchpepenContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SwatchpepenContext.Provider>
  );
};

export const useSwatchpepen = () => {
  const context = useContext(SwatchpepenContext);
  if (!context) {
    throw new Error('useSwatchpepen must be used within a SwatchpepenProvider');
  }
  return context;
};
