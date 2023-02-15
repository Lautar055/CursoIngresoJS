function mostrar() {
  let contador;
  let acumulador;
  let numeroIngresado;
  let promedio;

  contador = 0;
  acumulador = 0;
  while (contador < 5) {
    numeroIngresado = parseInt(prompt("Ingresa un numero"));

    while (isNaN(numeroIngresado)) {
      numeroIngresado = prompt("Ingresa un numero, no un texto");
    }
    acumulador = acumulador + numeroIngresado;
    contador = contador + 1;
  }
  promedio = acumulador / 5;

  document.getElementById("txtIdSuma").value = parseInt(acumulador);
  document.getElementById("txtIdPromedio").value = parseInt(promedio);
} //FIN DE LA FUNCIÓN
