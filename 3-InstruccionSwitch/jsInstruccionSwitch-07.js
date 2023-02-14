function mostrar() {
  let destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (destinoIngresado) {
    case "Bariloche":
      mensaje = `Este lugar esta al Oeste.`;
      break;
    case "Cataratas":
      mensaje = `Este lugar esta al Norte.`;
      break;
    case "Mar del plata":
      mensaje = `Este lugar esta al Este.`;
      break;
    case "Ushuaia":
      mensaje = `Este lugar esta al Sur.`;
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
