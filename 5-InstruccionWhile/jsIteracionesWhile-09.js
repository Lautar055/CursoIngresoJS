/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  // declarar variables
  let banderaDelPrimero;
  let numeroIngresado;
  let numeroMaximo;
  let numeroMinimo;
  let respuesta;

  //iniciar variables
  banderaDelPrimero = true;
  respuesta = "si";

  while (respuesta == "si") {
    numeroIngresado = parseInt(prompt("Ingresa un numero"));

    while (isNaN(numeroIngresado)) {
      numeroIngresado = parseInt(prompt("Ingresa un numero"));
    }

    if (banderaDelPrimero == true) {
      numeroMaximo = numeroIngresado;
      numeroMinimo = numeroIngresado;
      banderaDelPrimero = false;
    } else if (numeroMaximo < numeroIngresado) {
      numeroMaximo = numeroIngresado;
    } else if (numeroMinimo > numeroIngresado) {
      numeroMinimo = numeroIngresado;
    }

    respuesta = prompt("desea continuar? 'si'");
  }

  document.getElementById("txtIdMaximo").value = numeroMaximo;
  document.getElementById("txtIdMinimo").value = numeroMinimo;
} //FIN DE LA FUNCIÓN
