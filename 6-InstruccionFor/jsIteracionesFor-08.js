function mostrar() {
  let contadorDivisores = 0;
  let numIngr = parseInt(prompt("Ingresa un numero"));

  for (i = 1; i <= numIngr; i++) {
    if (numIngr % i == 0) {
      contadorDivisores = contadorDivisores + 1;
    }
  }
  if (contadorDivisores == 2) {
    mensaje = "El numero es primo";
  } else {
    mensaje = "El numero no es primo";
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
