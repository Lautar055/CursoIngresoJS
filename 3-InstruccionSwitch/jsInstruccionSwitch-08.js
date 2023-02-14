function mostrar() {
  let destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (destinoIngresado) {
    case "Bariloche":
    case "Ushuaia":
      mensaje = `En este lugar hace Frio.`;
      break;
    default:
      mensaje = `En este lugar hace Calor.`;
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
