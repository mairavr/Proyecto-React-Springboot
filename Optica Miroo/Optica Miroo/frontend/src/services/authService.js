import axios from "axios";

const API_URL = "http://localhost:8080/auth";

export const login = async (correo, contraseña) => {
  try {
    const res = await axios.post(`${API_URL}/login`, {
      username: correo,
      password: contraseña
    });

    localStorage.setItem("token", res.data.token);

    return res.data;
  } catch (error) {
    const mensaje =
      error.response?.data?.message || "Error al iniciar sesión";
    throw new Error(mensaje);
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
