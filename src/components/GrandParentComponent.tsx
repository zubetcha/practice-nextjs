import { ParentComponent } from './ParentComponent';
import { useState, useMemo, useCallback } from 'react';

interface Props {
  children?: React.ReactNode;
}

// TODO: children
// TODO: useMemo

export const GrandParentComponent = ({ children }: Props) => {
  const [count, setCount] = useState(0);

  console.log('----✨GrandParentComponent✨----');

  const memoizedComponent = useMemo(() => {
    return <ParentComponent />;
  }, []);

  return (
    <div>
      <h2>✨GrandParentComponent✨ {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>GrandParentComponent</button>
      {memoizedComponent}
      {/* <ParentComponent /> */}
      {/* {children} */}
    </div>
  );
};
