import React, { useState } from "react";
import {createClient} from "@supabase/supabase-js"

const supabase = createClient(
    "https://dqkvbnakiagggesftqqo.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxa3ZibmFraWFnZ2dlc2Z0cXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMjQ2MDEsImV4cCI6MjAxNjkwMDYwMX0.hTjYy4Zdl1AJtlOEUNiQ8WNJWvUBKgIPRQO7K76OU6A"
);

const Auth = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const { user, error} = await supabase.auth.signIn({
                email,
                password,
            });

            if (error) {
                console.error(error.message);
            } else {
                console.log("User signed in successfully:", user);
                onLogin(user);
            }
        } catch (error) {
            console.error("Error during login:", error.message);
        }
    };

    return (
        <>
        <h2>Login</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        </>
    );
};

export default Auth;