import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  Context,
} from 'react';

export type HookContext<T> = Context<[T, Dispatch<SetStateAction<T>>]>;

export function createHookContext<T>(defaultValue: T): HookContext<T> {
  return createContext<[T, Dispatch<SetStateAction<T>>]>([defaultValue, () => {}]);
}

export function createHookContextProvider<T>(
  defaultValue: T,
  HookContext: HookContext<T>,
): React.SFC {
  return ({ children }) => (
    <HookContext.Provider value={useState(defaultValue)}>
      {children}
    </HookContext.Provider>
  );
}
