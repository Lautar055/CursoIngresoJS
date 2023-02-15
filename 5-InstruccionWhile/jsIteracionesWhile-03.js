/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
  let claveIngresada = prompt("ingrese el número clave.");

  while (claveIngresada !== "utn750") {
    claveIngresada = prompt("ingrese la clave correcta");
  }
  alert("Bienvenido");
} //FIN DE LA FUNCIÓN
