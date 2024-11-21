// Manejador de envío de formulario
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      document.getElementById('form-response').innerHTML = '<div class="alert alert-danger">Por favor completa todos los campos.</div>';
      return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('form-response').innerHTML = '<div class="alert alert-warning">Correo no válido.</div>';
      return;
    }
  
    document.getElementById('form-response').innerHTML = '<div class="alert alert-success">¡Gracias por tu mensaje!</div>';
    document.getElementById('contact-form').reset();
  });
  