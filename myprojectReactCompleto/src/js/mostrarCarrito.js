document.addEventListener('DOMContentLoaded', () => {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const tbody = document.querySelector('tbody');
  const totalDiv = document.querySelector('.total');
  const btnVaciar = document.getElementById('vaciar-carrito');
  const btnFinalizar = document.getElementById('finalizar-compra');

  function renderCarrito() {
    if (!tbody || !totalDiv) return;

    tbody.innerHTML = '';
    let total = 0;

    if (carrito.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5">🛒 El carrito está vacío</td></tr>`;
      totalDiv.textContent = `Total: $0`;
      return;
    }

    carrito.forEach((producto, index) => {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal;

      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>
          <img src="${producto.imagen}" alt="${producto.nombre}" style="width:40px; height:40px; object-fit:cover; margin-right:8px;">
          ${producto.nombre}
        </td>
        <td>$${producto.precio.toLocaleString('es-CL')}</td>
        <td>${producto.cantidad}</td>
        <td>$${subtotal.toLocaleString('es-CL')}</td>
        <td><button class="btn-borrar" data-index="${index}">🗑️</button></td>
      `;
      tbody.appendChild(fila);
    });

    totalDiv.textContent = `Total: $${total.toLocaleString('es-CL')}`;

    document.querySelectorAll('.btn-borrar').forEach(boton => {
      boton.addEventListener('click', () => {
        const index = boton.dataset.index;
        carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderCarrito();
      });
    });
  }

  if (btnVaciar) {
    btnVaciar.addEventListener('click', () => {
      carrito = [];
      localStorage.removeItem('carrito');
      renderCarrito();
    });
  }

  if (btnFinalizar) {
    btnFinalizar.addEventListener('click', () => {
      if (carrito.length === 0) return;
      carrito = [];
      localStorage.removeItem('carrito');
      renderCarrito();
      const modal = document.getElementById('modal-exito');
      if (modal) modal.style.display = 'block';
    });
  }

  renderCarrito();

  const cerrarMiniBtn = document.getElementById('cerrar-mini-carrito');
  if (cerrarMiniBtn) {
    cerrarMiniBtn.addEventListener('click', cerrarMiniCarrito);
  }

  const cerrarProductoBtn = document.getElementById('cerrar-modal-producto');
  if (cerrarProductoBtn) {
    cerrarProductoBtn.addEventListener('click', cerrarModalProducto);
  }

  window.addEventListener('click', (e) => {
    const miniCarrito = document.getElementById('mini-carrito');
    const modalProducto = document.getElementById('modal-producto');

    if (e.target === miniCarrito) cerrarMiniCarrito();
    if (e.target === modalProducto) cerrarModalProducto();
  });
});

function abrirMiniCarrito() {
  const modalProducto = document.getElementById('modal-producto');
  if (modalProducto) modalProducto.style.display = 'none';

  const resumenDiv = document.getElementById('resumen-carrito');
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  if (!resumenDiv) return;

  if (carrito.length === 0) {
    resumenDiv.innerHTML = '<p style="width:auto; margin:0; text-align:center;">🛒 Tu carrito está vacío</p>';
  } else {
    resumenDiv.innerHTML = carrito.map(p => `
      <div style="display:flex; align-items:center; margin-bottom:10px;">
        <img src="${p.imagen}" style="width:40px; height:40px; object-fit:cover; margin-right:8px;">
        <span>${p.nombre} x${p.cantidad}</span>
      </div>
    `).join('');
  }

  const modal = document.getElementById('mini-carrito');
  if (modal) modal.style.display = 'block';
}

function cerrarMiniCarrito() {
  const modal = document.getElementById('mini-carrito');
  if (modal) modal.style.display = 'none';
}

function irAlCarrito() {
  window.location.href = 'carrito.html';
}

function cerrarModal() {
  const modal = document.getElementById('modal-exito');
  if (modal) modal.style.display = 'none';
}

function cerrarModalProducto() {
  const modal = document.getElementById('modal-producto');
  if (modal) modal.style.display = 'none';
}



