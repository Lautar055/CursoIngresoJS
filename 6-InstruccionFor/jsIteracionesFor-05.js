/* function mostrar() {
  let repetir;

  for (i = 0; i < 1000; i++) {
    repetir = parseInt(prompt("escriba un numero 9 es para parar"));
    while (isNaN(repetir)) {
      repetir = parseInt(prompt("tiene que ser un numero no texto"));
    }
    if (repetir == 9) {
      break;
    }
  }
} */ //FIN DE LA FUNCIÓN

/* For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log:
 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) La cantidad de alumnos desaprobados (nota < 4) */

function mostrar() {
  let nota;
  let sexo;
  let banderaMal = true;
  let notaPeor;
  let sexoDelPeor;
  let contAproVar = 0;
  let sumaNotas = 0;
  let promedioNotas;
  let contadorDesa = 0;

  for (i = 7; i > 0; i--) {
    nota = parseInt(prompt("escriba la nota del estudiantes"));
    while (isNaN(nota) || nota > 10 || nota < 0) {
      nota = parseInt(prompt("tiene que ser un numero valido"));
    }

    sexo = prompt("escriba el sexo del estudiante 'f' o 'm' o 'b' ");
    while (!isNaN(sexo)) {
      sexo = prompt(
        "escriba un sexo valido para el estudiante no un numero 'f' o 'm' o 'b'  "
      );
    }
    while (sexo != "f" && sexo != "m" && sexo != "b") {
      sexo = prompt(
        "escriba un sexo valido para el estudiante solo 'f' o 'm' o 'b' "
      );
    }

    if (banderaMal == true) {
      notaPeor = nota;
      sexoDelPeor = sexo;
      banderaMal = false;
    } else if (notaPeor > nota) {
      notaPeor = nota;
      sexoDelPeor = sexo;
    }

    if (nota < 4) {
      contadorDesa = contadorDesa + 1;
    } else if (nota >= 6 && sexo == "m") {
      contAproVar = contAproVar + 1;
    }

    sumaNotas = sumaNotas + nota;
  }
  promedioNotas = parseInt(sumaNotas / 7);

  document.write(`El promedio de notas fue ${promedioNotas} <br>`);
  document.write(
    `La peor nota fue ${notaPeor} y el sexo del estudiante fue ${sexoDelPeor} <br>`
  );
  document.write(
    `La cantidad de varones que su nota haya sido mayor o igual a 6 es ${contAproVar} <br>`
  );
  document.write(
    `La cantidad de alumnos desaprobados fue ${contadorDesa} <br>`
  );
}
