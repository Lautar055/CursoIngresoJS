/* Lautaro D'Andrea
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let numeroIngresadoUno = document.getElementById("txtIdNumeroUno").value;
  let numeroIngresadoDos = document.getElementById("txtIdNumeroDos").value;

  //numeroIngresadoUno = parseInt(Number(numeroIngresadoUno)); Funciona pero no es necesario el number, ya lo hace el parse
  //numeroIngresadoDos = parseInt(Number(numeroIngresadoDos)); Funciona pero no es necesario el number, ya lo hace el parse

  numeroIngresadoUno = parseInt(numeroIngresadoUno);
  numeroIngresadoDos = parseInt(numeroIngresadoDos);

  sumaNumeros = numeroIngresadoUno + numeroIngresadoDos;

  let mensaje = `La suma de los numeros ingresados da ${sumaNumeros} (La suma no toma los decimales)`;
  alert(mensaje);
}
