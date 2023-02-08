function mostrar() {
  let edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad < 18 && edad >= 13) {
    alert("Sos adolescente");
  }
} //FIN DE LA FUNCIÓN
