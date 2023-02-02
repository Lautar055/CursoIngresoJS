/* Lautaro D'Andrea
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
  let sueldoBase = parseInt(document.getElementById("txtIdSueldo").value);
  let valores = 1.1;
  let resultadoAumento = sueldoBase * valores;

  document.getElementById("txtIdResultado").value = parseInt(resultadoAumento);

  //alert("ok");
}
