import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/admin.css";
import "../../assets/css/estilo1.css";

const Admin = () => (
  <div className="admin-container">
    <aside className="sidebar">
      <h2 className="text-orange">Panel Administrador</h2>
      <nav className="sidebar-menu">
        <div className="menu-item">📦 <Link to="/productos"><span className="text-orange">Productos</span></Link></div>
        <div className="menu-item">📁 <Link to="/categorias"><span className="text-orange">Categorías</span></Link></div>
        <div className="menu-item">👥 <Link to="/clientes"><span className="text-orange">Clientes</span></Link></div>
        <div className="menu-item">🧑‍💼 <Link to="/empleados"><span className="text-orange">Empleados</span></Link></div>
        <div className="menu-item">🚚 <Link to="/proveedores"><span className="text-orange">Proveedores</span></Link></div>
        <div className="menu-item">🛒 <Link to="/ventas"><span className="text-orange">Ventas</span></Link></div>
      </nav>
    </aside>

    <main className="main-content">
      <header className="admin-header">
        <div className="search-box">🔍 <input type="text" placeholder="Buscar..." /></div>
        <div className="user-info">
          <p className="text-orange">Contacto administrador</p>
          <p><a href="mailto:admin@opticamiroo.cl">admin@opticamiroo.cl</a></p>
        </div>
      </header>

      <section className="content-section active">
        <h1 className="dashboard-title text-orange">Panel de Administración</h1>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div><h3>1,254</h3><p>Usuarios Registrados</p></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div><h3>524</h3><p>Productos Activos</p></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🛒</div>
            <div><h3>689</h3><p>Pedidos del Mes</p></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div><h3>$24,850</h3><p>Ingresos Totales</p></div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Admin;


