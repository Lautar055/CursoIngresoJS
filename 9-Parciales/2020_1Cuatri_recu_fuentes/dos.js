/* Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas(0-300),
Precio por bolsa (más de cero y menor a 10000 ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
  Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
  Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
      a)
      El importe total a pagar , bruto sin descuento y...
      b)
      el importe total a pagar con descuento(solo si corresponde)
      d)
      Informar la bolsa mas cara de Cal y la mas barata de Cemento.
      e)
      Cuantas bolsas de arena se compraron en total, y el promedio por compra.
 */
function mostrar() {
  let respuesta = "si";
  let cantidadBolsas;
  let tipo;
  let precioBolsa;
  let descuento;
  let precioFinal = 0;
  let precioCaso;
  let banderaCaroCal = true;
  let banderaBaratoCemento = true;
  let acumuladorBolsasArena = 0;
  let contadorComprasArena = 0;
  let precioMasBaratoCemento;
  let precioMasCaroCal;
  let acumuladorBolsas = 0;
  let acumuladorPrecio = 0;
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

    if (tipo == "arena") {
      acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsas;
      contadorComprasArena = contadorComprasArena + 1;
    }

    if (banderaCaroCal == true && tipo == "cal") {
      precioMasCaroCal = precioBolsa;
      banderaCaroCal = false;
    } else if (precioMasCaroCal < precioBolsa) {
      precioMasCaroCal = precioBolsa;
    }

    if (banderaBaratoCemento == true && tipo == "cemento") {
      precioMasBaratoCemento = precioBolsa;
      banderaBaratoCemento = false;
    } else if (precioMasBaratoCemento > precioBolsa) {
      precioMasBaratoCemento = precioBolsa;
    }

    respuesta = prompt("¿Quieres seguir? Ingrese: 'si'");
  } //Fin del while principal

  promedioPorCompraArena = acumuladorBolsasArena / contadorComprasArena;

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

  console.log(mensajePrecio);
  console.log(
    `La bolsa mas cara de cal fue por ${precioMasCaroCal} y la bolsa mas barata de cemento fue por ${precioMasBaratoCemento}`
  );
  console.log(
    `La cantidad de bolsas de arena fue ${acumuladorBolsasArena} y en promedio por cada compra se compraron ${promedioPorCompraArena}`
  );
}
