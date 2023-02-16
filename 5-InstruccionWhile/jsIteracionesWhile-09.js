/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  // declarar variables
  /*   let banderaDelPrimero;
  let numeroIngresado;
  let numeroMaximo;
  let numeroMinimo;
  let respuesta;
 */
  //iniciar variables
  /*   banderaDelPrimero = true;
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
  document.getElementById("txtIdMinimo").value = numeroMinimo; */
} //FIN DE LA FUNCIÓN

//While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
//mostrar el número máximo y el número mínimo ingresado.
//El menor de los pares y el mayor de los negativos ...(solo si hay)

function mostrar() {
  let banderaDelPrimero = true;
  let numeroIngresado;
  let numeroMaximo;
  let numeroMinimo;
  let respuesta = "si";
  let banderaDelPar = true;
  let minPar;
  let banderaDelNega = true;
  let maxNega;

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

    if (numeroIngresado % 2 == 0) {
      if (banderaDelPar == true) {
        minPar = numeroIngresado;
        banderaDelPar = false;
      } else if (minPar > numeroIngresado) {
        minPar = numeroIngresado;
      }
    }

    if (numeroIngresado < 0) {
      if (banderaDelNega == true) {
        maxNega = numeroIngresado;
        banderaDelNega = false;
      } else if (maxNega < numeroIngresado) {
        maxNega = numeroIngresado;
      }
    }

    respuesta = prompt("desea continuar? 'si'");
  }

  document.getElementById("txtIdMaximo").value = numeroMaximo;
  document.getElementById("txtIdMinimo").value = numeroMinimo;
  alert(
    `El menor de los pares es ${minPar} y el mayor de los negativos es ${maxNega}`
  );
}
