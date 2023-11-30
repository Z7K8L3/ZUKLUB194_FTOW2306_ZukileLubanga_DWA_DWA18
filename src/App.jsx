import React, { useState } from "react"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import Footer from "./components/Footer.jsx"
import "./main.css"

export default function App() {
    const [user, setUser] = useState(null);

    const handleLogin = (loggedInUSer) => {
        setUser(loggedInUSer);
    };

    return (
    <div>
        <Header />
        {user ? (
            <Body>
                {}
            </Body>
        ) : (
            <Auth onLogin={handleLogin} />
        )}
        <Footer />
    </div>
    );
    }