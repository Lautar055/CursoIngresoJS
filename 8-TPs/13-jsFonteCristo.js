/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:

a.	Se pedirán un número positivo y se mostrará la cantidad de 
números pares desde el número ingresado hasta el cero.

b.	Se pedirán un número positivo y se mostrará la cantidad de 
números pares desde el número ingresado hasta el cero.

c.	Se pedirán un número positivo y se mostrará la cantidad de 
números divisibles de este número que se encuentran desde el 1 al 100.

d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.

e.	Se pedirán un número positivo y se mostrará la cantidad de 
números Primos desde el número ingresado hasta el cero.
*/

function NumerosPares() {
  let numIngr = parseInt(document.getElementById("txtIdNumero").value);
  let numeroPares;
  let todosPares = [];
  let contadorPares = 0;

  while (isNaN(numIngr) || numIngr <= 0) {
    numIngr = parseInt(prompt("El numero no es valido escribe otro aqui"));
  }
  for (i = 1; i <= numIngr; i++) {
    console.log(i);

    if (i % 2 == 0) {
      numeroPares = i;
      todosPares.push(numeroPares);
      contadorPares = contadorPares + 1;
    }
  }
  alert(
    `Los numeros pares entre el numero y 0 son: ${todosPares} y en total son ${contadorPares}`
  );
}
function NumerosImpares() {
  let numIngr = parseInt(document.getElementById("txtIdNumero").value);
  let numeroImpares;
  let todosImpares = [];
  let contadorImpares = 0;

  while (isNaN(numIngr) || numIngr <= 0) {
    numIngr = parseInt(prompt("El numero no es valido escribe otro aqui"));
  }

  for (i = 1; i <= numIngr; i++) {
    console.log(i);

    if (i % 2 !== 0) {
      numeroImpares = i;
      todosImpares.push(numeroImpares);
      contadorImpares = contadorImpares + 1;
    }
  }
  alert(
    `Los numeros impares entre el numero y 0 son: ${todosImpares} y en total son ${contadorImpares}`
  );
}
function NumerosDivisibles() {
  let numIngr = parseInt(document.getElementById("txtIdNumero").value);
  let numeroDivisibles;
  let todosDivisibles = [];
  let contadorDivisibles = 0;

  while (isNaN(numIngr) || numIngr <= 0) {
    numIngr = parseInt(prompt("El numero no es valido escribe otro aqui"));
  }

  for (i = 1; i <= 100; i++) {
    console.log(i);

    if (i % numIngr == 0) {
      numeroDivisibles = i;
      todosDivisibles.push(numeroDivisibles);
      contadorDivisibles = contadorDivisibles + 1;
    }
  }
  alert(
    `Los numeros divisibles por el numero hasta el 100 son: ${todosDivisibles} y en total son ${contadorDivisibles}`
  );
}
function VerificarPrimo() {
  let contadorDivisores = 0;
  let numIngr = parseInt(document.getElementById("txtIdNumero").value);
  let mensaje;

  while (isNaN(numIngr) || numIngr <= 0) {
    numIngr = parseInt(prompt("El numero no es valido escribe otro aqui"));
  }

  for (i = 1; i <= numIngr; i++) {
    if (numIngr % i == 0) {
      contadorDivisores = contadorDivisores + 1;
    }
  }
  if (contadorDivisores == 2) {
    mensaje = "El numero es primo";
  } else {
    mensaje = "El numero no es primo";
  }

  alert(mensaje);
}
function NumerosPrimos() {
  let numIngr = parseInt(document.getElementById("txtIdNumero").value);
  let contadorDivisores = 0;
  let todosPrimos = [];
  let contadorPrimos = 0;
  let mensaje;

  while (isNaN(numIngr) || numIngr <= 0) {
    numIngr = parseInt(prompt("El numero no es valido escribe otro aqui"));
  }

  for (j = 1; j <= numIngr; j++) {
    for (i = 1; i <= j; i++) {
      console.log(j);
      console.log(i);

      if (j % i == 0) {
        contadorDivisores = contadorDivisores + 1;
      }
    }

    if (contadorDivisores == 2) {
      contadorPrimos = contadorPrimos + 1;
      todosPrimos.push(j);
    }

    contadorDivisores = 0;
  }

  if (todosPrimos.length == 0) {
    mensaje = "Hubo un error o no hubo numeros primos";
  } else if (todosPrimos.length == 1) {
    mensaje = `El numero primo entre el numero y 0 es: ${todosPrimos} siendo uno solo`;
  } else {
    mensaje = `Los numeros primos entre el numero y 0 son: ${todosPrimos} y en total son ${contadorPrimos}`;
  }

  alert(mensaje);
}
