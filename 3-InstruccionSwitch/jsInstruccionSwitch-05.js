function mostrar() {
  //tomo la hora
  let horaDelDia = parseInt(document.getElementById("txtIdHora").value);
  let mensaje;

  switch (horaDelDia) {
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      mensaje = "Es de mañana.";
      alert(mensaje);
      break;
  }
} //FIN DE LA FUNCIÓN
