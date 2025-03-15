import { useState } from "react"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [email, setEmail] =useState("");
    const [password, setPassword]= useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email === "marioelopezc@gmail.com" && password === "pw12"){
            console.log("Login Successful!");
            navigate("/home");
        } else {
            setError("Invalid email or password")
        }
        console.log("Loggin in with:", { email, password});
    }

    return (
        <div className="flex h-screen items-center justify-center bg-blue-200 rounded-lg">
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

                <Button type="submit" className="w-full">
                    Login
                </Button>

            </form>
        </div>
    )
}