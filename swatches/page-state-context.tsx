import React, { createContext, useContext, useState } from 'react';

// Create a context for managing the page state
const PageStateContext = createContext({
  currentPage: 'home',
  setCurrentPage: (page: page) => {
    page;
  },
  swatchIndex: 16,
  setSwatchIndex: (index: number) => {
    index;
  },
});

// Custom hook to access the page state context
export const usePageState = () => useContext(PageStateContext);

export type page = 'home' | 'mint' | 'learn';

// Provider component to wrap your application and provide the page state
export const PageStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [swatchIndex, setSwatchIndex] = useState(16);

  // Context value containing current page state and update function
  const value = {
    currentPage,
    setCurrentPage,
    swatchIndex,
    setSwatchIndex,
  };

  // Provide the context value to the children components
  return <PageStateContext.Provider value={value}>{children}</PageStateContext.Provider>;
};
