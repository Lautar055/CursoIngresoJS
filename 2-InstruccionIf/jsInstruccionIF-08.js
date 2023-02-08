function mostrar() {
  let edad = parseInt(document.getElementById("txtIdEdad").value);
  let civil = document.getElementById("estadoCivil").value;

  if (edad >= 18 && civil === "Soltero") {
    alert("Es soltero y no es menor.");
  }
} //FIN DE LA FUNCIÓN
