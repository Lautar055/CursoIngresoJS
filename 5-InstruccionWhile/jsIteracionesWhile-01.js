/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
/* function mostrar() {
  num = 0;

  while (num < 10) {
    num = num + 1;
    alert(num);
  }
} */

// While 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven
function mostrar() {
  let numeroIngresado = 0;
  let nomIng;
  let bandera = true;
  let edadMax;
  let edadMin;
  let nombreMax;
  let nombreMin;
  let respuesta = "si";

  while (respuesta == "si") {
    numeroIngresado = parseInt(prompt("Ingresa una edad"));
    while (isNaN(numeroIngresado)) {
      numeroIngresado = parseInt(prompt("Ingresa una edad valida"));
    }
    nomIng = prompt("ingresa el nombre");
    while (!isNaN(nomIng)) {
      nomIng = prompt("ingresa un nombre valido");
    }
    if (bandera == true) {
      edadMax = numeroIngresado;
      edadMin = numeroIngresado;
      nombreMax = nomIng;
      nombreMin = nomIng;
      bandera = false;
    } else if (edadMax < numeroIngresado) {
      edadMax = numeroIngresado;
      nombreMax = nomIng;
    } else if (edadMin > numeroIngresado) {
      edadMin = numeroIngresado;
      nombreMin = nomIng;
    }

    respuesta = prompt("quieres añadir a mas personas? si/no");
  }

  alert(`la persona mayor es ${nombreMax} con ${edadMax} años`);
  alert(`la persona menor es ${nombreMin} con ${edadMin} años`);
}
