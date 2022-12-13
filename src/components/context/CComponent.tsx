import { memo } from 'react';

export const CComponent = memo(() => {
  console.log('----✨CComponent✨----');

  return (
    <div>
      <h4>CComponent</h4>
    </div>
  );
});

CComponent.displayName = 'CComponent';
