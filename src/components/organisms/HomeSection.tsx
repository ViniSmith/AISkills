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
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function HomeSection() {
  const router = useRouter(); 

  const [jobDescription, setJobDescription] = useState('');
  const [userInfo, setUserInfo] = useState({
    level: '',
    stack: '',
    technologies: [] as string[],
  });

  const [newTechnology, setNewTechnology] = useState(''); 
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/analyzeJob', {
        jobDescription,
        userInfo,
      });
      setResult(response.data.result);
      router.push('/result');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('API call error:', error.response?.data || error.message);
      } else if (error instanceof Error) {
        console.error('Unexpected error:', error.message);
      } else {
        console.error('Unknown error:', error);
      }
    }
  };

  return (
    <section className="h-full">
      <div className="h-full">
        <Menu />
        <div className="h-full flex justify-center items-center">
          <Container>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
                      <Select value={userInfo.level} onValueChange={(value) => setUserInfo({ ...userInfo, level: value })}>
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
                      <Select value={userInfo.stack} onValueChange={(value) => setUserInfo({ ...userInfo, stack: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="frontend">Frontend</SelectItem>
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
                        <Textarea
                          placeholder="Faça uma lista das tecnologias que você domina separando por vírgula. Exemplo: Java, Javascript, HTML, CSS"
                          value={userInfo.technologies.join(', ')}
                          onChange={(e) => setUserInfo({ ...userInfo, technologies: e.target.value.split(',').map(tech => tech.trim()) })}
                        />
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
                      <span>Descrição</span>
                      <Textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-10">
                <Button type="submit" className="border border-black">
                  Enviar
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </div>
    </section>
  );
}
