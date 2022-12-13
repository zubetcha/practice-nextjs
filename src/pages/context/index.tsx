import { useState } from 'react';
import { AComponent } from '../../components';
import { MyContextProvider } from '../../context';

export default function ContextPage() {
  console.log('----✨ContextPage✨----');

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <MyContextProvider name={name} age={age}>
      <div>
        <h1>ContextPage</h1>
        <button onClick={() => setName('정주혜')}>name</button>
        <button onClick={() => setAge(9999)}>age</button>
        <AComponent />
      </div>
    </MyContextProvider>
  );
}
