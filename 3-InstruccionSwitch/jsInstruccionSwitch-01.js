function mostrar() {
  //tomo el mes
  let mesDelAño = document.getElementById("txtIdMes").value;
  let mensaje;
  /* 
  if (mesDelAño == "Enero") {
    mensaje = `que comiences bien el año!!!.`;
  } else if (mesDelAño == "Marzo") {
    mensaje = `a clases!!!.`;
  } else if (mesDelAño == "Julio") {
    mensaje = `se vienen las vacaciones!!!.`;
  } else if (mesDelAño == "Diciembre") {
    mensaje = `Felices fiesta!!!.`;
  } else {
    mensaje = `${mesDelAño} es aburrido`;
  }
  alert(mensaje);
 */
  switch (mesDelAño) {
    case "Enero":
      mensaje = `que comiences bien el año!!!.`;
      break;
    case "Marzo":
      mensaje = `a clases!!!.`;
      break;
    case "Julio":
      mensaje = `se vienen las vacaciones!!!.`;
      break;
    case "Diciembre":
      mensaje = `Felices fiesta!!!.`;
      break;

    default:
      mensaje = `${mesDelAño} es aburrido`;
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
