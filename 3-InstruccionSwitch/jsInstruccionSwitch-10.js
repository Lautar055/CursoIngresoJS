function mostrar() {
  let estacion = document.getElementById("txtIdEstacion").value;
  let destinoIngresado = document.getElementById("txtIdDestino").value;
  let mensaje = "Hubo un error";

  switch (estacion) {
    case "Invierno":
      switch (destinoIngresado) {
        case "Bariloche":
          mensaje = "SI se viaja";
          break;

        default:
          mensaje = "NO se viaja";
      }
      break;
      break;

    case "Verano":
      switch (destinoIngresado) {
        case "Cataratas":
        case "Mar del plata":
          mensaje = "SI se viaja";
          break;

        default:
          mensaje = "NO se viaja";
      }
      break;

    case "Otoño":
      mensaje = "SI se viaja";
      break;

    default:
      switch (destinoIngresado) {
        case "Bariloche":
          mensaje = "NO se viaja";
          break;

        default:
          mensaje = "SI se viaja";
      }
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
