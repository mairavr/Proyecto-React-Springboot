import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const login = async (correo, contraseña) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { correo, contraseña });
    return res.data; 
  } catch (error) {
    const mensaje =
      error.response?.data?.message || "Error al iniciar sesión";
    throw new Error(mensaje);
  }
};

export const logout = () => {
};
