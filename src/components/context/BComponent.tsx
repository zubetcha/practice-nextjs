import { useMyContext } from '../../context';
import { CComponent } from './CComponent';

export const BComponent = () => {
  console.log('----✨BComponent✨----');

  const { name, age } = useMyContext();

  return (
    <div>
      <h3>BComponent</h3>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <CComponent />
    </div>
  );
};
