/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
  let numeroIngresado = prompt("ingrese un número entre 0 y 10.");
  let mensaje;

  while (numeroIngresado > 10 || numeroIngresado < 0) {
    numeroIngresado = prompt("ingrese un número entre 0 y 9!!");
  }

  mensaje = `El numero ${numeroIngresado} esta entre 0 y 9`;
  document.getElementById("txtIdNumero").value = mensaje;
} //FIN DE LA FUNCIÓN
