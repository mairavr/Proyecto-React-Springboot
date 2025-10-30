
import React, { useEffect, useState } from "react";

const ProveedoresPage = () => {
  const [proveedores, setProveedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nuevo, setNuevo] = useState({ nombre: "", telefono: "", email: "" });

  useEffect(() => {
    fetch("http://localhost:8080/api/Proveedors")
      .then(r => r.json())
      .then(data => {
        setProveedores(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevo.nombre || !nuevo.telefono || !nuevo.email) return;

    fetch("http://localhost:8080/api/Proveedors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo)
    })
      .then(r => r.json())
      .then(data => {
        setProveedores([...proveedores, data]);
        setNuevo({ nombre: "", telefono: "", email: "" });
      });
  };

  if (loading) return <p className="text-center">Cargando...</p>;

  return (
    <div className="container mt-4">
      <h2>Agregar Proveedor</h2>

      <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
        <div className="row">
          <div className="col-md-3 mb-2">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={nuevo.nombre}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: Ray-Ban Chile"
              required
            />
          </div>
          <div className="col-md-3 mb-2">
            <label className="form-label">Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={nuevo.telefono}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: +56222558899"
              required
            />
          </div>
          <div className="col-md-3 mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={nuevo.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: contacto@rayban.cl"
              required
            />
          </div>
          <div className="col-md-3 d-flex align-items-end">
            <button type="submit" className="btn btn-primary w-100">
              + Agregar
            </button>
          </div>
        </div>
      </form>

      <h2>Listado de Proveedores</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.length > 0 ? (
            proveedores.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.telefono}</td>
                <td>{p.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No hay proveedores</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProveedoresPage;