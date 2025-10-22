import axios from "axios";

const API_URL = "http://localhost:8080/api/proveedores";

export const listarProveedores = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
