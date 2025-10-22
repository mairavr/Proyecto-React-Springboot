document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const usuario = document.getElementById('usuario').value;
  const clave = document.getElementById('clave').value;

  if (usuario === 'admin' && clave === '1234') {
    document.getElementById('login-overlay').style.display = 'none';
  } else {
    document.getElementById('login-error').style.display = 'block';
  }
});
