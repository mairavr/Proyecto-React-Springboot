import axios from "axios";

const API_URL = "http://localhost:8080/api/categorias";

const API = axios.create({ baseURL: API_URL });


API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export const listarCategorias = async () => {
  try {
    const res = await API.get("");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al listar categorías");
  }
};

export const obtenerCategoriaPorId = async (id) => {
  try {
    const res = await API.get(`/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al obtener categoría por ID");
  }
};

export const crearCategoria = async (categoria) => {
  try {
    const res = await API.post("", categoria);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al crear categoría");
  }
};

export const actualizarCategoria = async (id, categoriaActualizada) => {
  try {
    const res = await API.put(`/${id}`, categoriaActualizada);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al actualizar categoría");
  }
};

export const eliminarCategoria = async (id) => {
  try {
    await API.delete(`/${id}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al eliminar categoría");
  }
};