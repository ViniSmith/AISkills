'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from '../atoms/Container';
import { Menu } from '../molecules/Menu';
import { CardItem } from '../atoms/CardItem';

type Result = {
  level: string;
  stack: string;
  technologies: string[];
  roadmap: {
    title: string;
    steps: string[];
  }[];
};

export function ResultSection() {
  const searchParams = useSearchParams();
  const [resultData, setResultData] = useState<Result | null>(null);

  useEffect(() => {
    const data = searchParams.get('data');
    if (data) {
      console.log(data);
      const data2 = JSON.stringify(decodeURIComponent(data));
      const data3 = JSON.parse(data2);
      const parsedData: Result = JSON.parse(decodeURIComponent(data));
      setResultData(parsedData);
      console.log(parsedData);
    }
  }, [searchParams]);

  if (!resultData) {
    return (
      <section>
        <div>
          <Menu />
          <Container>
            <h1 className="text-5xl mt-[120px]">Carregando...</h1>
          </Container>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div>
        <Menu />
        <div>
          <Container>
            <div className="grid grid-cols-2 w-full gap-24 mt-[120px]">
              <div>
                <h1 className="text-5xl mb-24">{resultData.level}</h1>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-xl">Nível desejado</span>
                      <CardItem text={resultData.level} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl">Stack desejada</span>
                      <CardItem text={resultData.stack} />
                    </div>
                  </div>
                  <div>
                    <span className="text-xl">Tecnologias</span>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {resultData.technologies.map(
                        (tech: string, index: number) => (
                          <CardItem key={index} text={tech} />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 mb-10">
                {resultData.roadmap.map(
                  (
                    module: { title: string; steps: string[] },
                    index: number
                  ) => (
                    <div key={index}>
                      <h3 className="text-xl font-medium mb-2">{`Módulo ${
                        index + 1
                      }: ${module.title}`}</h3>
                      <hr className="mb-4 border-black" />
                      <ul className="list-disc space-y-2 pl-5">
                        {module.steps.map((step: string, stepIndex: number) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
