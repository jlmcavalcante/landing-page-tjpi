# Use Node.js v20.12 como a imagem base
FROM node:20.12 as build

# Defina o diretório de trabalho para /app
WORKDIR /app

# Copie package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o resto do código da aplicação para o contêiner
COPY . .

# Construa o aplicativo Angular
RUN npm run build --prod

# Liste o conteúdo do diretório de build (para fins de depuração)
RUN ls /app/dist/landing-page-evento-tjpi

# Use um servidor HTTP leve para servir o aplicativo Angular
FROM nginx:alpine

# Copie o aplicativo construído da etapa anterior
COPY --from=build /app/dist/landing-page-evento-tjpi /usr/share/nginx/html

# Copie o arquivo de configuração do NGINX da etapa de build
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf

# Exponha a porta 80 (padrão para HTTP)
EXPOSE 80

# Inicie o servidor web NGINX
CMD ["nginx", "-g", "daemon off;"]
