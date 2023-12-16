import { createContext } from 'react';
import { ScreenState } from './types';

export const GameboyContext = createContext({ screenState: ScreenState.OFF, setScreenState: (screenState: ScreenState) => {} });
