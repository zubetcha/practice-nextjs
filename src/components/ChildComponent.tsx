import { GrandChildComponent } from './GrandChildComponent';
import { useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

// TODO: children

export const ChildComponent = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  console.log('----✨ChildComponent✨----');

  return (
    <div>
      <h4>✨ChildComponent✨ {count}</h4>
      <button onClick={() => setCount((prev) => prev + 1)}>ChildComponent</button>
      <GrandChildComponent />
      {/* {children} */}
    </div>
  );
};
