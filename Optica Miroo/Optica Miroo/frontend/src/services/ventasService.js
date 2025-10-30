import axios from "axios";

const API_URL = "http://localhost:8080/api/Ventas";

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

export const listarVentas = async () => {
  try {
    const res = await API.get("");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al listar ventas");
  }
};

export const obtenerVentaPorId = async (id) => {
  try {
    const res = await API.get(`/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al obtener venta por ID");
  }
};

export const crearVenta = async (venta) => {
  try {
    const res = await API.post("", venta);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al crear venta");
  }
};

export const actualizarVenta = async (id, venta) => {
  try {
    const res = await API.put(`/${id}`, venta);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al actualizar venta");
  }
};

export const eliminarVenta = async (id) => {
  try {
    await API.delete(`/${id}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al eliminar venta");
  }
};