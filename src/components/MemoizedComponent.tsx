import { memo } from 'react';

// TODO: React.memo

interface Props {
  children?: React.ReactNode;
  profile?: {
    name: string;
    age: number;
  };
  name?: string;
  age?: number;
}

export const MemoizedComponent = memo(({ name, age, children, profile }: Props) => {
  console.log('----✨MemoizedComponent✨----');

  return (
    <div>
      <h1>MemoizedComponent</h1>
      <p>{children}</p>
      <p>
        제 이름은 {name}이고, {age}살 입니당.
      </p>
      <p>
        제 이름은 {profile?.name}이고, {profile?.age}살 입니당.
      </p>
    </div>
  );
});

MemoizedComponent.displayName = 'MemoizedComponent';
