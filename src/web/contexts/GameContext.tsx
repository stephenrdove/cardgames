import {
  useState,
} from 'react';
import { createHookContext } from './base';

export const GameContext = createHookContext<Game>(null as Game);

export const GameContextProvider: React.FC = ({ children }) => (
  <GameContext.Provider value={useState(null as Game)}>
    {children}
  </GameContext.Provider>
);
