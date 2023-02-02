/*1.	Para el departamento de facturación: Lautaro D'Andrea
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  let numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
  let numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
  let numTres = parseInt(document.getElementById("txtIdPrecioTres").value);

  let numSum = numUno + numDos + numTres;

  alert(`la suma de los precios es ${numSum}`);
}

function Promedio() {
  let numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
  let numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
  let numTres = parseInt(document.getElementById("txtIdPrecioTres").value);

  let numSum = numUno + numDos + numTres;
  let numProm = parseInt(numSum / 3);

  alert(`el promedio de precios es ${numProm}`);
}

function PrecioFinal() {
  let numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
  let numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
  let numTres = parseInt(document.getElementById("txtIdPrecioTres").value);

  let numSum = numUno + numDos + numTres;
  let numIVA = numSum * 1.21;

  alert(`el precio final (+IVA) es ${numIVA}`);
}
