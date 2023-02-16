/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
/* function mostrar() {
  num = 11;

  while (num > 1) {
    num = num - 1;
    alert(num);
  }
} */ //FIN DE LA FUNCIÓN

// while 2 bis Ingresar 5 números, y
//determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos)

/* function mostrar() {
  let contador = 5;
  let numeroIngresado;
  let contadorSecundario = 0;

  while (contador > 0) {
    numeroIngresado = prompt("ingresa un numero");

    if (numeroIngresado > 10 && numeroIngresado < 20) {
      contadorSecundario = contadorSecundario + 1;
    }
    contador = contador - 1;
  }
  alert(
    `Se ingresaron ${contadorSecundario} numeros mayores de 10 y menores de 20`
  );
}
 */
// while 2 bis bis Ingresar numeros hasta que el usuario quiera.
//eterminar la cantidad de números que son mayores que 10 y menores 20
//(inclusive en ambos casos). También el promedio de los
//números que cumplen la condición anterior.

function mostrar() {
  let respuesta = "si";
  let numeroIngresado;
  let contadorCumplen = 0;
  let sumaCumplen = 0;
  let promedioCumplen;

  while (respuesta == "si") {
    numeroIngresado = parseInt(prompt("ingresa un numero"));
    while (isNaN(numeroIngresado)) {
      numeroIngresado = parseInt(prompt("ingresa un numero valido"));
    }

    if (numeroIngresado > 10 && numeroIngresado < 20) {
      contadorCumplen = contadorCumplen + 1;
      sumaCumplen = sumaCumplen + numeroIngresado;
    }

    respuesta = prompt("quieres ingresar mas numeros? si/no");
  }

  promedioCumplen = sumaCumplen / contadorCumplen;

  alert(
    `Se ingresaron ${contadorCumplen} numeros mayores de 10 y menores de 20 y el promedio de los unmeros es ${promedioCumplen}`
  );
}
