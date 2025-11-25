import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { EstadoCarritoProvider } from "./componentes/Carrito/EstadoCarrito";
import { ToastProvider } from "./componentes/Toast/ToastContext";

import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import MiniCarrito from "./componentes/Carrito/MiniCarrito";
import Carrito from "./pages/Carrito/Carrito";

import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import Productos from "./pages/Productos/Productos";
import Blog from "./pages/Blog/Blog";
import Contacto from "./pages/Contacto/Contacto";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";

import ClientePage from "./pages/Cliente/ClientePage.jsx";
import EmpleadoPage from "./pages/Empleado/EmpleadoPage.jsx";
import ProductoPage from "./pages/Producto/ProductoPage.jsx";
import CategoriaPage from "./pages/Categoria/CategoriaPage.jsx";
import ProveedoresPage from "./pages/Proveedores/ProveedoresPage.jsx";
import VentasPage from "./pages/Ventas/VentasPage.jsx";

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const abrirMiniCarrito = () => setMostrarCarrito(true);
  const cerrarMiniCarrito = () => setMostrarCarrito(false);

  return (
    <ToastProvider>
      <EstadoCarritoProvider>
        <Router>
          <Navbar abrirMiniCarrito={abrirMiniCarrito} usuario={usuario} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/Login" element={<Login setUsuario={setUsuario} />} />
            <Route
              path="/admin"
              element={
                usuario?.cargo === "Administrador" ? (
                  <Admin empleado={usuario} />
                ) : (
                  <Navigate to="/Login" />
                )
              }
            />
            <Route path="/clientes" element={<ClientePage />} />
            <Route path="/empleados" element={<EmpleadoPage />} />
            <Route path="/productos" element={<ProductoPage />} />
            <Route path="/categorias" element={<CategoriaPage />} />
            <Route path="/proveedores" element={<ProveedoresPage />} />
            <Route path="/ventas" element={<VentasPage />} />
          </Routes>

          {mostrarCarrito && <MiniCarrito onCerrar={cerrarMiniCarrito} />}
          <Footer />
        </Router>
      </EstadoCarritoProvider>
    </ToastProvider>
  );
}

export default App;
