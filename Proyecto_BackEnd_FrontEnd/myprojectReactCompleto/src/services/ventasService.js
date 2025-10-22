import axios from "axios";

const API_URL = "http://localhost:8080/api/ventas";

export const listarVentas = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const registrarVenta = async (venta) => {
  const res = await axios.post(API_URL, venta);
  return res.data;
};
