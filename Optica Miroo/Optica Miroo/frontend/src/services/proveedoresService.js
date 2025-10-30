import axios from "axios";

const API_URL = "http://localhost:8080/api/Proveedors";

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

export const listarProveedores = async () => {
  try {
    const res = await API.get("");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al listar proveedores");
  }
};

export const obtenerProveedorPorId = async (id) => {
  try {
    const res = await API.get(`/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al obtener proveedor por ID");
  }
};

export const crearProveedor = async (proveedor) => {
  try {
    const res = await API.post("", proveedor);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al crear proveedor");
  }
};

export const actualizarProveedor = async (id, proveedor) => {
  try {
    const res = await API.put(`/${id}`, proveedor);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al actualizar proveedor");
  }
};

export const eliminarProveedor = async (id) => {
  try {
    await API.delete(`/${id}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al eliminar proveedor");
  }
};