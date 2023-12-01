import React, { useState } from "react"
// import { Route, Switch } from "react-router-dom"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import Footer from "./components/Footer.jsx"
// import Login from "./components/Login.jsx"
import "./main.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function App() {

    return (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
    );
    }