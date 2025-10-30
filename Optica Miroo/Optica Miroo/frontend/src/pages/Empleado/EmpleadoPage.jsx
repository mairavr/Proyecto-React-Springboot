import React, { useEffect, useState } from "react";
import axios from "axios";

const EmpleadoPage = () => {
  const [empleados, setEmpleados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: "",
    cargo: "",
    correo: "",
    contraseña: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/Empleados")
      .then((res) => {
        setEmpleados(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar empleados:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setNuevoEmpleado({ ...nuevoEmpleado, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/Empleados", nuevoEmpleado)
      .then((res) => {
        setEmpleados([...empleados, res.data]);
        setNuevoEmpleado({ nombre: "", cargo: "", correo: "", contraseña: "" });
      })
      .catch((err) => console.error("Error al agregar empleado:", err));
  };

  if (loading) return <p>Cargando empleados...</p>;

  return (
    <div className="container mt-4">
      <h2>Agregar nuevo empleado</h2>

    
      <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
        <div className="row">
          <div className="col-md-3 mb-2">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={nuevoEmpleado.nombre}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: Ana Torres"
              required
            />
          </div>
          <div className="col-md-3 mb-2">
            <label className="form-label">Cargo</label>
            <input
              type="text"
              name="cargo"
              value={nuevoEmpleado.cargo}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: Vendedora"
              required
            />
          </div>
          <div className="col-md-3 mb-2">
            <label className="form-label">Correo</label>
            <input
              type="email"
              name="correo"
              value={nuevoEmpleado.correo}
              onChange={handleChange}
              className="form-control"
              placeholder="correo@ejemplo.cl"
              required
            />
          </div>
         
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Agregar Empleado
        </button>
      </form>

      <h2>Listado de empleados</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cargo</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <td>{empleado.id}</td>
              <td>{empleado.nombre}</td>
              <td>{empleado.cargo}</td>
              <td>{empleado.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpleadoPage;
