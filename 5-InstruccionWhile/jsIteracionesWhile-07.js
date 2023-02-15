/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  let contador;
  let acumulador;
  let respuesta;
  let numeroActual;
  contador = 0;
  acumulador = 0;
  respuesta = "si";

  while (respuesta == "si") {
    numeroActual = parseInt(prompt("Ingresa un numero"));
    while (isNaN(numeroActual)) {
      numeroActual = parseInt(prompt("Ingresa un numero"));
    }

    respuesta = prompt("queres agregar más numeros? 'si' ");
    contador = contador + 1;
    acumulador = acumulador + numeroActual;
  }

  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = acumulador / contador;
} //FIN DE LA FUNCIÓN
