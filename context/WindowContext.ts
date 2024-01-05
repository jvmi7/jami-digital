import React from 'react';
import { Window } from '../types';

// Define the type for your context
type WindowContextType = {
  width: number;
  height: number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
};

const defaultContextValue: WindowContextType = {
  width: 0,
  height: 0,
  setWidth: () => {},
  setHeight: () => {}
};

const WindowContext = React.createContext(defaultContextValue);

export default WindowContext;
