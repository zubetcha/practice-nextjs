import { useState } from 'react';
import { GrandParentComponent, ParentComponent, ChildComponent, GrandChildComponent } from '../../components';

// TODO: children

export default function RerenderPage() {
  const [count, setCount] = useState(0);

  console.log('----✨RerenderPage✨----');

  return (
    <div>
      <h1>✨RerenderPage✨ {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>RerenderPage</button>
      <GrandParentComponent>
        <ParentComponent>
          <ChildComponent>
            <GrandChildComponent />
          </ChildComponent>
        </ParentComponent>
      </GrandParentComponent>
    </div>
  );
}
