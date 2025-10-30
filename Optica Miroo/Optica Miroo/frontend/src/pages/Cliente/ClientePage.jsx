import React, { useEffect, useState } from "react";
import "../../assets/css/pages.css";

const ClientePage = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: "",
    correo: "",
    telefono: ""
  });

  const fetchClientes = () => {
    fetch("http://localhost:8080/api/Clientes")
      .then((res) => res.json())
      .then((data) => {
        setClientes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar clientes:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  
  const handleChange = (e) => {
    setNuevoCliente({
      ...nuevoCliente,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/Clientes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoCliente)
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al agregar cliente");
        return res.json();
      })
      .then(() => {
        setNuevoCliente({ nombre: "", correo: "", telefono: "" });
        fetchClientes(); 
      })
      .catch((error) => console.error("Error:", error));
  };

  if (loading) return <p>Cargando clientes...</p>;

  return (
    <div className="container mt-4">
      <h2>Agregar nuevo cliente</h2>

      <form className="row g-3 mt-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            value={nuevoCliente.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="email"
            name="correo"
            className="form-control"
            placeholder="Correo"
            value={nuevoCliente.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            name="telefono"
            className="form-control"
            placeholder="Teléfono"
            value={nuevoCliente.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-1 d-grid">
          <button type="submit" className="btn btn-success">
            Agregar
          </button>
        </div>
      </form>
      <h2>Listado de clientes</h2>
      <div className="table-container mt-4">
        <table className="table table-bordered tabla-naranja">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientePage;
