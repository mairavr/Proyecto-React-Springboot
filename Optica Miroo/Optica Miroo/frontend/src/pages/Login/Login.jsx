import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService"; 
import { ToastContainer } from "../../componentes/Toast/ToastContainer"; 
import BotonLogin from "../../componentes/Login/BotonLogin";
import "../../assets/css/estilo.css";
import "../../assets/css/estilo1.css";
import "../../assets/css/toast.css";

const Login = ({ setUsuario }) => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [toasts, setToasts] = useState([]);
  const navigate = useNavigate();

  const mostrarToast = (mensaje, tipo = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, mensaje, tipo }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
   
      const data = await login(correo.trim(), contraseña.trim());
      console.log("Usuario recibido del backend:", data);

      
      if (setUsuario) setUsuario(data);

     
      if (data.cargo === "Administrador") {
        mostrarToast("✅ ¡Inicio de sesión exitoso como Administrador!");
        navigate("/admin");
      } else {
        mostrarToast("✅ ¡Inicio de sesión exitoso!");
        navigate("/"); 
      }
    } catch (err) {
      console.error("Error en login:", err);
      mostrarToast(err.message || "Error al iniciar sesión", "error");
    }
  };

  return (
    <div className="form-wrapper">
      <form id="form-login" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>

        <BotonLogin texto="Iniciar sesión" />
      </form>

      <ToastContainer toasts={toasts} />
    </div>
  );
};

export default Login;
