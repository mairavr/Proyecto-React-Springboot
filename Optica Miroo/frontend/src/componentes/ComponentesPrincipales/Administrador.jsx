import React, { useState, useEffect } from "react";
import CrearAdministrador from "./CrearAdministrador";
import EditarAdministrador from "./EditarAdministrador";

const Administrador = () => {
  const [administradores, setAdministradores] = useState([]);
  const [showCrear, setShowCrear] = useState(false);
  const [showEditar, setShowEditar] = useState(false);
  const [adminSeleccionado, setAdminSeleccionado] = useState(null);

 
  useEffect(() => {
    const administradoresMock = [
      { id: 1, nombre: "Juan Pérez", email: "juan@example.com", rol: "ADMIN" },
      { id: 2, nombre: "María Gómez", email: "maria@example.com", rol: "SUPER_ADMIN" },
    ];
    setAdministradores(administradoresMock);
  }, []);

  const handleAdministradorCreado = (nuevoAdmin) => {
    setAdministradores([...administradores, { ...nuevoAdmin, id: administradores.length + 1 }]);
    setShowCrear(false);
  };

  const handleAdministradorEditado = (adminEditado) => {
    setAdministradores(
      administradores.map((a) => (a.id === adminEditado.id ? adminEditado : a))
    );
    setShowEditar(false);
    setAdminSeleccionado(null);
  };

  const handleEliminar = (id) => {
    if (window.confirm("¿Eliminar administrador?")) {
      setAdministradores(administradores.filter((a) => a.id !== id));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestión de Administradores</h1>
      <button
        onClick={() => setShowCrear(true)}
        style={{ padding: "10px 20px", background: "#28a745", color: "white", border: "none", borderRadius: "4px" }}
      >
        Nuevo Administrador
      </button>

      <h2>Lista de Administradores</h2>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {administradores.map((admin) => (
          <li key={admin.id} style={{ margin: "10px 0", borderBottom: "1px solid #ddd", padding: "10px" }}>
            {admin.nombre} ({admin.email}) - Rol: {admin.rol}
            <button
              onClick={() => {
                setAdminSeleccionado(admin);
                setShowEditar(true);
              }}
              style={{ marginLeft: "10px", padding: "5px 10px", background: "#007bff", color: "white", border: "none", borderRadius: "4px" }}
            >
              Editar
            </button>
            <button
              onClick={() => handleEliminar(admin.id)}
              style={{ marginLeft: "10px", padding: "5px 10px", background: "#dc3545", color: "white", border: "none", borderRadius: "4px" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {showCrear && (
        <CrearAdministrador
          onClose={() => setShowCrear(false)}
          onAdministradorCreado={handleAdministradorCreado}
        />
      )}
      {showEditar && adminSeleccionado && (
        <EditarAdministrador
          adminEditando={adminSeleccionado}
          onClose={() => {
            setShowEditar(false);
            setAdminSeleccionado(null);
          }}
          onAdministradorEditado={handleAdministradorEditado}
        />
      )}
    </div>
  );
};

export default Administrador;