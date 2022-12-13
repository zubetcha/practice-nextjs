import { createContext, useContext } from 'react';

const MyContext = createContext({ name: '', age: 0 });

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('!!');
  }

  return context;
};

interface Props {
  children: React.ReactNode;
  name: string;
  age: number;
}

export const MyContextProvider = ({ children, name, age }: Props) => {
  return <MyContext.Provider value={{ name, age }}>{children}</MyContext.Provider>;
};
