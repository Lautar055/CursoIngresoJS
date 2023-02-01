/* Lautaro D'Andrea
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
  let numDividendo = document.getElementById("txtIdNumeroDividendo").value;
  let numDivisor = document.getElementById("txtIdNumeroDivisor").value;

  numDividendo = parseInt(numDividendo);
  numDivisor = parseInt(numDivisor);

  let resultado = numDividendo / numDivisor;
  resultado = parseInt(resultado);
  let resto = numDividendo % numDivisor;

  let mensaje = `El resultado de la divicion es ${resultado} y la divicion tine como resto ${resto}`;
  alert(mensaje);
}
