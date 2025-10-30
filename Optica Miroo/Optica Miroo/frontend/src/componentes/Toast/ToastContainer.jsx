import React from "react";
import "../../assets/css/toast.css";

export const ToastContainer = ({ toasts }) => {
  return (
    <div id="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.tipo}`}>
          {t.mensaje}
        </div>
      ))}
    </div>
  );
};
