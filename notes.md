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
- [] Componentização (comunidades, form)
- [] Criar comunidades extras
- [] Deixar o README.md bonitão
- [] Modificar o fundo, personalizado, img

---

# Aula extra (API do GitHub)



