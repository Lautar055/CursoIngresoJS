function mostrar() {
  //tomo el mes
  let mesDelAño = document.getElementById("txtIdMes").value;
  let mensaje;

  switch (mesDelAño) {
    case "Marzo":
    case "Abril":
    case "Mayo":
      mensaje = "Falta para el invierno.";
      break;

    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
      mensaje = "Abrigate que hace frio.";
      break;

    case "Octubre":
    case "Noviembre":
    case "Diciembre":
      mensaje = "Ya pasamos el frio, ahora calor!!!.";
      break;

    case "Enero":
    case "Febrero":
      mensaje = "Ya pasamos el frio, ahora calor!!!.";
      break;

    default:
      mensaje = `${mesDelAño} es aburrido`;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
