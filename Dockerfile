# Use Node.js v14 as the base image
FROM node:20.12 as build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

RUN npm run build --prod
#adicionar apenas em prod

RUN ls /app/dist/landing-page-evento-tjpi

# Use a lightweight HTTP server to serve the built Angular app
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/dist/landing-page-evento-tjpi /usr/share/nginx/html

COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf

# Expose port 80 (default for HTTP)
EXPOSE 80

# Start the NGINX web server
CMD ["nginx", "-g", "daemon off;"]
