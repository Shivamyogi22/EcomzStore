import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import { useState } from "react";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        console.log("ok");
    };

    return (
        <div className={`${darkMode ? "dark" : "light"}`}>
            <div className="bg-slate-900 z-20 w-full top-0 fixed">
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>
            <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/exit" element={<Category darkMode={darkMode} />} />
            </Routes>
        </div>
    );
};

export default App;
