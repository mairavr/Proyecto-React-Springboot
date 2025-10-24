import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio/Inicio.jsx";
import Productos from "./pages/Productos/Productos.jsx";
import Carrito from "./pages/Carrito/Carrito.jsx";
import Contacto from "./pages/Contacto/Contacto.jsx";
import Home from "./pages/Home/Home.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Inventario from "./pages/Inventario/Inventario.jsx";
import Login from "./pages/Login/Login.jsx";
import Nosotros from "./pages/Nosotros/Nosotros.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </Router>
  );
}

export default App;
