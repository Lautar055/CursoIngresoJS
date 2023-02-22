/* Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
if >10 o < 30 hay descuento
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */
function mostrar() {
  let respuesta = "si";
  let cantidadBolsas;
  let tipo;
  let precioBolsa;
  let descuento;
  let precioBruto = 0;
  let precioFinal = 0;
  let acumuladorCemento = 0;
  let acumuladorCal = 0;
  let precioCaso;
  let acumuladorArena = 0;
  let banderaCaro = true;
  let acumuladorBolsas = 0;
  let acumuladorPrecio = 0;
  let precioMasCaro;
  let tipoMasCaro;
  let mensajeCantidad;
  let mensajePrecio;

  while (respuesta == "si") {
    tipo = prompt("Que quieres comprar? 'arena' 'cal' 'cemento'");
    while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt("ingrese un tipo valido");
    }

    cantidadBolsas = parseFloat(
      prompt("Cuantas bolsas quieres comprar (Entre 0 y 1000)")
    );
    while (
      isNaN(cantidadBolsas) ||
      cantidadBolsas < 0 ||
      cantidadBolsas > 1000
    ) {
      cantidadBolsas = parseFloat(
        prompt("Ingresa una cantidad valida (Entre 0 y 1000)")
      );
    }

    precioBolsa = parseFloat(
      prompt("Cual es el precio de las bolsas (Entre 0 y 10000)")
    );
    while (isNaN(precioBolsa) || precioBolsa < 0 || precioBolsa > 10000) {
      cantidadBolsas = parseFloat(
        prompt("Ingresa una cantidad valida (Entre 0 y 10000)")
      );
    }

    acumuladorBolsas = acumuladorBolsas + cantidadBolsas;
    precioCaso = cantidadBolsas * precioBolsa;
    acumuladorPrecio = acumuladorPrecio + precioCaso;

    switch (tipo) {
      case "cal":
        acumuladorCal = acumuladorCal + cantidadBolsas;
        break;
      case "arena":
        acumuladorArena = acumuladorArena + cantidadBolsas;
        break;
      case "cemento":
        acumuladorCemento = acumuladorCemento + cantidadBolsas;
        break;
    }

    if (banderaCaro == true) {
      tipoMasCaro = tipo;
      precioMasCaro = precioBolsa;
      banderaCaro = false;
    } else if (precioMasCaro < precioBolsa) {
      tipoMasCaro = tipo;
      precioMasCaro = precioBolsa;
    }

    respuesta = prompt("¿Quieres seguir? Ingrese: 'si'");
  } //Fin del while principal

  if (acumuladorBolsas > 29) {
    descuento = -25;
  } else if (acumuladorBolsas > 9) {
    descuento = -15;
  } else {
    descuento = 0;
  }

  precioFinal = acumuladorPrecio + (acumuladorPrecio * descuento) / 100;

  if (descuento != 0) {
    mensajePrecio = `El precio bruto seria ${acumuladorPrecio} y el importe final con descuentos seria ${precioFinal}`;
  } else {
    mensajePrecio = `El precio bruto seria ${acumuladorPrecio} y no hay descuentos`;
  }

  if (acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento) {
    mensajeCantidad = "El tipo con mas cantidad fue la cal";
  } else if (acumuladorArena > acumuladorCemento) {
    mensajeCantidad = "El tipo con mas cantidad fue la arena";
  } else {
    mensajeCantidad = "El tipo con mas cantidad fue el cemento";
  }

  console.log(mensajePrecio);
  console.log(mensajeCantidad);
  console.log(
    `El tipo mas caro es ${tipoMasCaro} con $${precioMasCaro} por cada bolsa`
  );
}
