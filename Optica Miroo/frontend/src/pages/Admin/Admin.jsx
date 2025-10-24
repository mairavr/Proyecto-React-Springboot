import React from "react";

const Admin = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <ul className="space-y-2">
        <li>🧾 Gestionar productos</li>
        <li>👥 Ver usuarios</li>
        <li>📦 Revisar pedidos</li>
      </ul>
    </div>
  );
};

export default Admin;
