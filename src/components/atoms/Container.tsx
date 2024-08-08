import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export function Container({ children }: Props) {
  return (
    <div className="container mx-auto flex justify-between items-center">
      {children}
    </div>
  );
}
