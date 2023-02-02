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

/* Ejercicio 10.bis: Debemos lograr tomar el importe por ID. Lautaro D'Andrea
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO */

function mostrarAumento() {
  let importe = parseInt(document.getElementById("txtIdImporte").value);
  let valores = parseInt(
    prompt(
      "De cuanto es el porcentaje, en caso de saer negativo introduzca un menos"
    )
  );

  valores = 1 + valores / 100;

  let resul = importe * valores;

  //console.log(resul); hecho para controlar
  document.getElementById("txtIdResultado").value = parseInt(resul);
  //alert("ok");
}
