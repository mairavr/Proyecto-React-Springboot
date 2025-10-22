document.addEventListener("DOMContentLoaded", () => {
  let editandoRun = null;
  const form = document.getElementById("formUsuario");
  const tabla = document.querySelector("#usuarios .data-table tbody");
  const regionSelect = document.getElementById("region");
  const comunaSelect = document.getElementById("comuna");
  const btnGuardar = document.getElementById("btnUsuario");
  const btnCancelar = document.getElementById("btnCancelarUsuario");
  const formContainer = document.getElementById("formUsuarioContainer");

  const camposError = {
    run: document.getElementById('run-error'),
    nombre: document.getElementById('nombre-error'),
    apellidos: document.getElementById('apellidos-error'),
    correo: document.getElementById('correo-error'),
    tipo: document.getElementById('tipo-error'),
    region: document.getElementById('region-error'),
    comuna: document.getElementById('comuna-error'),
    direccion: document.getElementById('direccion-error')
  };

  const comunasPorRegion = {
    Metropolitana: ["Santiago", "Maipú", "Puente Alto", "Peñalolén", "La Florida"],
    Valparaíso: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "Concón"]
  };

  regionSelect.addEventListener("change", () => {
    const region = regionSelect.value;
    comunaSelect.innerHTML = "<option value=''>Comuna</option>";

    if (comunasPorRegion[region]) {
      comunaSelect.style.display = "inline-block";
      comunasPorRegion[region].forEach(comuna => {
        const opt = document.createElement("option");
        opt.value = comuna;
        opt.textContent = comuna;
        comunaSelect.appendChild(opt);
      });
    } else {
      comunaSelect.style.display = "none";
    }
    validarCampo(regionSelect);
    validarCampo(comunaSelect);
  });

  form.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', () => validarCampo(input));
  });

  function validarCampo(input) {
    const errorElement = camposError[input.name];
    if (!errorElement) return;
    let mensaje = "";

    switch(input.name) {
      case "run":
        const runRegex = /^[0-9]{7,8}[0-9Kk]$/;
        if (!input.value.trim() || !runRegex.test(input.value.trim())) mensaje = "RUN obligatorio, 7-9 caracteres, formato válido (ej. 19011022K).";
        break;
      case "nombre":
        if (!input.value.trim() || input.value.length > 50) mensaje = "Nombre obligatorio, máximo 50 caracteres.";
        break;
      case "apellidos":
        if (!input.value.trim() || input.value.length > 100) mensaje = "Apellidos obligatorios, máximo 100 caracteres.";
        break;
      case "correo":
        const correoValido = /^[^@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;
        if (!input.value.trim() || input.value.length > 100 || !correoValido.test(input.value.trim())) mensaje = "Correo inválido, debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.";
        break;
      case "tipo":
        if (!["Administrador","Cliente","Vendedor"].includes(input.value)) mensaje = "Selecciona un tipo válido.";
        break;
      case "region":
        if (!input.value || !comunasPorRegion[input.value]) mensaje = "Selecciona una región válida.";
        break;
      case "comuna":
        if (!input.value || !comunasPorRegion[regionSelect.value].includes(input.value)) mensaje = "Selecciona una comuna válida.";
        break;
      case "direccion":
        if (!input.value.trim() || input.value.length > 300) mensaje = "Dirección obligatoria, máximo 300 caracteres.";
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

  function cargarUsuarios() {
    tabla.innerHTML = "";
    (JSON.parse(localStorage.getItem("usuarios")) || []).forEach(u => agregarFila(u));
  }

  function guardarUsuario(u) {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    if (editandoRun) {
      usuarios = usuarios.map(x => x.run === u.run ? u : x);
    } else {
      usuarios.push(u);
    }
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    cargarUsuarios();
  }

  function agregarFila(u) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${u.run}</td>
      <td>${u.nombre} ${u.apellidos}</td>
      <td>${u.correo}</td>
      <td>${u.tipo}</td>
      <td>Activo</td>
      <td>
        <button class="btn btn-primary">Editar</button>
        <button class="btn btn-danger">Eliminar</button>
      </td>
    `;
    tabla.appendChild(fila);

    fila.querySelector(".btn-danger").onclick = () => {
      const usuarios = JSON.parse(localStorage.getItem("usuarios")).filter(x => x.run !== u.run);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
      cargarUsuarios();
    };

    fila.querySelector(".btn-primary").onclick = () => {
      for (const [k, v] of Object.entries(u)) {
        const input = form.querySelector(`[name="${k}"]`);
        if (input) input.value = v;
      }
      regionSelect.value = u.region;
      regionSelect.dispatchEvent(new Event("change"));
      comunaSelect.value = u.comuna;

      editandoRun = u.run;
      form.querySelector('[name="run"]').disabled = true;
      btnGuardar.textContent = "Guardar Cambios";
      btnCancelar.style.display = "inline-block";
      formContainer.style.display = "block";

      Object.values(camposError).forEach(e => e.style.display = "none");
      form.querySelectorAll('input, select').forEach(input => input.classList.remove("input-error"));
    };
  }

  btnGuardar.onclick = () => {
    if (!validarFormulario()) return;
    const u = Object.fromEntries(new FormData(form));
    guardarUsuario(u);

    form.reset();
    editandoRun = null;
    form.querySelector('[name="run"]').disabled = false;
    btnGuardar.textContent = "Crear Usuario";
    btnCancelar.style.display = "none";
    formContainer.style.display = "none";
    comunaSelect.style.display = "none";
  };

  btnCancelar.onclick = () => {
    form.reset();
    editandoRun = null;
    form.querySelector('[name="run"]').disabled = false;
    btnGuardar.textContent = "Crear Usuario";
    btnCancelar.style.display = "none";
    formContainer.style.display = "none";
    comunaSelect.style.display = "none";
    Object.values(camposError).forEach(e => e.style.display = "none");
    form.querySelectorAll('input, select').forEach(input => input.classList.remove("input-error"));
  };

  cargarUsuarios();
});



