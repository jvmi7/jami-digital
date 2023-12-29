import React from 'react';
import { Window } from '../types';

// Define the type for your context
type DesktopContextType = {
  openWindows: Window[] | [];
  openWindow: (window: Window) => void;
  closeWindow: (window: Window) => void;
  onWindowClicked: (window: Window) => void;
};

const defaultContextValue: DesktopContextType = {
  openWindows: [],
  openWindow: () => {},
  closeWindow: () => {},
  onWindowClicked: () => {}
};

const DesktopContext = React.createContext(defaultContextValue);

export default DesktopContext;
