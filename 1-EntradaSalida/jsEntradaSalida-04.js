/* Lautaro D'Andrea
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
  let DatoIngresado = prompt("Ingresa un dato");
  document.getElementById("txtIdNombre").value = DatoIngresado;

  //mensaje = `Usted ingreso el dato: ${DatoIngresado}`;
  //alert(nombreIngresado);
  //  nombreIngresado = document.getElementById("txtIdNombre").value; Entrada
  //  document.getElementById("txtIdNombre").value = nombreIngresado; Salida
}
