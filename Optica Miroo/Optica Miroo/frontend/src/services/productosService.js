import axios from "axios";

const API_URL = "http://localhost:8080/api/productos";

const API = axios.create({ baseURL: API_URL });

API.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const listarProductos = async () => {
  try {
    const res = await API.get("");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al listar productos");
  }
};

export const obtenerProductoPorId = async (id) => {
  try {
    const res = await API.get(`/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al obtener producto por ID");
  }
};

export const crearProducto = async (producto) => {
  try {
    const res = await API.post("", producto);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al crear producto");
  }
};

export const actualizarProducto = async (id, productoActualizado) => {
  try {
    const res = await API.put(`/${id}`, productoActualizado);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al actualizar producto");
  }
};

export const eliminarProducto = async (id) => {
  try {
    await API.delete(`/${id}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al eliminar producto");
  }
};

export const desactivarProducto = async (id) => {
  try {
    const res = await API.patch(`/${id}/desactivar`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al desactivar producto");
  }
};