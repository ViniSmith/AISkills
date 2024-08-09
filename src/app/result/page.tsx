import { ThemeProvider } from 'next-themes';
import { ResultSection } from '../../components/organisms/ResultSection';
import { SuspenseBoundary } from '@/components/atoms/SuspenseBoundary';

export default function Result() {
  return (
    <SuspenseBoundary>
      <main className="bg-img_bg bg-no-repeat bg-center bg-cover w-full ">
        <ResultSection />
      </main>
    </SuspenseBoundary>
  );
}
