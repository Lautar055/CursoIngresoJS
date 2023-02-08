function mostrar() {
  let edad = parseInt(document.getElementById("txtIdEdad").value);
  let civil = document.getElementById("estadoCivil").value;

  if (edad < 18 && civil !== "Soltero") {
    alert("Eres muy pequeño para NO ser soltero.");
  }
} //FIN DE LA FUNCIÓN
