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

- Criar a nossa página de Login
- Roteamento com Next.js
- Como funciona o redirecionamento de páginas
- Formulários com gerenciamento do estado do input
- Salvar cookies com o padrão JWT para autenticar nossa página
- Decodificar o nosso token para mostrar a nossa Home apenas para usuários autenticados

---

## Desafios

- [] Tema claro e tema escuro
- [] Sorte do dia
- [] Profile Bar -> pegar localidade do GitHub
- [] Box de quem eu sigo -> pegar via GitHub
- [] "Ver todos" -> aumentar box
- [] Fazer o logout da aplicação
- [] Mensagem de feedback quando não conseguir logar na aplicação
- [] Criar página de perfil do usuário (usar rotas Next.js com id)
- [] Criar página de comunidade (usar rotas Next.js com id)
- [] Deixar o README.md bonitão

---

[Repositório oficial](https://github.com/alura-challenges/alurakut/)
