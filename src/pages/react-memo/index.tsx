import { useState } from 'react';
import { MemoizedComponent } from '../../components/MemoizedComponent';

export default function ReactMemoPage() {
  console.log('----✨ReactMemoPage✨----');

  const [count, setCount] = useState(0);

  const profile = {
    name: '정주혜',
    age: 1000,
  };

  const name = '정주혜';
  const age = 1000;

  return (
    <div>
      <h1>ReactMemoPage</h1>
      <button onClick={() => setCount(count + 1)}>React.memo</button>
      <MemoizedComponent>안녕하세용</MemoizedComponent>
    </div>
  );
}
