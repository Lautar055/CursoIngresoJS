/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
  //definicion de variables
  let edadIngresada = parseInt(prompt("Ingresa tu edad"));
  let sexoIngresado = prompt("Ingresa tu sexo");
  let estadoCivilIngresado = parseInt(
    prompt(
      "Ingresa un Estado Civil (1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)"
    )
  );
  let estadoCivil;
  let sueldoIngresado = parseInt(prompt("Ingresa tu sueldo"));
  let legajoIngresado = parseInt(prompt("Ingresa tu legajo"));
  let nacionalidadIngresada = prompt(
    "Ingresa tu nacionalidad “A” para argentinos, “E” para extranjeros, “N”"
  );
  let nacionalidad;

  while (isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90) {
    edadIngresada = parseInt(prompt("Ingresa una edad valida"));
  }

  while (
    (!isNaN(sexoIngresado) || sexoIngresado != "f") &&
    sexoIngresado != "m"
  ) {
    sexoIngresado = prompt("Ingresa un sexo valido");
  }

  while (
    isNaN(estadoCivilIngresado) ||
    estadoCivilIngresado > 4 ||
    estadoCivilIngresado < 0
  ) {
    estadoCivilIngresado = parseInt(
      prompt(
        "Ingresa un Estado Civil valido 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"
      )
    );
  }

  switch (estadoCivilIngresado) {
    case 1:
      estadoCivil = "Soltero";
      break;
    case 2:
      estadoCivil = "Casado";
      break;
    case 3:
      estadoCivil = "Divorciado";
      break;
    case 4:
      estadoCivil = "Viudo";
      break;
  }

  while (sueldoIngresado < 8000) {
    sueldoIngresado = parseInt(prompt("Ingresa tu sueldo verdadero"));
  }

  while (legajoIngresado < 1000 || legajoIngresado > 9999) {
    legajoIngresado = parseInt(prompt("Ingresa tu legajo correctamente"));
  }

  while (
    (!isNaN(nacionalidadIngresada) || nacionalidadIngresada != "A") &&
    nacionalidadIngresada != "E" &&
    nacionalidadIngresada != "N"
  ) {
    nacionalidadIngresada = prompt(
      "Ingresa tu nacionalidad correctamente “A” para argentinos, “E” para extranjeros, “N”"
    );
  }

  switch (nacionalidadIngresada) {
    case "A":
      nacionalidad = "Argentino";
      break;
    case "E":
      nacionalidad = "Extrangeros";
      break;
    case "N":
      nacionalidad = "Nacionalizados";
      break;
  }

  document.getElementById("txtIdEdad").value = edadIngresada;
  document.getElementById("txtIdSexo").value = sexoIngresado;
  document.getElementById("txtIdEstadoCivil").value = estadoCivil;
  document.getElementById("txtIdSueldo").value = sueldoIngresado;
  document.getElementById("txtIdLegajo").value = legajoIngresado;
  document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
/* if (estadoCivilIngresado == 1) {
  estadoCivilIngresado == "Soltero";
} else if (estadoCivilIngresado == 2) {
  estadoCivilIngresado == "Casado";
} else if (estadoCivilIngresado == 3) {
  estadoCivilIngresado == "Divorciado";
} else if (estadoCivilIngresado == 4) {
  estadoCivilIngresado == "Viudo";
} */
