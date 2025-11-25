import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EstadoCarrito } from "../Carrito/EstadoCarrito";
import "../../assets/css/estilo.css";
import "../../assets/css/estilo1.css";

function Navbar({ abrirMiniCarrito, usuario }) {
  const { productosCarrito } = useContext(EstadoCarrito);
  const cantidad = productosCarrito.length;

  return (
    <div className="nav-container">
      <img src="/img/logo.png" alt="logo optica" className="logo-header" />
      <nav className="nav-links">
        <Link to="/">INICIO 🏘️</Link>
        <Link to="/nosotros">NOSOTROS 🧑‍💻</Link>
        <Link to="/productos">PRODUCTOS 🛍️</Link>
        <Link to="/blog">BLOG 📝</Link>
        <Link to="/contacto">CONTACTO ✉️</Link>

        <span className="nav-link" onClick={abrirMiniCarrito}>
          CARRITO 🛒
          {cantidad > 0 && <span className="carrito-burbuja">{cantidad}</span>}
        </span>

        {!usuario && <Link to="/login">CUENTA 👤</Link>}

        {usuario && usuario.cargo === "Cliente" && (
          <span className="nav-usuario">Bienvenido, {usuario.nombre} 👤</span>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
