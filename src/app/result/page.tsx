import { ThemeProvider } from 'next-themes';
import { ResultSection } from '../../components/organisms/ResultSection';

export default function Result() {
  return (
    <ThemeProvider>
      <main className="bg-img_bg bg-no-repeat bg-center bg-cover w-full ">
        <ResultSection />
      </main>
    </ThemeProvider>
  );
}
