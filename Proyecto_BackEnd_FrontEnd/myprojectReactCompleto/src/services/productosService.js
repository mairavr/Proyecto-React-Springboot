import axios from "axios";

const API_URL = "http://localhost:8080/api/productos";

export const listarProductos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const obtenerProducto = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const crearProducto = async (producto) => {
  const res = await axios.post(API_URL, producto);
  return res.data;
};

export const actualizarProducto = async (id, producto) => {
  const res = await axios.put(`${API_URL}/${id}`, producto);
  return res.data;
};

export const eliminarProducto = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
