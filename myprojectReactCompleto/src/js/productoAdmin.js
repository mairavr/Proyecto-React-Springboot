document.addEventListener("DOMContentLoaded", () => {
  let editandoCodigo = null;
  const form = document.getElementById("formProducto");
  const tabla = document.querySelector("#productos .data-table tbody");
  const btnGuardar = document.getElementById("btnProducto");
  const btnCancelar = document.getElementById("btnCancelarProducto");
  const formContainer = document.getElementById("formProductoContainer");

  const camposError = {
    codigo: document.getElementById('codigo-error'),
    nombre: document.getElementById('nombre-error'),
    precio: document.getElementById('precio-error'),
    stock: document.getElementById('stock-error'),
    categoria: document.getElementById('categoria-error')
  };

  form.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', () => validarCampo(input));
  });

  function validarCampo(input) {
    const errorElement = camposError[input.name];
    if (!errorElement) return;
    let mensaje = "";

    switch(input.name) {
      case "codigo":
        if (input.value.trim().length < 3) mensaje = "El código debe tener al menos 3 caracteres.";
        break;
      case "nombre":
        if (input.value.trim() === "" || input.value.length > 100) mensaje = "El nombre es obligatorio y máximo 100 caracteres.";
        break;
      case "precio":
        if (isNaN(parseFloat(input.value)) || parseFloat(input.value) < 0) mensaje = "El precio debe ser un número mayor o igual a 0.";
        break;
      case "stock":
        const valor = parseInt(input.value);
        if (isNaN(valor) || valor < 0 || !Number.isInteger(valor)) mensaje = "El stock debe ser un número entero mayor o igual a 0.";
        break;
      case "categoria":
        if (input.value === "") mensaje = "Selecciona una categoría.";
        break;
    }

    if (mensaje) {
      errorElement.textContent = mensaje;
      errorElement.style.display = "block";
      input.classList.add("input-error");
      return false;
    } else {
      errorElement.style.display = "none";
      input.classList.remove("input-error");
      return true;
    }
  }

  function validarFormulario() {
    let valido = true;
    form.querySelectorAll('input, select').forEach(input => {
      if (!validarCampo(input)) valido = false;
    });
    return valido;
  }

  function cargarProductos() {
    tabla.innerHTML = "";
    (JSON.parse(localStorage.getItem("productos")) || []).forEach(p => agregarFila(p));
  }

  function guardarProducto(p) {
    let productos = JSON.parse(localStorage.getItem("productos")) || [];
    if (editandoCodigo) {
      productos = productos.map(x => x.codigo === p.codigo ? p : x);
    } else {
      productos.push(p);
    }
    localStorage.setItem("productos", JSON.stringify(productos));
    cargarProductos();
  }

  function agregarFila(p) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${p.codigo}</td>
      <td>${p.nombre}</td>
      <td>${p.categoria}</td>
      <td>$${parseFloat(p.precio).toLocaleString("es-CL")}</td>
      <td>${p.stock}</td>
      <td>
        <button class="btn btn-primary">Editar</button>
        <button class="btn btn-danger">Eliminar</button>
      </td>
    `;
    tabla.appendChild(fila);

    fila.querySelector(".btn-danger").onclick = () => {
      const productos = JSON.parse(localStorage.getItem("productos")).filter(x => x.codigo !== p.codigo);
      localStorage.setItem("productos", JSON.stringify(productos));
      cargarProductos();
    };

    fila.querySelector(".btn-primary").onclick = () => {
      for (const [k, v] of Object.entries(p)) {
        const input = form.querySelector(`[name="${k}"]`);
        if (input) input.value = v;
      }

      editandoCodigo = p.codigo;
      form.querySelector('[name="codigo"]').disabled = true;
      btnGuardar.textContent = "Guardar Cambios";
      btnCancelar.style.display = "inline-block";
      formContainer.style.display = "block";

      ocultarTodosLosErrores();
    };
  }

  function ocultarTodosLosErrores() {
    Object.values(camposError).forEach(e => e.style.display = "none");
    form.querySelectorAll('input, select').forEach(input => input.classList.remove("input-error"));
  }

  btnGuardar.onclick = () => {
    if (!validarFormulario()) return;

    const p = Object.fromEntries(new FormData(form));
    guardarProducto(p);

    form.reset();
    editandoCodigo = null;
    form.querySelector('[name="codigo"]').disabled = false;
    btnGuardar.textContent = "Crear Producto";
    btnCancelar.style.display = "none";
    formContainer.style.display = "none";
  };

  btnCancelar.onclick = () => {
    form.reset();
    editandoCodigo = null;
    form.querySelector('[name="codigo"]').disabled = false;
    btnGuardar.textContent = "Crear Producto";
    btnCancelar.style.display = "none";
    formContainer.style.display = "none";
    ocultarTodosLosErrores();
  };

  cargarProductos();
});
