import { useState } from 'react';

import { GrandParentComponent, ParentComponent, ChildComponent, GrandChildComponent } from '../../components';

export default function RerenderPage() {
  const [count, setCount] = useState(0);

  console.log('----✨RenderPage✨----');

  return (
    <div>
      <h1>✨RenderPage✨ {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>RerenderPage</button>
      <GrandParentComponent>
        {/* <ParentComponent>
          <ChildComponent>
            <GrandChildComponent />
          </ChildComponent>
        </ParentComponent> */}
      </GrandParentComponent>
    </div>
  );
}
