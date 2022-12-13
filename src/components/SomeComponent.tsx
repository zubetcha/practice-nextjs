import React, { ForwardedRef } from 'react';

interface Props {
  children?: React.ReactNode;
  a: number;
  b: string;
}

export const SomeComponent = ({ children, a, b }: Props) => {
  console.log('----✨SomeComponent✨----');

  return <div>{children}</div>;
};
