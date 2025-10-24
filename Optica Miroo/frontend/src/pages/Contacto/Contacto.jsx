import React, { useState } from "react";

const Contacto = () => {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado. Gracias por contactarnos!");
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Contáctanos</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="nombre"
          placeholder="Tu nombre"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Tu correo"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          className="w-full border p-2 rounded"
          rows="4"
          onChange={handleChange}
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
