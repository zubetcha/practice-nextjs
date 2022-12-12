import { ParentComponent } from './ParentComponent';
import { useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

export const GrandParentComponent = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  console.log('----✨GrandParentComponent✨----');

  return (
    <div>
      <h2>✨GrandParentComponent✨ {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>GrandParentComponent</button>
      {/* {children} */}
      <ParentComponent />
    </div>
  );
};
