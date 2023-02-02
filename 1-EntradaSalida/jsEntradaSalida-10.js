/* Lautaro D'Andrea
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
  let importe = parseInt(document.getElementById("txtIdImporte").value);
  //console.log(importe); hecho para controlar
  let resulDesc = importe * 0.75;
  //console.log(resulDesc); hecho para controlar
  document.getElementById("txtIdResultado").value = parseInt(resulDesc);
  //alert("ok");
}
