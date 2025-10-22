import axios from "axios";

const API_URL = "http://localhost:8080/api/empleados";

export const listarEmpleados = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const crearEmpleado = async (empleado) => {
  const res = await axios.post(API_URL, empleado);
  return res.data;
};
