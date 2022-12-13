import { SomeComponent } from '../../components';
import { createElement } from 'react';

// TODO: createElement

export default function JSXPage() {
  const ele = createElement('div', { a: 1, b: 'ㅎㅎ' }, ['안녕하세요']);

  console.log('[ele]', ele);

  return (
    <div>
      <h1>JSX</h1>
      <SomeComponent a={1} b='ㅎㅎ'>
        안녕하세용
      </SomeComponent>
      {/* {createElement('div', { a: 1, b: 'ㅎㅎ' }, ['안녕하세요'])} */}
      {ele}
    </div>
  );
}
