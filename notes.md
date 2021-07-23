# Aula 01

## Comandos no terminal

1. Instalar yarn e verificar versão

npm install --global yarn
yarn --version

2. Criar projeto

npx create-next-app --example with-styled-components
alurakut (ao perguntar nome do projeto)

3. Rodar projeto

yarn dev
http://localhost:3000/ (visitar url)

## Primeiros componentes

- Escolher aqueles que mais se repetem

- GlobalStyle: componente de estilos globais, como o reset, o que vai no body, etc

- usar styled components para criar a estrutura básica da Home

## Separação de pastas

> src (código fonte do projeto)
> components (elementos que irão formar pages)
> MainGrid

            index.js
        > Box
            index.js

> pages (tudo o que vira página)

    index.js
    _document.js
    _app.js

## Importar e exportar arquivos

- Os componentes devem ser exportados (export default nome-do-componente)
- E depois importados no arquivo de page a ser usado (Home, por exemplo)
- Import sem "{}" é default
- Import com "{}" importa componentes individualmente

## Usar js dentro do jsx

- {} sempre abrir e fechar chaves para inserir js

## Função map

- map pega cada item do nosso array e o modifica, retornando um novo array
- vai alterar da forma que pedirmos no retorno
- ele sempre vai retornar a mesma quantidade de itens
- o map sempre devolve / retorna a array
- o forEach não, por isso não o usamos
- pois queremos uma função que devolva um array transformado

## Herança no styled components

- no lugar de colocar styled.tag do html
- colocar entre () o componente já criado que vc quer herdar e modificar
- escrever entre o `` apenas o código que deseja modificar deste pai

---

## Desafios

- [x] Pegar os dados da API do GitHub e listar seus seguidores
- [x] Adicionar quão confiável, legal e sexy você é
- [x] Separar e organizar o seu código
- [x] Publicar o seu projeto
- [x] Deixar o seu projeto com a sua cara

---

# Aula 02

## preventDefault()

- é necessário porque não estamos usando server side
- não queremos que a página dê refresh após o form seja enviado
- pois senão nossos dados somem
- queremos guardar isso no estado da página
- ela só acontece enquanto o usuário está fazendo
- a alteração em js

---

## Desafios

- [x] Fazer aparecer foto e nome do usuário no menu mobile
- [x] Componentização (comunidades, form)
- [x] Criar comunidades extras
- [x] Modificar o fundo, personalizado, img

---

# Aula 03

- cms é um gerenciador de conteúdo
- vamos usar para persistir as comunidades

## fetch api

- consumir dados de api com fetch
- recebe uma promise
- then é das promises => quando está promise for resolvida, faça x
- json() converte para objeto js (json)
- isso também retorna uma promessa
- e daí começamos a trabalhar com encadeamento de promises .then() e ...
- usar o catch() para erros

fetch('url que queremos acessar').then()
.json()

## useEffect()

- interceptador de qualquer evento que está acontecendo na página, pelo React
- colocando a fetch aí dentro, ela fica executando toda vez que ocorre alguma atualização
- e queremos que ele não faça isso
- e sim só carregue uma vez, quando a página for inicialmente carregada
- array de dependência [] no final do hook
- se deixar vazio, ele atualiza apenas uma vez
- ou pode colocar algo que vc quer interceptar, para assim atualizar

## DatoCMS

- criar conta e projeto
- models: definir os esqueletos dos conteúdos que você quer gerenciar
- vai prover backend padronizado

---

## Desafios

- [x] Componentização
- [x] Terminar de listar seus seguidores através da api do Github;
- [x] Adicionar suas comunidades no DatoCMS;

---

# Aula 04

- Entenderemos o que é XML e AJAX;
- Usaremos queries GraphQL para consumir os dados do DatoCMS;
- Fazer um BFF (Back-end For Front-end) para proteger nossos dados ao enviar dados para o servidor;
- Criar nossas comunidades pela interface do nosso Alurakut.

## Pegar dados DatoCMS

- Aba APIExplorer (playground)
- GraphQL
  - diferente do REST (que traz todo o conteúdo)
  - especifica o que vc quer buscar
  - trabalha com buscas em cima do protocolo HTTP
- Como acessar a nossa API
- [Tutorial](https://www.datocms.com/docs/content-delivery-api/your-first-request)

## Criar novas comunidades 

- BFF: backend for front-end
- criar com o próprio Next.js
- pasta "api" dentro de "pages"
- servidorzinho que roda as requisições que são solicitadas e depois desliga
- vamos fazer por motivos de segurança dos dados

---

## Desafios

- [x] Refatorar código api.js
- [x] Fazer os scraps

---

# Aula 05

## Roteamento via Next.js

- Criar a nossa página de Login
- Roteamento automático com Next.js (dentro da pasta pages, já colocar o arquivo com nome da rota; ex: login.js)
- Dá para fazer isso sem Next.js com React Router DOM
- useRouter é um hook do Next.js, segue conceito de single page application, dando redirecionamento sem recarregar a página do usuário (o que acontece com o window.locate.href)

## Login via JWT

- URL de login que faremos fetch: https://alurakut.vercel.app/api/login
- token respeita um padrão de compressão de informações, padrão do JWT (jason web token), uma especificação para a comunicação entre serviços de backend e front
- trabalhar com cookies no Netx.js = nookies

`yarn add nookies`

## getServerSideProps

- Next.js -> getServerSideProps: permite que, enquanto sua página está sendo montada, você decide se quer montar a página ou redirecionar o usuário
- inserir no final da Home Page a função getServerSideProps
- tudo o que eu passar de props nesta função vou poder acessar nos meus componentes
- usamos destructuring no props; ele já entende que o nome da variável é o nome da chave, então no props só coloco "githubUser" e nada mais

`yarn add jsonwebtoken`

---

## Desafios

- [x] Implementar logout da aplicação
- [x] Puxar dados API GitHub a partir do usuário que está logado

## Desafios extras

- [x] Acrescentar dados do githubUser: local e bio
- [x] Criar páginas que listam todas as comunidades e todos os amigos
- [x] "Ver todos": direcionar para as páginas acima
- [] Criar página de perfil do usuário (usar rotas Next.js com id)
- [] Criar página de comunidade (usar rotas Next.js com id)
- [] Validação do campo de login (mensagem de erro)
- [] Tema claro e tema escuro
- [] Adicionar favicon
- [] Refatorar código e pastas
- [] Deixar o README.md bonitão

---

[Repositório oficial](https://github.com/alura-challenges/alurakut/)
