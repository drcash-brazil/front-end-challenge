# inspirational-challenge

Seja bem-vindo ao repositório do projeto iClinic, um caso de uso que deve ser implementado contendo uma versão para plataforma web. Obrigado por participar do desafio da Dr.Cash! Estamos muito contentes pelo seu primeiro passo para fazer parte de um time excepcional.

## Afinal, o que é esse desafio?

Primeiramente é importante se atentar aos pilares da Dr.Cash, seguindo metodologias de desenvolvimento ágil.

- [Transparência] - Todo momento é momento para perguntar, tirar dúvidas e conversar sobre os processos e tarefas a serem executados, comunicação em primeiro lugar, sempre.

- [Adaptabilidade] - Ofereça melhorias baseado em perspectivas e fundamentos, como também se adeque às normas impostas visando padrões já estipulados.

- [Autonomia] - Ser Autodidata, proativo e fidelidade na busca constante por conhecimento.

# Instruções

Neste momento do processo seletivo você deverá criar uma fork deste projeto e desenvolver em cima dele. Nos encontraremos ao fim do seu desenvolvimento para você nos contar como foi resolver o teste, quais os caminhos que você seguiu na organização do código, as bibliotecas utilizadas e também nos trazer feedbacks para que possamos melhorar cada vez mais.

Não existe um gabarito para este teste técnico, as decisões tomadas são particulares e variam de pessoa para pessoa, desde que alcance o objetivo final. Seja criativo(a) e nos surpreenda.

Pensamos muito em tornar esse teste uma etapa tranquila e que você esteja confortável para efetuá-la, portanto daremos um prazo de alguns dias, preferencialmente com um final de semana para não interferir no seu dia a dia.


# Desafio 

O desafio é desenvolver nesta aplicação um gerenciador de redes de clínicas. Um projeto simples, que nos permitirá realizar os cadastros das redes, clínicas e funcionários, como também realizar as devidas associações de clínicas em redes e funcionários à clínicas.

Esta interface deverá ser uma tela com os CRUD's das três visualizações (Clínicas, Redes e Funcionários), nos permitindo ter acesso às informações cadastrais e associar as clínicas a uma rede e os funcionários a uma clínica.

Não se preocupe, construímos algumas APIs fake´s que o ajudarão no processo, todas elas ficam em um arquivo chamado `server.js` - dentro da aplicação - prontas para uso e não devem ser alteradas.

# Requisitos

- CRUD* de redes;
- CRUD* de clínicas;
- CRD funcionários (sem update);
- Ser possível associar uma ou mais clínicas a uma rede;
- Ser possível associar um ou mais funcionários a uma clínica.

*CRUD - Create, Read, Update and Delete, ou seja, criação, leitura, edição e exclusão de registros.


# Alguns pontos para levar em consideração

- Uma rede é composta apenas por clínicas;
- Uma clínica é composta apenas por funcionários;
- Um funcionário não pode conter clínicas e/ou redes.

# O que nós esperamos do seu teste

- Alcance dos objetivos propostos;
- Layout responsivo;
- A manipulação e criação de hooks também contarão na avaliação do projeto;
- Criatividade na resolução do problema;
- Semântica, organização e componentização.

# O que nos deixaria muito animados

- Animações e transições com CSS (Atenção com a performance neste ponto 😁);
- Testes;
- Visualização da aplicação em live (AWS S3, Vercel, Firebase Hosting e etc);
- Desenvolver algum requisito a mais que se encaixe na regra.

# O que não nos deixaria felizes
 
- Se o teste não for feito por você;
- Se os requisitos mínimos não forem atendidos;
- Se algum serviço do server.js  for  manipulado/alterado sem autorização.

# Observações finais

Após fazer o fork do projeto, o processo de iniciá-lo é padrão. 
Rode os comandos

`npm i`

e depois:

`npm start`

E em poucos segundos o projeto estará rodando na porta `localhost:3000`.

Todas as nossas Apis estão no `server.js`, são serviços criados utilizando o [MirageJS](https://miragejs.com/), para auxiliar no seu desenvolvimento. Todos rodam local e se comportam como APIs tradicionais. Segue um exemplo de um das chamadas:

GET `https://localhost:3000/api/clinicas`

Abaixo tem um link com todas as rotas e o formato dos campos.

[Documentação - API Mock](https://docs.google.com/document/d/1pFGRIqrD8Hx913ky6V_7KZd0tEjVLnsjv1nTRt0OulY/edit?usp=sharing)

## Futuro

- Descreva sobre possíveis planos para este projeto, melhorias ou alterações que você realizaria em prol de aumentar a qualidade no desenvolvimento.

Infelizmente, devido a outros afazeres como faculdade, não foi possível finalizar o desenvolvimento ou executar corretamente os requisitos descritos no projeto. Um plano para se fazer melhorias ou alterações em prol de aumentar a qualidade no desenvolvimento no projeto seria:
- Tela de login.
- Melhorar a responsividade da aplicação.
- Landing page falando a respeito do iClinic. 
- Melhorar a questão do tema da aplicação, desenvolvendo temas no modo escuro e claro.
- Colocar na página principal gráficos/tabelas/demonstrativos, monstrando informações a respeito das entidades descritas no projeto (quantidade de funcionários, redes e clinicas).
- Melhorar ou até mesmo criar novos componentes. Como podemos ver no projeto, os formulários poderiam vir a ser um componente, já que por exemplo, o formulário de clínica é utilizado na página para criar nova clínica, na sidebar para visualizar todos os dados de uma clínica e também na página para editar os dados da clínica.
    
### **ATENÇÃO**

Não tente fazer o PUSH diretamente para ESTE repositório!

**ATENÇÃO**
Crie uma branch nova seguindo o seguinte padrão:
1. As iniciais do seu primeiro e último nome. Ex: Ricardo Almeida (ra)
2. Seguido de "/" 
3. Seguido de "feature"
4. Seguido de "/" 
5. Seguido de o "nome da branch"
em seguida envie um pull request para este repositório. 


O processo de Pull Request funciona da seguinte maneira:

1. Faça um fork deste repositório (não clonar direto!);
2. Faça seu projeto neste fork;
3. Commit e suba as alterações para o SEU fork;
4. Pela interface do Github, envie um Pull Request;
5. Deixe o fork público para facilitar a inspeção do código;

ATENÇÃO.
Não tente fazer o PUSH diretamente para ESTE repositório!


Boa sorte! 🤞
