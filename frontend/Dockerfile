# Usa Node.js para compilar la aplicación
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Usa Nginx para servir la aplicación
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto 80 para servir el frontend
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
