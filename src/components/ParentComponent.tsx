import { ChildComponent } from './ChildComponent';
import { useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

export const ParentComponent = ({ children }: Props) => {
  const [count, setCount] = useState(0);
  console.log('----✨ParentComponent✨----');

  return (
    <div>
      <h3>✨ParentComponent✨ {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>ParentComponent</button>
      {/* {children} */}
      <ChildComponent />
    </div>
  );
};
