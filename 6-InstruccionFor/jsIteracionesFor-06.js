//Lautaro D'Andrea
/* al presionar el botón pedir un número. mostrar los numeros 
pares desde el 1 al número ingresado, y mostrar la cantidad
de numeros pares encontrados. */
function mostrar() {
  let contadorPares = 0;
  let numIngr = parseInt(prompt("Ingresa un numero"));

  for (i = 1; i <= numIngr; i++) {
    if (i % 2 == 0) {
      alert(i);
      contadorPares = contadorPares + 1;
    }
  }
  alert(`Los numeros pares fueron ${contadorPares}`);
} //FIN DE LA FUNCIÓN
