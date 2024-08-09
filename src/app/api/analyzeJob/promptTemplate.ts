export const promptTemplate = `
Informações fornecidas:

Descrição da vaga: \${jobDescription}

Informações do usuário:
Nível: \${userInfo.level}
Stack: \${userInfo.stack}
Tecnologias que o usuário domina: \${userInfo.technologies.join(', ')}

Você recebeu a descrição de uma vaga de emprego da área de tecnologia e as seguintes informações de um usuário profissional de TI:
- Nível atual de conhecimento (Iniciante, Júnior, Pleno, Sênior);
- Stack atual (Frontend, Backend, Fullstack, DevOps, Data Science, Mobile, Development, Game Development, Embedded Systems, Cloud Engineering, Cybersecurity, AI/Machine Learning, Database Administration, Blockchain Development, UI/UX Design, Site Reliability Engineering (SRE), Test Automation, Network Engineering, DevSecOps, IoT Development, AR/VR Development, Systems Architecture, Support Engineering, Software Development Lifecycle (SDLC), Product Management, Outro);
- Tecnologias que já domina.

Analise as informações da vaga juntamente com as informações do usuário. Com base nas qualificações do usuário e nos requisitos da vaga, forneça uma análise detalhada e um roteiro de estudos do que está sendo pedido na vaga que falta no candidato.

Análise da vaga (essas informações serão analisadas apenas da vaga de emprego, não leve em consideração as informações do usuário):
- O nível necessário que foi pedido;
- A Stack necessária que foi pedida;
- Tecnologias requeridas na vaga.

O roteiro de estudos deve ser composto por vários módulos, onde cada módulo aborda uma tecnologia ou requisito que não esteja incluso na informação fornecida "Tecnologias que o usuário domina" e cada módulo deve conter uma lista de passos que o usuário deve seguir para adquirir o conhecimento necessário para dominar o requisito do respectivo módulo. 
Para criar esse roteiro, leve em conta todas as tecnologias que o usuário já domina para que não haja redundância e leve em consideração o nível de senioridade do usuário, informação fornecida nomeada de "nível". Os passos devem ser bem pensados e detalhados, sem limites de passos por módulo, use quantos passos forem necessários para guiar o usuário para que ele aprenda a atividade do módulo. Também sem limites para quantidade de módulos, crie módulos suficientes para suprir o que é requisitado na vaga.
Certifique-se de cobrir todos os aspectos relevantes e fornecer instruções extremamente detalhadas. 
Esse roteiro deve ser um passo a passo completo de tudo que o usuário precisa aprender para dominar aquela tecnologia ou requisito. 
Não inclua no roteiro nenhuma Tecnologia que o usuário já domine, com exceção de frameworks ou bibliotecas.
As informações dadas no passo a passo do roteiro de estudos devem se parecer com isso para que forneçam tudo o que o usuário precisa:

"Módulo 1: JavaScript
Introdução ao JavaScript, Variáveis e escopo, Tipos de dados e estruturas de controle, Funções e objetos, Outros passos...

Módulo 2: React
Fundamentos do React, Componentes e props, Estado e ciclo de vida, Gerenciamento de estado com Redux, Outros passos...

Outros módulos...
"

Essa análise deve seguir rigorosamente o padrão de resposta especificado abaixo, portanto não inclua nenhuma informação adicional ou comentários fora do padrão de resposta. A resposta deve ser em formato JSON, mantendo os nomes das propriedades iguais, alterando apenas o resultado. Os locais onde você deve inserir a informação listada acima será marcada com dois colchetes "[]", identificando o inicio, qual informação deve ser incluida naquele local e o fim. Informações úteis sobre como deve ser feito a resposta será marcado com duas barras "//" e como comentários não são permitidos em JSON, não inclua eles na resposta. 

Formato de resposta:

{
    "level": "[Nível necessário descrito na vaga]",
    "stack": "[Stack necessária descrita na vaga]",
    "technologies": ["[Tecnologias necessárias descritas na vaga]" 
    //Adicione nesse array todas as tecnologias da vaga
],
    "roadmap": [
        {
            "title": "[Título do módulo relacionado à tecnologia 1]",
            "steps": ["[Descrição detalhada do primeiro passo relacionado à tecnologia 1]", "[Descrição detalhada do primeiro passo relacionado à tecnologia 2]"
        //Adicione quantos passos forem necessários
        ]
        },

        //Adicione quantos módulos forem necessários
    ]
}


Fim do padrão de resposta

`;
