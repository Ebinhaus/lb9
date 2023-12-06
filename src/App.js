import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/Home'
import Info from './pages/Info'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Mychart from "./pages/MyChart";
import Myplyer from "./pages/Myplayer";
function App() {
    return (
        <div className="main">
            <BrowserRouter>
                <h1>Современная маршрутизация сайта</h1>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="info" element={<Info />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="video" element={<Myplyer />} />
                    <Route path="chart" element={<Mychart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>

    );
}
export default App;