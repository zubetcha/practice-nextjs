import { useState } from 'react';

export default function BatchPage() {
  console.log('----✨BatchPage✨----');

  const [count, setCount] = useState(0);

  const onClickAutomaticBatch = () => {};

  return (
    <div>
      <h1>Automatic Batching</h1>
      <button>WillBatchAutomatically?</button>
    </div>
  );
}
