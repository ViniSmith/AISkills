import { Container } from '../atoms/Container';
import { Menu } from '../molecules/Menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '../ui/input';

export function HomeSection() {
  return (
    <section>
      <div>
        <Menu />
        <div className="mt-16">
          <Container>
            <div className="grid grid-cols-3 gap-10">
              <div>
                <h1 className="text-5xl mb-5">
                  Conquiste a vaga dos sonhos com IA
                </h1>
                <p className="text-2xl">
                  Utilizamos inteligência artificial para analisar seu perfil e
                  a vaga desejada, criando um roteiro de estudos personalizado
                  para ajudar você a conquistar a vaga dos sonhos.
                </p>
              </div>
              <div>
                <h3 className="text-2xl mb-[50px]">Sobre você</h3>
                <div className="flex flex-col gap-10">
                  <div>
                    <span>Nível</span>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="junior">Júnior</SelectItem>
                        <SelectItem value="pleno">Pleno</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <span>Stack</span>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="frotend">Frontend</SelectItem>
                        <SelectItem value="backend">Backend</SelectItem>
                        <SelectItem value="fullstack">FullStack</SelectItem>
                        <SelectItem value="devops">DevOps</SelectItem>
                        <SelectItem value="data-science">
                          Data Science
                        </SelectItem>
                        <SelectItem value="mobile">
                          Mobile Development
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <span>Tecnologias</span>
                    <div className="grid w-full gap-2">
                      <Textarea placeholder="Quais tecnologias possui conhecimento?" />
                      <Button>Enviar</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-[50px]">Sobre a vaga</h3>
                <div className="flex flex-col gap-10">
                  <div>
                    <span>Título</span>
                    <Input type="text" />
                  </div>
                  <div>
                    <div>
                      <span>Descrição</span>
                      <Textarea/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
