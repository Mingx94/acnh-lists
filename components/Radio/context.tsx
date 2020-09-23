import { ReactElement } from 'react';

import { createContext, useContextSelector } from 'use-context-selector';

interface IContext<T extends OptionValue> {
  name: string;
  onChange: (value: T) => void;
  value: T;
}

const Context = createContext<IContext<any>>({
  name: '',
  onChange: () => {},
  value: ''
});

type Props<T extends OptionValue> = {
  name: string;
  value: T;
  onChange: (value: T) => void;
  children: ReactElement<any>;
};

export const RadioProvider = <T extends OptionValue>({
  name,
  value,
  onChange,
  children
}: Props<T>) => (
  <Context.Provider value={{ name, value, onChange }}>
    {children}
  </Context.Provider>
);

export const useName = () => useContextSelector(Context, (v) => v.name);
export const useOnChange = () => useContextSelector(Context, (v) => v.onChange);
export const useValue = () => useContextSelector(Context, (v) => v.value);
