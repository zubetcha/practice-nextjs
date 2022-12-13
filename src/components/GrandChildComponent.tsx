import { useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

// TODO: children

export const GrandChildComponent = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  console.log('----✨GrandChildComponent✨----');

  return (
    <div>
      <h5>✨GrandChildComponent✨ {count}</h5>
      <button onClick={() => setCount((prev) => prev + 1)}>GrandChildComponent</button>
    </div>
  );
};
