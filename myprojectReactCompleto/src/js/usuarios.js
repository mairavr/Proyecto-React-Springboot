function guardarUsuario(email, password) {
    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios.push({ email, password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function validarEmail(email) {
    const dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    return dominiosPermitidos.some(dominio => email.endsWith(dominio));
}

function validarPassword(password) {
    return password.length >= 4 && password.length <= 10;
}

function mostrarToast(mensaje, tipo = 'success') {
    const contenedor = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    if (tipo === 'error') toast.classList.add('error');
    toast.textContent = mensaje;
    contenedor.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}

const formLogin = document.getElementById('form-login');
const formRegistro = document.getElementById('form-registro');
const mostrarRegistro = document.getElementById('mostrar-registro');
const mostrarLogin = document.getElementById('mostrar-login');
const subtitulo = document.querySelector('.subtitulo');

mostrarRegistro.addEventListener('click', e => {
    e.preventDefault();
    formLogin.classList.add('oculto');
    formRegistro.classList.remove('oculto');
    subtitulo.textContent = 'Registro';
});

mostrarLogin.addEventListener('click', e => {
    e.preventDefault();
    formRegistro.classList.add('oculto');
    formLogin.classList.remove('oculto');
    subtitulo.textContent = 'Iniciar Sesión';
});

formRegistro.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.getElementById('nuevo-email').value.trim().toLowerCase();
    const password = document.getElementById('nueva-contraseña').value.trim();

    if (!email || !password) return mostrarToast('Por favor, complete todos los campos.', 'error');
    if (!validarEmail(email)) return mostrarToast('El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com', 'error');
    if (!validarPassword(password)) return mostrarToast('La contraseña debe tener entre 4 y 10 caracteres.', 'error');

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    if (usuarios.some(u => u.email === email)) return mostrarToast('Este correo ya está registrado.', 'error');

    guardarUsuario(email, password);
    mostrarToast('✅ ¡Registro exitoso! Ahora puedes iniciar sesión.');

    formRegistro.classList.add('oculto');
    formLogin.classList.remove('oculto');
    subtitulo.textContent = 'Iniciar Sesión';
});

formLogin.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('contraseña').value.trim();

    if (!email || !password) return mostrarToast('Por favor, complete todos los campos.', 'error');
    if (!validarEmail(email)) return mostrarToast('El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com', 'error');
    if (!validarPassword(password)) return mostrarToast('La contraseña debe tener entre 4 y 10 caracteres.', 'error');

    let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioEncontrado = usuarios.find(u => u.email === email);

    if (!usuarioEncontrado) return mostrarToast('Esta cuenta no existe. Por favor, regístrate primero.', 'error');
    if (usuarioEncontrado.password !== password) return mostrarToast('Contraseña incorrecta.', 'error');

    mostrarToast('✅ ¡Inicio de sesión exitoso!');
});
