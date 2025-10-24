import axios from "axios";

const API_URL = "http://localhost:8080/api/Clientes";

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000, 
});


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


export const listarClientes = async () => {
  try {
    const response = await API.get(""); 
    return response.data; 
  } catch (error) {

    const errorMessage =
      error.response?.data?.message || "Error al listar clientes";
    throw new Error(errorMessage);
  }
};


export const obtenerClientePorId = async (id) => {
  try {
    const response = await API.get(`/${id}`);
    return response.data; 
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Error al obtener cliente por ID";
    throw new Error(errorMessage);
  }
};


export const crearCliente = async (cliente) => {
  try {
    const response = await API.post("", cliente); 
    return response.data; 
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Error al crear cliente";
    throw new Error(errorMessage);
  }
};


export const actualizarCliente = async (id, cliente) => {
  try {
    const response = await API.put(`/${id}`, cliente); 
    return response.data; 
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Error al actualizar cliente";
    throw new Error(errorMessage);
  }
};


export const eliminarCliente = async (id) => {
  try {
    await API.delete(`/${id}`); 
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Error al eliminar cliente";
    throw new Error(errorMessage);
  }
};