import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const login = async (usuario) => {
  const res = await axios.post(`${API_URL}/login`, usuario);
  if (res.data.token) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
