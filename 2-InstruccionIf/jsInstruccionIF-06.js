//Lautaro D'Andrea
function mostrar() {
  let edad = parseInt(document.getElementById("txtIdEdad").value);
  let Mensaje = "hubo un error";

  if (edad >= 18) {
    Mensaje = "Sos mayor de edad";
  } else if (edad < 18 && edad >= 13) {
    Mensaje = "Sos adolescente";
  } else {
    Mensaje = "Sos un niño";
  }
  alert(Mensaje);
} //FIN DE LA FUNCIÓN
