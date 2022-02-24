
# DrChash - iClinic

A tecnologia escolhida foi ReactJs com TypeScript, por se tratar de uma aplicação SPA.
A decisão da escolha foi tomada com base em estudos e por ser uma tecnologia muito utilizada no mercado.
Além disso a reutilização de componentes auxiliam e facilitam o trabalho para organização e reutilização dos componentes.
Sendo assim o sistema tem a finalidade de cadastrar clínicas de sua rede de clientes.

## Tecnoligias Utilizadas

**Client:** ReactJS, TypeScript, Styled-Components, Axios

**Server:** Json-Server

ReactJS foi utilizado por se tratar de uma tecnolia nova e muito utilizada no mercado de trabalho

TypeScript foi utlizado para tipar os elementos e previnir possíveis bugs de compilação, vale lembrar que hoje não se programa em ReactJS sem TypeScript.

Styled-Components foi utilizado para estilização e criação de alguns componentes, por trabalhar de maneira em cascata e assim como o SASS podendo encadear os estilos alem de poder usar condicionais em estilos.

Axios foi utilizado para requisições e também por ser uma ferramenta muito popular. Hoje ela ajuda demais nas requisições assim como fecth.


## API

#### Busca de endereço a partir do CEP

```http
  https://viacep.com.br/
```

#### SERVER

```http
  Json-server
```
### Executar o Projeto

Para executar o projeto você deve primeiramente ter no node instalado em sua máquina. No caso eu estou utilizando Yarn mas os comandos também podem ser feitos via NPM

Primeiramente será necessário iniciar o servidor json-server para que o sistema utilize do "banco de dados" criado para armazenamento de clinicas.

Para isso deve-se utilizar: `yarn backend:server`

Após esse processo você esta pronto para iniciar o projeto, para isso você deverá utilizar o comando: `yarn dev`

Com isso você já esta preparado para utilizar a aplicação

### Experiência com o Projeto

Primeiramente gostaria de agradecer a oprtunidade de realizar esse desafio no qual me fez aumentar ainda mais meu conhecimento. 
Para ele utilizei algumas das minhas skills para conseguir realizar essa entrega.

Usar antes contextAPI era um desafio pois por não ter utilizado muito antes me fez aceitar esse desafio e vi seu potencial enorme para que propriedades seja distribuidas para toda a aplicação.

Também elevei meu conhecimento com relação a requisições usando Axios e também em componentização com styled-components

### Futuro
Para o futuro desse projeto vejo a criação de uma tela de login primeiramente para que cada usuário veja a cartela de clínicas clientes que apenas o pertence

Após isso vejo tambem como uma forma de melhoria seria o tempo em que a clínica faz parte de sua cartela de clientes e selecionar avisos para cada ano | mês de renovação

## Autor

- [@rodrigomoreirasantos](https://github.com/rodrigomoreirasantos)


