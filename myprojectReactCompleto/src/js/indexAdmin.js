document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
      document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
      this.classList.add('active');

      document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
      const target = this.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });

  window.mostrarFormularioUsuario = function () {
    const form = document.getElementById("formUsuario");
    form.reset();
    window.editandoRun = null;
    document.getElementById("btnUsuario").textContent = "Crear Usuario";
    document.getElementById("btnCancelarUsuario").style.display = "none";
    document.getElementById("formUsuarioContainer").style.display = "block";
  };

  window.mostrarFormularioProducto = function () {
    const form = document.getElementById("formProducto");
    form.reset();
    window.editandoCodigo = null;
    document.getElementById("btnProducto").textContent = "Crear Producto";
    document.getElementById("btnCancelarProducto").style.display = "none";
    document.getElementById("formProductoContainer").style.display = "block";
  };
});




