//Lautaro D'Andrea
function mostrar() {
  let max = 10;
  let min = 1;
  //let num = Math.round(Math.random() * max);
  let num = Math.floor(Math.random() * max + min);
  //let num = Math.ceil(Math.random() * max);
  let mensaje = " hubo un error";

  if (num == 9 || num == 10) {
    mensaje = `EXCELENTE (${num})`;
  } else if (num > 4) {
    mensaje = `APROBÓ (${num})`;
  } else {
    mensaje = `Vamos, la proxima se puede (${num})`;
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
