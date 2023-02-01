/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {
  let numUno = document.getElementById("txtIdNumeroUno").value;
  let numDos = document.getElementById("txtIdNumeroDos").value;

  numUno = parseInt(numUno);
  numDos = parseInt(numDos);

  let resultadoSuma = numUno + numDos;
  let mensaje = `El resultado de la suma es ${resultadoSuma}.`;

  alert(mensaje);
}

function restar() {
  let numUno = document.getElementById("txtIdNumeroUno").value;
  let numDos = document.getElementById("txtIdNumeroDos").value;

  numUno = parseInt(numUno);
  numDos = parseInt(numDos);

  let resultadoResta = numUno - numDos;
  let mensaje = `El resultado de la suma es ${resultadoResta}.`;

  alert(mensaje);
}
function multiplicar() {
  let numUno = document.getElementById("txtIdNumeroUno").value;
  let numDos = document.getElementById("txtIdNumeroDos").value;

  numUno = parseInt(numUno);
  numDos = parseInt(numDos);

  let resultadoMultipli = numUno * numDos;
  let mensaje = `El resultado de la suma es ${resultadoMultipli}.`;

  alert(mensaje);
}

function dividir() {
  let numUno = document.getElementById("txtIdNumeroUno").value;
  let numDos = document.getElementById("txtIdNumeroDos").value;

  numUno = parseInt(numUno);
  numDos = parseInt(numDos);

  let resultadoDivi = numUno / numDos;
  let mensaje = `El resultado de la suma es ${resultadoDivi}.`;

  alert(mensaje);
}
