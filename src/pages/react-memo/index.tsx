import { useState, useMemo, useCallback } from 'react';
import { MemoizedComponent } from '../../components/MemoizedComponent';

// TODO: props의 데이터 타입
// TODO: useMemo & useCallback

export default function ReactMemoPage() {
  console.log('----✨ReactMemoPage✨----');

  const [count, setCount] = useState(0);

  const profile = useMemo(() => {
    return {
      name: '정주혜',
      age: 1000,
    };
  }, []);

  const profile2 = {
    name: '정주혜',
    age: 1000,
  };

  const onClick = useCallback(() => {}, []);

  const name = '정주혜';
  const age = 1000;

  return (
    <div>
      <h1>ReactMemoPage</h1>
      <button onClick={() => setCount(count + 1)}>React.memo</button>
      <MemoizedComponent name={name} age={age}></MemoizedComponent>
    </div>
  );
}
