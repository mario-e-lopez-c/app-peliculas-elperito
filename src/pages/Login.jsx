import { useState } from "react"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function Login() {
    const [email, setEmail] =useState("");
    const [password, setPassword]= useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if(!response.ok) {
                throw new Error(data.error || "Login failed");
            }

            // Guardar el token en localStorage
            localStorage.setItem("token", data.token);

            console.log("Login Successful!", data);
            navigate("/home");
        }catch (err){
            setError(err.message);
        }
        // if(email === "marioelopezc@gmail.com" && password === "pw12"){
        //     console.log("Login Successful!");
        //     navigate("/home");
        // } else {
        //     setError("Invalid email or password")
        // }
        // console.log("Loggin in with:", { email, password});
    }

    return (
        <div className="flex h-screen items-center justify-center bg-blue-200 rounded-lg">
            <div className="space-y-6 text-center">
                <h1 className="text-3xl font-bold mb-6">🎬 Popular Movies</h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-lg shadow-md w-96 space-y-4"
                >
                    <h2 className="text-2xl font-bold text-center">Login</h2>

                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required   
                        />

                    </div>
                    <div className="space-y-2">
                        <Label>Password</Label>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button type="submit" className="w-full">
                        Login
                    </Button>

                    <p className="text-center text-sm">
                        Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>
                    </p>
                </form>
            </div>       
        
        </div>
    )
}