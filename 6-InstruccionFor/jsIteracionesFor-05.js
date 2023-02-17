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
  let contDesaVar;

  for (i = 7; i > 0; i--) {
    nota = parseInt(prompt("escriba la nota del estudiantes"));
    while (isNaN(nota)) {
      nota = parseInt(prompt("tiene que ser un numero no texto"));
    }

    sexo = prompt("escriba el sexo del estudiante 'f' o 'm' o 'b' ");
    while ((!isNaN(sexo) && sexo != "f") || sexo != "m" || sexo != "b") {
      sexo = prompt(
        "escriba un sexo valido para el estudiante 'f' o 'm' o 'b' "
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

    if ((sexo = "m" && nota < 4)) {
      contDesaVar = contDesaVar + 1;
    }
  }
}
