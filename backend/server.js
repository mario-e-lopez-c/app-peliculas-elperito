require("dotenv").config;
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const jwt = require("jsonwebtoken");
const registerRoute = require("./routes/register");

const app = express();
app.use(cors());
app.use(express.json());

// Configurar Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE;

if (!supabaseUrl || !supabaseKey) {
    console.error("ERROR: Supabase URL or Key is missing in .env");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// const JWT_SECRET = process.env.JWT_SECRET || "mysecret"; // Modificar en producción

//Ruta de registro
app.use("/register", registerRoute); // Usar la ruta de registro    

//Rutas de autenticación
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Backend running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});