function mostrar() {
  //tomo el mes
  let mesDelAño = document.getElementById("txtIdMes").value;
  let mensaje;

  switch (mesDelAño) {
    case "Febrero":
      mensaje = `Este mes no tiene más de 29 días.`;
      break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
      mensaje = "Este mes tiene 30 días.";
      break;
    default:
      mensaje = `Este mes tiene 31 días.`;
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
