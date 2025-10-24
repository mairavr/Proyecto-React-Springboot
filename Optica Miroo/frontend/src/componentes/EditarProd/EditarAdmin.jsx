import React, { useState, useEffect } from "react";

const EditarAdministrador = ({ adminEditando, onClose, onAdministradorEditado }) => {
  const [admin, setAdmin] = useState(adminEditando || {
    nombre: "",
    email: "",
    password: "",
    rol: "ADMIN",
  });

  useEffect(() => {
    if (adminEditando) {
      setAdmin(adminEditando);
    }
  }, [adminEditando]);

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación: Aquí iría la llamada al backend
    console.log("Administrador editado:", admin);
    alert("Administrador actualizado: " + admin.nombre);
    onAdministradorEditado(admin); // Pasa el administrador editado al componente padre
    onClose(); // Cierra el formulario
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", maxWidth: "400px", borderRadius: "8px", margin: "20px 0" }}>
      <h2>Editar Administrador</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={admin.nombre}
            onChange={handleChange}
            placeholder="Nombre del administrador"
            required
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ddd" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
          <input
            type="email"
            name="email"
            value={admin.email}
            onChange={handleChange}
            placeholder="Email"
            required
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ddd" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={admin.password}
            onChange={handleChange}
            placeholder="Contraseña"
            required
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ddd" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Rol:</label>
          <select
            name="rol"
            value={admin.rol}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ddd" }}
          >
            <option value="ADMIN">Administrador</option>
            <option value="SUPER_ADMIN">Super Admin</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            style={{ padding: "10px 20px", background: "#28a745", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Actualizar
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{ marginLeft: "10px", padding: "10px 20px", background: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarAdministrador;