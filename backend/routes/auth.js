const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { createClient } = require("@supabase/supabase-js");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE);

// Ruta de login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar usuario en Supabase
        const { data: users, error } = await supabase
            .from("users")
            .select("*")
            .eq("email", email);

        if (error || !users.length) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const user = users[0];

        // Comparar contraseñas
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        // Generar token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ token, user: { id: user.id, email: user.email } });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
