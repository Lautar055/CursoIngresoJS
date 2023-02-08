function mostrar() {
  let num = Math.round(Math.random() * 11);
  let mensaje = " hubo un error";
  console.log(num);

  if (num == 9 || num == 10) {
    mensaje = "Exelente";
  } else if (num < 4) {
    mensaje = "Aprobó";
  } else {
    mensaje = "Vamos, la proxima se puede";
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
