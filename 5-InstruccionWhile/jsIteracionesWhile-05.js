/*
Al presionar el botón pedir un sexo Lautaro D'Andrea
'f' para femenino, 'm' para masculino.*/
function mostrar() {
  let sexo = prompt("Porfavor Ingrese 'f' para femenino o 'm' para masculino.");
  console.log(sexo);

  //No se porque pero si lo hago con ||, no me funciona y con && por alguna razon si
  while (sexo != "f" && sexo != "m") {
    sexo = prompt("Porfavor Ingrese 'f' para femenino o 'm' para masculino.");
  }

  document.getElementById("txtIdSexo").value = sexo;
} //FIN DE LA FUNCIÓN
