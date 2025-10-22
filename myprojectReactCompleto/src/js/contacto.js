document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contacto');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const comentarioInput = document.getElementById('comentario');
    const nombreError = document.getElementById('nombre-error');
    const emailError = document.getElementById('email-error');
    const comentarioError = document.getElementById('comentario-error');
    const successMessage = document.getElementById('success-message');
    const charCounter = document.getElementById('char-counter');
    

    charCounter.textContent = `0/300`;
    
    comentarioInput.addEventListener('input', function() {
        const length = comentarioInput.value.length;
        charCounter.textContent = `${length}/300`;
        
        if (length > 250) {
            charCounter.style.color = '#ff9e6b';
        } else if (length > 290) {
            charCounter.style.color = '#ff6b6b';
        } else {
            charCounter.style.color = 'rgba(255, 255, 255, 0.7)';
        }
        
        validateComentario();
    });
    
    nombreInput.addEventListener('input', function() {
        validateNombre();
    });
    
    emailInput.addEventListener('input', function() {
        validateEmail();
    });
    
    comentarioInput.addEventListener('input', function() {
        validateComentario();
    });
    
  
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        if (!validateNombre()) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validateComentario()) isValid = false;
        
        if (isValid) {
            successMessage.style.display = 'block';
            form.reset();
            charCounter.textContent = '0/300';
            charCounter.style.color = 'rgba(255, 255, 255, 0.7)';
            
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
    
    function validateNombre() {
        const nombreValue = nombreInput.value.trim();
        const letrasRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
        
        if (nombreValue.length < 2) {
            nombreError.textContent = 'El nombre debe tener al menos 2 caracteres';
            nombreError.style.display = 'block';
            nombreInput.classList.add('input-error');
            return false;
        } else if (!letrasRegex.test(nombreValue)) {
            nombreError.textContent = 'ERROR: El nombre no puede contener números ni caracteres especiales';
            nombreError.style.display = 'block';
            nombreInput.classList.add('input-error');
            return false;
        } else {
            nombreError.style.display = 'none';
            nombreInput.classList.remove('input-error');
            return true;
        }
    }
    
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(emailValue)) {
            emailError.textContent = 'Por favor ingresa un correo electrónico válido';
            emailError.style.display = 'block';
            emailInput.classList.add('input-error');
            return false;
        } else {
            emailError.style.display = 'none';
            emailInput.classList.remove('input-error');
            return true;
        }
    }
    
    function validateComentario() {
        const comentarioValue = comentarioInput.value.trim();
        if (comentarioValue.length < 10) {
            comentarioError.textContent = 'El comentario debe tener al menos 10 caracteres';
            comentarioError.style.display = 'block';
            comentarioInput.classList.add('input-error');
            return false;
        } else if (comentarioValue.length > 300) {
            comentarioError.textContent = 'El comentario no puede tener más de 300 caracteres';
            comentarioError.style.display = 'block';
            comentarioInput.classList.add('input-error');
            return false;
        } else {
            comentarioError.style.display = 'none';
            comentarioInput.classList.remove('input-error');
            return true;
        }
    }
});