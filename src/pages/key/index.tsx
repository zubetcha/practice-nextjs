import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// TODO: key = index
// TODO: key = duplicated
// TODO: key = unique
// TODO: key = unique every render

export default function KeyPage() {
  const [list, setList] = useState([
    {
      id: '아이언 맨',
      name: '아이언 맨',
    },
    {
      id: '캡틴 아메리카',
      name: '캡틴 아메리카',
    },
    {
      id: '윈터 솔져',
      name: '윈터 솔져',
    },
    {
      id: '닥터 스트레인지',
      name: '닥터 스트레인지',
    },
    {
      id: '토르',
      name: '토르',
    },
  ]);

  const onClickAdd = () => {
    setList((prev) => [{ id: '스파이더 맨', name: '스파이더 맨' }, ...prev]);
  };

  const onClickDelete = () => {
    setList((prev) => prev.slice(1));
  };

  const now = +new Date();
  console.log('list ', list);

  return (
    <div>
      <h1>KeyPage</h1>
      <button onClick={onClickAdd}>추가</button>
      <button onClick={onClickDelete}>삭제</button>
      <div>
        {list.map(({ name, id }, i) => (
          <div key={i}>
            <span>{name}</span>
            <span>Index: {i}</span>
            <input></input>
          </div>
        ))}
      </div>
    </div>
  );
}
