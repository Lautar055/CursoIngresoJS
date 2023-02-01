/* Lautaro D'Andrea
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
  nombreIngresado = document.getElementById("txtIdNombre").value;
  edadIngresada = document.getElementById("txtIdEdad").value;

  mensaje = `Hola ${nombreIngresado} y que tenes ${edadIngresada} años`;
  alert(mensaje);
}
