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

// while 2 bis

function mostrar() {
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
