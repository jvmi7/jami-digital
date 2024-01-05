import React, { useState } from 'react';
import WindowContext from './WindowContext';

const WindowContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  return <WindowContext.Provider value={{ width, height, setWidth, setHeight }}>{children}</WindowContext.Provider>;
};

export default WindowContextProvider;
