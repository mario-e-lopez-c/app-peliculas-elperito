# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Steps creating the application
1. Install react-router-dom in order to use pagination
2. Create Login page, using components.
3. Install ShadCN/UI library. This library provides pre-built components that look nice. This one is built on top of Radix UI and styled with Tailwind CSS.
4. Install Supabase SDK and configure
5. Using Supabase to setup my internal DB, we have to disable RLS in order the table will be publicly readable and writable.
6. Create backend in order to create authentication with JWT.
7. Instalar en el backend express y otras dependencias necesarias:
    npm install express cors dotenv jsonwebtoken bcryptjs supabase
8. Credenciales de testeo registrados en supabase:
    -mario@gmail.com / pw:0000
    -juan@gmail.com / pw:1234
9. Se dockeriza

//////////////////////////////////////////////7

Pasos para ejecutar la aplicación

1. Clonar el repositorio

Abre una terminal y ejecuta:

git clone https://github.com/mario-e-lopez-c/app-peliculas-elperito.git

cd tu-repositorio

2. Instalar Docker y Docker Compose

Si Docker no está instalado, instálalo con los siguientes comandos:

Para Ubuntu:

sudo apt update
sudo apt install docker.io -y
sudo apt install docker-compose -y

Luego, verifica que Docker y Compose están instalados:

docker --version
docker compose version

Si docker compose no funciona, instala el plugin:

sudo apt install docker-compose-plugin -y

Asegúrate de que tu usuario pueda ejecutar Docker sin sudo:

sudo usermod -aG docker $USER
newgrp docker

3. Construir y ejecutar los contenedores

Dentro del directorio del proyecto, ejecuta:

docker compose up -d --build

Esto construirá las imágenes y ejecutará los contenedores en segundo plano.
4. Verificar los contenedores en ejecución

docker ps

Debe mostrar los contenedores de frontend, backend y base de datos corriendo.
5. Acceder a la aplicación

    Frontend: Abre un navegador y ve a http://localhost:3000
    Backend: Si quieres probarlo con Postman o en el navegador, ve a http://localhost:5000

6. Detener los contenedores

Si necesitas detener la aplicación, usa:

docker compose down

