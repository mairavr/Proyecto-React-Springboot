import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo o nombre */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Mi Página
        </Link>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNav"
          aria-controls="menuNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="menuNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold text-primary" : ""}`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/inventario"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold text-primary" : ""}`
                }
              >
                Inventario
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active fw-semibold text-primary" : ""}`
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
