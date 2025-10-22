const catalogo = document.getElementById('catalogo');
const modalProducto = document.getElementById('modal-producto');
const modalImg = document.getElementById('modal-img');
const modalNombre = document.getElementById('modal-nombre');
const modalPrecio = document.getElementById('modal-precio');
const modalDescripcion = document.getElementById('modal-descripcion');

function mostrarToast(mensaje, tipo = 'success') {
  const contenedor = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.classList.add('toast');
  if (tipo === 'error') toast.classList.add('error');
  toast.textContent = mensaje;
  contenedor.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

productos.forEach((producto, i) => {
  const div = document.createElement('div');
  div.className = 'producto';
  div.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" style="cursor:pointer" data-index="${i}">
    <p class="precio">$${producto.precio.toLocaleString('es-CL')}</p>
    <p>${producto.nombre}</p>
    <button class="btn-carrito" data-index="${i}">Añadir al carrito</button>
  `;
  catalogo.appendChild(div);
});

catalogo.addEventListener('click', function(e) {

  if (e.target.tagName === 'IMG' && e.target.dataset.index !== undefined) {
    const prod = productos[e.target.dataset.index];
    modalImg.src = prod.imagen;
    modalNombre.textContent = prod.nombre;
    modalPrecio.textContent = "Precio: $" + prod.precio.toLocaleString('es-CL');
    modalDescripcion.textContent = prod.descripcion;
    modalProducto.style.display = 'block';
  }

  if (e.target.classList.contains('btn-carrito')) {
    const index = e.target.dataset.index;
    const producto = productos[index];
    if (!producto || !producto.nombre || !producto.precio) {
      return mostrarToast('❌ Error al agregar el producto.', 'error');
    }

    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    const existente = carrito.find(item => item.nombre === producto.nombre);

    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.push({
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1,
        imagen: producto.imagen
      });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarToast(`🛒 ${producto.nombre} añadido al carrito`);
  }
});

document.getElementById('cerrar-modal-producto').onclick = () => {
  modalProducto.style.display = 'none';
};
