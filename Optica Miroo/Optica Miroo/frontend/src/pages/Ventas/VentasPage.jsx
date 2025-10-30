import React, { useEffect, useState } from "react";
import "../../assets/css/pages.css";

const VentasPage = () => {
  const [ventas, setVentas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nuevaVenta, setNuevaVenta] = useState({
    fecha: "",
    total: "",
    cliente_id: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/Ventas")
      .then((res) => res.json())
      .then((data) => {
        setVentas(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar ventas:", error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setNuevaVenta({ ...nuevaVenta, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/Ventas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaVenta),
    })
      .then((res) => res.json())
      .then((data) => {
        setVentas([...ventas, data]);
        setNuevaVenta({ fecha: "", total: "", cliente_id: "" });
      })
      .catch((error) => console.error("Error al agregar venta:", error));
  };

  if (loading) return <p>Cargando ventas...</p>;

  return (
    <div className="container mt-4">
      <h2>Agregar venta</h2>

      <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
        <div className="row">
          <div className="col-md-3 mb-2">
            <label className="form-label">Fecha</label>
            <input
              type="date"
              name="fecha"
              value={nuevaVenta.fecha}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-3 mb-2">
            <label className="form-label">Total</label>
            <input
              type="number"
              name="total"
              value={nuevaVenta.total}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: 29990"
              required
            />
          </div>
          <div className="col-md-3 mb-2">
            <label className="form-label">Cliente ID</label>
            <input
              type="number"
              name="cliente_id"
              value={nuevaVenta.cliente_id}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: 1"
              required
            />
          </div>
          <div className="col-md-3 d-flex align-items-end">
            <button type="submit" className="btn btn-primary w-100">
              Agregar Venta
            </button>
          </div>
        </div>
      </form>

      <h2>Listado de ventas</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Cliente ID</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map((venta) => (
            <tr key={venta.id}>
              <td>{venta.id}</td>
              <td>{venta.fecha}</td>
              <td>{venta.total}</td>
              <td>{venta.cliente_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VentasPage;
