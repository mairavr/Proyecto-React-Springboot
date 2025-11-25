import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import BotonLogin from "../../componentes/Login/BotonLogin";
import { ToastContainer } from "../../componentes/Toast/ToastContainer";
import "../../assets/css/estilo.css";
import "../../assets/css/estilo1.css";
import "../../assets/css/toast.css";

const Login = ({ setUsuario }) => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [cargo, setCargo] = useState("Administrador");
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
      console.log("🔹 Intentando login con:", correo, contraseña, cargo);

      if (
        correo.trim().toLowerCase() === "carlos.munoz@opticamiroo.cl" &&
        contraseña.trim() === "cmunozmiroo123" &&
        cargo === "Administrador"
      ) {
        const admin = {
          nombre: "Carlos Muñoz",
          correo,
          cargo: "Administrador",
        };
        if (setUsuario) setUsuario(admin);
        localStorage.setItem("usuario", JSON.stringify(admin));
        mostrarToast("✅ ¡Inicio de sesión exitoso como Administrador!");
        setTimeout(() => navigate("/admin"), 500);
        return;
      }

      const empleado = await login(correo.trim(), contraseña.trim());

      if (!empleado) {
        mostrarToast("Usuario o contraseña incorrectos", "error");
        return;
      }

      let cargoNormalizado = empleado.cargo;
      if (cargoNormalizado === "ROLE_CLIENTE" || cargoNormalizado === "Usuario") {
        cargoNormalizado = "Cliente";
      }

      const usuarioFinal = { ...empleado, cargo: cargoNormalizado };

      if (setUsuario) setUsuario(usuarioFinal);
      localStorage.setItem("usuario", JSON.stringify(usuarioFinal));

      if (usuarioFinal.cargo === "Administrador") {
        mostrarToast("¡Inicio de sesión exitoso como Administrador!");
        setTimeout(() => navigate("/admin"), 500);
      } else {
        mostrarToast(`¡Bienvenido ${usuarioFinal.nombre}!`);
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (err) {
      console.error("Error en login:", err);
      mostrarToast(err.message || "Error al iniciar sesión", "error");
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Cargo</label>
          <select value={cargo} onChange={(e) => setCargo(e.target.value)}>
            <option value="Administrador">Administrador</option>
            <option value="Cliente">Usuario</option>
          </select>
        </div>

        <BotonLogin texto="Iniciar sesión" />
      </form>

      <ToastContainer toasts={toasts} />
    </div>
  );
};

export default Login;
