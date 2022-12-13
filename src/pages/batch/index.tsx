import { flushSync } from 'react-dom';
import { useState } from 'react';

export default function BatchPage() {
  console.log('----✨BatchPage✨----');

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // TODO: Automatice Batch
  const onClickAutomaticBatch = () => {
    setCount1(count1 + 1);
    setCount2(count2 + 1);
    setCount3(count3 + 1);
  };

  // TODO: Flush Sync
  const onClickFlushSync = () => {
    flushSync(() => {
      setCount1(count1 + 1);
    });
    flushSync(() => {
      setCount2(count2 + 1);
    });
    flushSync(() => {
      setCount3(count3 + 1);
    });
  };

  return (
    <div>
      <h4>count1: {count1}</h4>
      <h4>count2: {count2}</h4>
      <h4>count3: {count3}</h4>
      <button onClick={onClickAutomaticBatch}>Automatic Batching</button>
      <button onClick={onClickFlushSync}>Flush Sync</button>
    </div>
  );
}
