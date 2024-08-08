import Image from 'next/image';
import brasil from '@/assets/menuIcons/brasil.png';
import nightmode from '@/assets/menuIcons/night-mode.png';
import { Container } from '../atoms/Container';

export function Menu() {
  return (
    <div className="bg-white  border-b border-black h-[60px] flex items-center fixed w-full">
      <Container>
        <span className="m-auto text-2xl">AISkills</span>
        <div className="flex gap-5">
          <Image src={brasil} alt="pt-br" />
          <Image src={nightmode} alt="nightmode" />
        </div>
      </Container>
    </div>
  );
}
