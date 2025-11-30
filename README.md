# Desafio front-end para Target sistemas.

Este é um teste tecnico para vaga de front-end, dividido em dua etapas
um onde deve ser construido a interface parte visual, o outro deve
calcular e listar o resultado computado apartir de uma fonte de dados.


## Menu

- [O que foi solicitado no teste.](./docs/desafio.md)
- [Document rota commission.](./docs/rota-commissions.md)


# Como executar o projeto (API - target-api)

Este projeto é uma API Node.js escrita em TypeScript, utilizando Express e Mongoose.

## Pré-requisitos

- Node.js instalado (versão 18+ recomendada)
- npm instalado (vem junto com o Node)
- Docker instalado, caso deseje executar via container

---

## 1. Instalar dependências

No diretório raiz do projeto (onde está o `package.json`):

```shell
npm install
```

---

## 2. Executar em modo desenvolvimento (sem Docker)

Esse modo roda diretamente com `ts-node-dev`, recarregando o servidor ao salvar arquivos.

```shell
npm run dev

```


- O comando executa:  
  `ts-node-dev --respawn src/server.ts`
- A API ficará disponível em `http://localhost:3000` (ou porta configurada no seu `server.ts`).

---

## 3. Executar em modo produção via Docker

### 3.1. Build da imagem

```shell
npm run init
```

- Esse script executa:  
  `docker build -t target-api .`
- Será criada uma imagem Docker chamada `target-api`.

### 3.2. Subir o container

```shell
npm start
```


- Esse script executa em sequência:
  1. `npm run init`
  2. `docker run -d -p 3000:3000 target-api`
- A API rodará em background, acessível em:  
  `http://localhost:3000`.

Se quiser apenas rodar o container após já ter feito o build uma vez:

```shell
docker run -d -p 3000:3000 target-api
```

---

## 4. Parar o container Docker

Liste os containers:

```shell
docker ps
```


Encontre o `CONTAINER ID` da imagem `target-api` e pare com:

```shell
docker stop <CONTAINER_ID>
```

text

---

## 5. Scripts disponíveis

- `npm run dev`  
  Roda a API em modo desenvolvimento com `ts-node-dev` (sem Docker).

- `npm run init`  
  Faz o build da imagem Docker `target-api`.

- `npm start`  
  Builda a imagem e sobe o container na porta `3000`.
