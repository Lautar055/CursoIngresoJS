function mostrar() {
  let contadorDivisores = 0;
  let numIngr = parseInt(prompt("Ingresa un numero"));

  for (i = 1; i <= numIngr; i++) {
    if (numIngr % i == 0) {
      alert(i);
      contadorDivisores = contadorDivisores + 1;
    }
  }
  alert(`Los numeros Divisores fueron ${contadorDivisores}`);
} //FIN DE LA FUNCIÓN
