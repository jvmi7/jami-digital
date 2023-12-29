import React, { useState } from 'react';
import DesktopContext from './DesktopContext';
import { Window } from '../types';

const DesktopContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [openWindows, setOpenWindows] = useState<Window[] | []>([]);
  // console.log(openWindows);

  const openWindow = (window: Window) => {
    setOpenWindows((prev) => [...prev, window]);
  };

  const closeWindow = (window: Window) => {
    setOpenWindows((prev) => {
      const newWindows = prev.filter((w) => w.urlLabel !== window.urlLabel);
      console.log(newWindows);
      return newWindows;
    });
  };

  // Function to handle window click
  const onWindowClicked = (window: Window) => {
    // bring this window to the front of the list of windows
    console.log(window);
    setOpenWindows((prev) => {
      const newWindows = prev.filter((w) => w.urlLabel !== window.urlLabel);
      return [...newWindows, window];
    });
  };

  return <DesktopContext.Provider value={{ openWindows, openWindow, closeWindow, onWindowClicked }}>{children}</DesktopContext.Provider>;
};

export default DesktopContextProvider;
