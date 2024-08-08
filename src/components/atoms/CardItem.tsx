import { ReactNode } from 'react';

type Props = {
  text: String;
};
export function CardItem({ text }: Props) {
  return (
    <span className="p-2 border border-black text-center">
      {text}
    </span>
  );
}