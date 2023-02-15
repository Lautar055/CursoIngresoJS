/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let contador;
  let respuesta;
  let sumaPositivos;
  let multiplicacionNegativos;
  let numeroActual;

  contador = 0;
  sumaPositivos = 0;
  multiplicacionNegativos = 1;
  respuesta = "si";

  while (respuesta == "si") {
    numeroActual = parseInt(prompt("Ingresa un numero"));
    while (isNaN(numeroActual)) {
      numeroActual = parseInt(prompt("Ingresa un numero"));
    }

    if (numeroActual >= 0) {
      sumaPositivos = sumaPositivos + numeroActual;
    } else if (numeroActual < 0) {
      multiplicacionNegativos = multiplicacionNegativos * numeroActual;
    }

    respuesta = prompt("queres agregar más numeros? 'si' ");
    contador = contador + 1;
    console.log(contador);
  }

  document.getElementById("txtIdSuma").value = sumaPositivos;
  document.getElementById("txtIdProducto").value = multiplicacionNegativos;
} //FIN DE LA FUNCIÓN
