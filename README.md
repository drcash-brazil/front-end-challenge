# inspirational-challenge
# Bonus:
- Tela de Splash;
- Home Page com transições e animações;
- Tratamento de erros e apresentação dos fluxos de exceção: Generic Error's e Loading's;

# App em execução

Instrua como usar e também como foi a desenvoltura mediante os processos realizados neste sistema desenvolvido, além de quais ferramentas e tecnologias o auxiliaram e por quê?

## Como executar o projeto 

1. Clone este este repositório com o comando `git clone https://github.com/Cardoso-CHM/inspirational-challenge/`
2. Execute o comando `yarn` para instalar as dependências (caso não tenha este gerenciador de pacotes efetue o download neste [link](https://yarnpkg.com/getting-started/install))
3. Execute o comando `yarn start:server` para iniciar o json-server (certifique-se que a porta 5000 esteja livre)
4. Execute o comando `yarn start` para iniciar o projeto (certifique-se que a porta 3000 esteja livre)
5. Pronto! Uma aba deverá ser aberta em seu navegador padrão com a aplicaçao rodando

## Principais frameworks usados no projeto

- Formik e Yup
> Para validar e auxiliar no controle de estado dos formulários

- react-hooks-helper
> Para auxiliar principalmente no controle de estado dos passos do formulário (Step Form), disponibilizando funções de ir até o próximo passo, voltar ao anterior, determinar o estado atual do formulário, etc.

- json-server
> Para simular uma API através de um arquivo json utilizado como mock

- axios
> Para auxiliar na realização de chamadas http

- prop-types
> Para realizar a tipagem das props dos componentes auxiliando na depuração do código através da aba console do navegador

- react-loader-spinner
> Para renderizar um componente que indica uma situação de loading na tela para uma melhor UX

- cpf-cnpj-validator
> Para formatar e validar o documento CPF

- react-confirm-alert
> Para renderizar um componente parecido com a função "confirm" do javascript, provendo um modal com a opção de continuar com a ação ou não.

## Experiência com o projeto 
Foi uma experiência bastante positiva pois tive a oportunidade de reforçar meus conhecimentos a respeito de desenvolvimento de projetos utilizando o material design e conhecer novos pacotes para auxiliar no controle de estados dos componentes como o **react-hooks-helper** que me auxiliou bastante.
  
## Futuro
- Realizar aprimoramentos na interface para garantir a responsividade adequada em outros tamanhos de tela, e não apenas na desktop full hd (1920 x 1080).
- Melhorar a home page da aplicação adicionando mais elementos descritivos sobre a plataforma.
- Adicionar transições e animações na ui provendo uma melhor experiência ao usuário.
- Utilizar um backend real para que seja possível trabalhar com rotas privadas e públicas através de autenticação JWT.

### Autor
[Arthur de Castro](https://github.com/arthurfjadecastro)