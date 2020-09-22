import { createContext, ReactElement, useContext } from 'react';

const nameContext = createContext<string>('');

type Props = {
  name: string;
  children: ReactElement<any>;
};

export const NameProvider = ({ name, children }: Props) => (
  <nameContext.Provider value={name}>{children}</nameContext.Provider>
);

export const useName = () => useContext(nameContext);
