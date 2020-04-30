import { useState, useContext, createContext, Dispatch, SetStateAction, Context } from 'react';

export type HookContext<T> = Context<[T, Dispatch<SetStateAction<T>>]>;

export function createHookContext<T>(defaultValue: T): HookContext<T> {
  return createContext<[T, Dispatch<SetStateAction<T>>]>([defaultValue, () => {}]);
}

export function createHookContextProvider<T>(defaultValue: T, Context: HookContext<T>): React.SFC {
  return ({ children }) => {
    return (
      <Context.Provider value={useState(defaultValue)}>
        {children}
      </Context.Provider>
    );
  }
}
