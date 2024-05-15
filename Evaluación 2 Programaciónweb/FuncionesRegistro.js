document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener los valores de los campos de entrada
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    
    // Aquí puedes realizar las acciones con los datos del usuario, como enviarlos a un servidor o guardarlos localmente
    
    // Ejemplo de impresión en la consola
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Correo Electrónico: " + correo);
    console.log("Contraseña: " + contrasena);
    
    // Restablecer el formulario
    document.getElementById("registroForm").reset();
  });