/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  let numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
  let numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
  let numTres = parseInt(document.getElementById("txtIdPrecioTres").value);

  let numSum = numUno + numDos + numTres;

  alert(numSum);
}

function Promedio() {
  let numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
  let numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
  let numTres = parseInt(document.getElementById("txtIdPrecioTres").value);

  let numSum = numUno + numDos + numTres;
  let numProm = parseInt(numSum / 3);

  alert(numProm);
}

function PrecioFinal() {
  let numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
  let numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
  let numTres = parseInt(document.getElementById("txtIdPrecioTres").value);

  let numSum = numUno + numDos + numTres;
  let numIVA = numSum * 1.21;

  alert(numIVA);
}
