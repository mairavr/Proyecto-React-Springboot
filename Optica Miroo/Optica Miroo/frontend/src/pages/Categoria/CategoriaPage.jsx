import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoriaPage = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nuevaCategoria, setNuevaCategoria] = useState({
    nombre: "",
  });

  const cargarCategorias = () => {
    axios
      .get("http://localhost:8080/api/categorias") 
      .then((res) => {
        setCategorias(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar categorías:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    cargarCategorias();
  }, []);

  const handleChange = (e) => {
    setNuevaCategoria({ ...nuevaCategoria, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/categorias", nuevaCategoria)
      .then((res) => {
        console.log("Categoría agregada:", res.data);
        setNuevaCategoria({ nombre: "" });
        cargarCategorias(); 
      })
      .catch((err) => console.error("Error al agregar categoría:", err));
  };

  if (loading) return <p>Cargando categorías...</p>;

  return (
    <div className="container mt-4">
      <h2>Agregar nueva ategoría</h2>


      <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
        <div className="row align-items-end">
          <div className="col-md-6 mb-2">
            <label className="form-label">Nombre de la Categoría</label>
            <input
              type="text"
              name="nombre"
              value={nuevaCategoria.nombre}
              onChange={handleChange}
              className="form-control"
              placeholder="Ej: Electrónica"
              required
            />
          </div>
          <div className="col-md-3 mb-2">
            <button type="submit" className="btn btn-primary w-100">
              Agregar Categoría
            </button>
          </div>
        </div>
      </form>

      <h2>Listado de categorias</h2>
      <table className="table table-bordered mt-3 bg-white">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td>{categoria.id}</td>
              <td>{categoria.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriaPage;
