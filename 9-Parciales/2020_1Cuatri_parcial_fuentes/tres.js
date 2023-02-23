/* Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros */

function mostrar() {
  let nombre;
  let edad;
  let sexo;
  let estadoCivil;
  let temperaturaCorporal;
  let respuesta = "si";
  let banderaTemperatura = true;
  let maxTemperatura;
  let nombreMaxTemperatura;
  let contadorHombresSolterosViudos = 0;
  let contadorViejosFiebre = 0;
  let acumuladorEdadHombres = 0;
  let promedioSolteros;
  let contadorHombresSolteros = 0;
  let contadorViudosTotal = 0;

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
      nombreMaxTemperatura = nombre;
      banderaTemperatura = false;
    } else if (maxTemperatura < temperaturaCorporal) {
      maxTemperatura = temperaturaCorporal;
      nombreMaxTemperatura = nombre;
    }
    switch (estadoCivil) {
      case "viudo":
        if (sexo == "m") {
          contadorHombresSolterosViudos = contadorHombresSolterosViudos + 1;
        }
        if (edad > 17) {
          contadorViudosTotal = contadorViudosTotal + 1;
        }
        contadorHombresSolterosViudos = contadorHombresSolterosViudos + 1;
        break;
      case "soltero":
        contadorHombresSolterosViudos = contadorHombresSolterosViudos + 1;
        contadorHombresSolteros = contadorHombresSolteros + 1;
    }

    if (edad > 60 && temperaturaCorporal > 38) {
      contadorViejosFiebre = contadorViejosFiebre + 1;
    }

    respuesta = prompt("¿Hay mas pasajeros? 'si'");
  }

  promedioSolteros = acumuladorEdadHombres / contadorHombresSolteros;

  console.log(
    `La persona con mas temperatura fue ${nombreMaxTemperatura} con ${maxTemperatura} grados`
  );
  console.log(
    `La cantidad de mayores de edad viudos es ${contadorViudosTotal} y el total de hombres solteros o viudos es ${contadorHombresSolterosViudos}`
  );
  console.log(
    `La cantidad de viejos con mas de 38° es: ${contadorViejosFiebre}`
  );
  console.log(
    `El promedio de edad de los hombres solteros es ${promedioSolteros} años`
  );
}
/* if (edad > 17 && estadoCivil == "viudo") {
  contadorHombresViudos = contadorHombresViudos + 1;
}

if (estadoCivil == "viudo" || estadoCivil == "soltero") {
  contadorHombresSolterosViudos = contadorHombresSolterosViudos + 1;
  acumuladorEdadHombres = acumuladorEdadHombres + edad;
} */
