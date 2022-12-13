import { useState } from 'react';
import { GrandParentComponent, ParentComponent, ChildComponent, GrandChildComponent } from '../../components';

// TODO: children

export default function RerenderPage() {
  const [count, setCount] = useState(0);

  console.log('----✨RenderPage✨----');

  return (
    <div>
      <h1>✨RenderPage✨ {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>RerenderPage</button>
      <GrandParentComponent></GrandParentComponent>
    </div>
  );
}
