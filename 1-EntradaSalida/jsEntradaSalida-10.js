/* Lautaro D'Andrea
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
  let importe = parseInt(document.getElementById("txtIdImporte").value);
  let valores = 0.75;
  let resul = importe * valores;

  //console.log(resul); hecho para controlar
  document.getElementById("txtIdResultado").value = parseInt(resul);
  //alert("ok");
}
