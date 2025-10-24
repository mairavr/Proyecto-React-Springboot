import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Iniciando sesión con: ${user.email}`);
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-center">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="email"
          type="email"
          placeholder="Correo"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <button className="bg-green-500 text-white w-full py-2 rounded">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
