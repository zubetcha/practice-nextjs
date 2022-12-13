import { memo } from 'react';
import { BComponent } from './BComponent';

export const AComponent = memo(() => {
  console.log('----✨AComponent✨----');

  return (
    <div>
      <h2>AComponent</h2>
      <BComponent />
    </div>
  );
});

AComponent.displayName = 'AComponent';
