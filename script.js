document.addEventListener('DOMContentLoaded', function() {
    console.log('La página ha cargado completamente.');
  
    // Ejemplo de validación de formulario
    const formulario = document.getElementById('formulario');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe
  
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;
  
      if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
      }
  
      // Aquí puedes enviar los datos del formulario a tu servidor o realizar otras acciones
      console.log('Nombre:', nombre);
      console.log('Email:', email);
      console.log('Mensaje:', mensaje);
  
      // Limpiar el formulario después de enviar
      document.getElementById('nombre').value = '';
      document.getElementById('email').value = '';
      document.getElementById('mensaje').value = '';
    });
  
    // Otras implementaciones de JavaScript
  
  });
  