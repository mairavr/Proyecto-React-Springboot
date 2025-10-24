import axios from "axios";

const API_URL = "http://localhost:8080/api/Empleados";

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

export const listarEmpleados = async () => {
  try {
    const res = await API.get("");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al listar empleados");
  }
};

export const obtenerEmpleadoPorId = async (id) => {
  try {
    const res = await API.get(`/${id}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al obtener empleado por ID");
  }
};

export const crearEmpleado = async (empleado) => {
  try {
    const res = await API.post("", empleado);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al crear empleado");
  }
};

export const actualizarEmpleado = async (id, empleado) => {
  try {
    const res = await API.put(`/${id}`, empleado);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al actualizar empleado");
  }
};

export const eliminarEmpleado = async (id) => {
  try {
    await API.delete(`/${id}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error al eliminar empleado");
  }
};