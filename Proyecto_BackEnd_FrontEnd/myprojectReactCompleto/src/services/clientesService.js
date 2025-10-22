import axios from "axios";

const API_URL = "http://localhost:8080/api/clientes";

export const listarClientes = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const crearCliente = async (cliente) => {
  const res = await axios.post(API_URL, cliente);
  return res.data;
};

export const actualizarCliente = async (id, cliente) => {
  const res = await axios.put(`${API_URL}/${id}`, cliente);
  return res.data;
};

export const eliminarCliente = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
