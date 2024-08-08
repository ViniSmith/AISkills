import { CardItem } from '../atoms/CardItem';
import { Container } from '../atoms/Container';
import { Menu } from '../molecules/Menu';

export function ResultSection() {
  return (
    <section>
      <div>
        <Menu />
        <div>
          <Container>
            <div className="grid grid-cols-2 w-full gap-24 mt-[120px]">
              <div>
                <h1 className="text-5xl mb-24">Seu roteiro de estudos</h1>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-xl">Nível desejado</span>
                      <CardItem text="Pleno" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl">Stack desejada</span>
                      <CardItem text="Pleno" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xl">Tecnologias</span>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <CardItem text="JavaScript" />
                      <CardItem text="Java" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 mb-10">
                <div>
                  <h3 className="text-xl font-medium mb-2">Módulo 1: Java</h3>
                  <hr className="mb-4 border-black" />
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Passo 1: Introdução ao Java e sua utilização em projetos
                    </li>
                    <li>Passo 2: Variáveis e tipos de dados em Java</li>
                    <li>
                      Passo 3: Controle de fluxo e estruturas de repetição em
                      Java
                    </li>
                    <li>Passo 4: Objetos e classes em Java</li>
                    <li>Passo 5: Trabalhando com bancos de dados em Java</li>
                    <li>Passo 6: Desenvolvimento de aplicações web com Java</li>
                    <li>
                      Passo 7: Trabalhando com o framework Spring ou outro
                      popular framework Java
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Módulo 1: Java</h3>
                  <hr className="mb-4 border-black" />
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Passo 1: Introdução ao Java e sua utilização em projetos
                    </li>
                    <li>Passo 2: Variáveis e tipos de dados em Java</li>
                    <li>
                      Passo 3: Controle de fluxo e estruturas de repetição em
                      Java
                    </li>
                    <li>Passo 4: Objetos e classes em Java</li>
                    <li>Passo 5: Trabalhando com bancos de dados em Java</li>
                    <li>Passo 6: Desenvolvimento de aplicações web com Java</li>
                    <li>
                      Passo 7: Trabalhando com o framework Spring ou outro
                      popular framework Java
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Módulo 1: Java</h3>
                  <hr className="mb-4 border-black" />
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Passo 1: Introdução ao Java e sua utilização em projetos
                    </li>
                    <li>Passo 2: Variáveis e tipos de dados em Java</li>
                    <li>
                      Passo 3: Controle de fluxo e estruturas de repetição em
                      Java
                    </li>
                    <li>Passo 4: Objetos e classes em Java</li>
                    <li>Passo 5: Trabalhando com bancos de dados em Java</li>
                    <li>Passo 6: Desenvolvimento de aplicações web com Java</li>
                    <li>
                      Passo 7: Trabalhando com o framework Spring ou outro
                      popular framework Java
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Módulo 1: Java</h3>
                  <hr className="mb-4 border-black" />
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      Passo 1: Introdução ao Java e sua utilização em projetos
                    </li>
                    <li>Passo 2: Variáveis e tipos de dados em Java</li>
                    <li>
                      Passo 3: Controle de fluxo e estruturas de repetição em
                      Java
                    </li>
                    <li>Passo 4: Objetos e classes em Java</li>
                    <li>Passo 5: Trabalhando com bancos de dados em Java</li>
                    <li>Passo 6: Desenvolvimento de aplicações web com Java</li>
                    <li>
                      Passo 7: Trabalhando com o framework Spring ou outro
                      popular framework Java
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
