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
