import React, { useEffect, useState } from "react";

const ProductoPage = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagen: "",
    categoriaId: ""
  });

  useEffect(() => {
    // Cargar productos
    fetch("http://localhost:8080/api/productos")
      .then(r => r.json())
      .then(data => setProductos(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));

    // Cargar categorías (opcional, si tu backend tiene este endpoint)
    fetch("http://localhost:8080/api/categorias")
      .then(r => r.json())
      .then(data => setCategorias(data))
      .catch(err => console.warn("No se pudieron cargar las categorías"));
  }, []);

  const handleChange = (e) => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoProducto.nombre || !nuevoProducto.descripcion || !nuevoProducto.precio) return;

    const body = {
      nombre: nuevoProducto.nombre,
      descripcion: nuevoProducto.descripcion,
      precio: parseInt(nuevoProducto.precio),
      imagen: nuevoProducto.imagen,
      activo: true,
      categoria: nuevoProducto.categoriaId ? { id: parseInt(nuevoProducto.categoriaId) } : null
    };

    fetch("http://localhost:8080/api/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
      .then(r => r.json())
      .then(data => {
        setProductos([...productos, data]);
        setNuevoProducto({ nombre: "", descripcion: "", precio: "", imagen: "", categoriaId: "" });
      })
      .catch(err => console.error(err));
  };

  if (loading) return <p className="text-center">Cargando...</p>;

  return (
    <div className="container mt-4">
      <h2>Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
        <div className="row">
          <div className="col-md-3 mb-2">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={nuevoProducto.nombre}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: Ray-Ban Aviator"
              required
            />
          </div>
          <div className="col-md-3 mb-2">
            <label className="form-label">Descripción</label>
            <input
              type="text"
              name="descripcion"
              value={nuevoProducto.descripcion}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: Lentes polarizados UV400"
              required
            />
          </div>
          <div className="col-md-2 mb-2">
            <label className="form-label">Precio</label>
            <input
              type="number"
              name="precio"
              value={nuevoProducto.precio}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: 79990"
              required
            />
          </div>
          <div className="col-md-2 mb-2">
            <label className="form-label">Imagen (nombre archivo)</label>
            <input
              type="text"
              name="imagen"
              value={nuevoProducto.imagen}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: ray-ban-aviator.webp"
            />
          </div>
          <div className="col-md-2 mb-2">
            <label className="form-label">Categoría</label>
            <select
              name="categoriaId"
              value={nuevoProducto.categoriaId}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Selecciona categoría</option>
              {categorias.map(c => (
                <option key={c.id} value={c.id}>{c.nombre}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">+ Agregar Producto</button>
        </div>
      </form>

      <h2>Listado de Productos</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Activo</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {productos.length > 0 ? (
            productos.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>{p.descripcion}</td>
                <td>{p.precio}</td>
                <td>{p.activo ? "Sí" : "No"}</td>
                <td>{p.categoria ? p.categoria.nombre : "Sin categoría"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No hay productos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductoPage;
