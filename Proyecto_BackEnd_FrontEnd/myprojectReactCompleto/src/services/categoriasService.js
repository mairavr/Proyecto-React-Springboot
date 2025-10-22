import axios from "axios";

const API_URL = "http://localhost:8080/api/categorias";

export const listarCategorias = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const crearCategoria = async (categoria) => {
  const res = await axios.post(API_URL, categoria);
  return res.data;
};

export const actualizarCategoria = async (id, categoria) => {
  const res = await axios.put(`${API_URL}/${id}`, categoria);
  return res.data;
};

export const eliminarCategoria = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
