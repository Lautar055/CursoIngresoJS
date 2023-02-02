/*2.	Para el departamento de Construcción: Lautaro D'Andrea
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  let numUno = parseInt(document.getElementById("txtIdLargo").value);
  let numDos = parseInt(document.getElementById("txtIdAncho").value);

  let rectAlabre = (numUno + numDos) * 2 * 3;
  alert(`Se van a necesitar ${rectAlabre}m de alambre para hacer tres bueltas`);
}
function Circulo() {
  let numTres = parseInt(document.getElementById("txtIdRadio").value);

  let diametro = numTres * 2;
  let circunferencia = diametro * Math.PI;
  circunferencia = parseInt(circunferencia);
  let circunAlam = circunferencia * 3;

  alert(`Se van a necesitar ${circunAlam}m de alambre para hacer tres bueltas`);
}

function Materiales() {
  let numUno = parseInt(document.getElementById("txtIdLargo").value);
  let numDos = parseInt(document.getElementById("txtIdAncho").value);

  let area = numUno * numDos;
  let bolsasCal = area * 3;
  let bolsasCem = area * 2;

  alert(
    `Se van a necesitar ${bolsasCem} bolsas de cemento y ${bolsasCal} bolsas de cal pra el terreno de area ${area} metros cuadrados`
  );
}
