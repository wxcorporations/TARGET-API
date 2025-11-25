# Imagem base
FROM node:20

# Diretório de trabalho
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia os arquivos da aplicação
COPY . .

# Compila TypeScript (se precisar gerar build)
# RUN npm run build

# Porta exposta
EXPOSE 3000

# Comando de inicialização (ajuste para o seu projeto)
CMD [ "npm", "run", "dev" ]
