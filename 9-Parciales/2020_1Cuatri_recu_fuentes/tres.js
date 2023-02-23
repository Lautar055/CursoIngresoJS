/* Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas. */

function mostrar() {
  let nombre;
  let edad;
  let nacionalidad;
  let sexo;
  let estadoCivil;
  let temperaturaCorporal;
  let respuesta = "si";
  let banderaTemperatura = true;
  let maxTemperatura;
  let nacionalidadMaxTemperatura;
  let contadorMujeresSolterosViudos = 0;
  let contadorViejosFiebre = 0;
  let acumuladorEdadMujeresCasadas = 0;
  let promedioCasadas;
  let contadorCasadas = 0;
  let contadorSolteros = 0;

  while (respuesta == "si") {
    nombre = prompt("Ingresa un nombre");
    while (!isNaN(nombre)) {
      nombre = prompt("Ingresa un nombre valido");
    }

    edad = parseInt(prompt("Ingresa tu edad"));
    while (isNaN(edad) || edad < 1 || edad > 130) {
      edad = parseInt(
        prompt("Ingresa una edad valida (Mayor a uno y Menor a 130)")
      );
    }

    nacionalidad = prompt(
      "Ingresa tu nacionalidad ('A' - argentino / 'E' - extrangero)"
    );
    while (
      !isNaN(nacionalidad) ||
      (nacionalidad != "A" && nacionalidad != "E")
    ) {
      nacionalidad = prompt(
        "Ingresa una nacionalidad valida ('A' - argentino / 'E' - extrangero)"
      );
    }

    sexo = prompt("Ingresa tu sexo: 'f' o 'm'.");
    while (!isNaN(sexo) || (sexo != "f" && sexo != "m")) {
      sexo = prompt("Ingresa un sexo valido: 'f' o 'm'.");
    }

    estadoCivil = prompt(
      "Ingresa tu estado civil 'soltero', 'casado' o 'viudo'."
    );
    while (
      !isNaN(estadoCivil) ||
      (estadoCivil != "soltero" &&
        estadoCivil != "casado" &&
        estadoCivil != "viudo")
    ) {
      estadoCivil = prompt(
        "Ingresa un estado civil valido: 'soltero', 'casado' o 'viudo'."
      );
    }

    temperaturaCorporal = parseInt(prompt("Ingresa la temperatura corporal"));
    while (
      isNaN(temperaturaCorporal) ||
      temperaturaCorporal < 32 ||
      temperaturaCorporal > 50
    ) {
      temperaturaCorporal = parseInt(
        prompt("Ingresa una temperatura corporal valida")
      );
    }

    if (banderaTemperatura == true) {
      maxTemperatura = temperaturaCorporal;
      nacionalidadMaxTemperatura = nacionalidad;
      banderaTemperatura = false;
    } else if (maxTemperatura < temperaturaCorporal) {
      maxTemperatura = temperaturaCorporal;
      nombreMaxTemperatura = nombre;
    }
    switch (estadoCivil) {
      case "casado":
        if (sexo == "f") {
          acumuladorEdadMujeresCasadas = acumuladorEdadMujeresCasadas + edad;
          contadorCasadas = contadorCasadas + 1;
        }
        break;
      case "viudo":
        if (sexo == "f") {
          contadorMujeresSolterosViudos = contadorMujeresSolterosViudos + 1;
        }
        break;
      case "soltero":
        if (sexo == "f") {
          contadorMujeresSolterosViudos = contadorMujeresSolterosViudos + 1;
        }
        if (edad > 17) {
          contadorSolteros = contadorSolteros + 1;
        }
    }

    if (edad > 60 && temperaturaCorporal > 38) {
      contadorViejosFiebre = contadorViejosFiebre + 1;
    }

    respuesta = prompt("¿Hay mas pasajeros? 'si'");
  }

  promedioCasadas = acumuladorEdadMujeresCasadas / contadorCasadas;

  console.log(
    `La persona con mas temperatura fue ${nacionalidadMaxTemperatura} con ${maxTemperatura} grados`
  );
  console.log(
    `La cantidad de mayores de edad solteros es ${contadorSolteros} y el total de solteras o viudas es ${contadorHombresSolterosViudos}`
  );
  console.log(
    `La cantidad de viejos con mas de 38° es: ${contadorViejosFiebre}`
  );
  console.log(
    `El promedio de edad de los hombres solteros es ${promedioCasadas} años`
  );
}
