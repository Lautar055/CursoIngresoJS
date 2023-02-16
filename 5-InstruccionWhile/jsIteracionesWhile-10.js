/* Lautaro D'Andrea
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
  //declarar contadores y variables
  let respuesta = "si";
  let numeroIngresado;
  let sumaNegativos = 0;
  let sumaPositivos = 0;
  let cantidadNegativos = 0;
  let cantidadPositivos = 0;
  let promedioPositivos;
  let promedioNegativos;
  let diferencia;
  let cantidadCeros = 0;
  let cantidadPares = 0;

  while (respuesta == "si") {
    numeroIngresado = parseInt(prompt("Ingresa un numero"));
    while (isNaN(numeroIngresado)) {
      numeroIngresado = parseInt(prompt("Solo puedes ingresar numeros"));
    }

    if (numeroIngresado > 0) {
      sumaPositivos = sumaPositivos + numeroIngresado;
      cantidadPositivos = cantidadPositivos + 1;
    } else if (numeroIngresado < 0) {
      sumaNegativos = sumaNegativos + numeroIngresado;
      cantidadNegativos = cantidadNegativos + 1;
    } else {
      cantidadCeros = cantidadCeros + 1;
    }

    if (numeroIngresado % 2 == 0) {
      cantidadPares = cantidadPares + 1;
    }

    respuesta = prompt("Quieres ingresar mas numeros? 'si'");
  }

  promedioPositivos = sumaPositivos / cantidadPositivos;
  promedioNegativos = sumaNegativos / cantidadNegativos;
  diferencia = sumaPositivos + sumaNegativos;

  document.write(`La suma de los negativos es ${sumaNegativos}`, "<br>");
  document.write(`La suma de los positivos es ${sumaPositivos}`, "<br>");
  document.write(
    `La cantidad total de los positivos es ${cantidadPositivos}`,
    "<br>"
  );
  document.write(
    `La cantidad total de los negativos es ${cantidadNegativos}`,
    "<br>"
  );
  document.write(`La cantidad total de los ceros es ${cantidadCeros}`, "<br>");
  document.write(
    `La cantidad total de los numeros pares es ${cantidadPares}`,
    "<br>"
  );
  document.write(
    `El promedio de los negativos es ${promedioNegativos}`,
    "<br>"
  );
  document.write(
    `El promedio de los positivos es ${promedioPositivos}`,
    "<br>"
  );
  document.write(
    `La diferencia entre los positivos y los negativos es ${diferencia}`,
    "<br>"
  );
} //FIN DE LA FUNCIÓN
