/* Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */

function mostrar() {
  let producto;
  let precio;
  let unidades;
  let marca;
  let fabricante;
  let numeromayorUnidades;
  let banderaMasCaroJabon = true;
  let precioJabonCaro;
  let acumuladorUnidadesBarbijos = 0;
  let acumuladorUnidadesAlcohol = 0;
  let acumuladorUnidadesJabon = 0;
  let acumuladorTotalCompraBarbijos = 0;
  let acumuladorTotalCompraAlcohol = 0;
  let acumuladorTotalCompraJabon = 0;
  let contadorComprasBarbijos = 0;
  let contadorComprasAlcohol = 0;
  let contadorComprasJabon = 0;
  let totalcomra = 0;
  let fabricanteJabonCaro;
  let totalUnidadesJabonCaro;
  let mayorUnidades;
  let mayorUnidadesCompras;
  let mayorUnidadesComprasPromedio;

  for (i = 5; i > 0; i--) {
    producto = prompt(
      "¿Que producto quieres comprar? ('barbijo', 'jabon' o 'alcohol')"
    );
    while (
      !isNaN(producto) ||
      (producto != "barbijo" && producto != "jabon" && producto != "alcohol")
    ) {
      producto = prompt(
        "Ingresa un producto valido ('barbijo', 'jabon' o 'alcohol')"
      );
    }

    precio = prompt("¿Cuantas unidades quieres comprar? (de 100 a 300)");
    while (isNaN(precio) || precio < 100 || precio > 300) {
      precio = prompt("Ingresa un numero valido (de 100 a 300)");
    }

    unidades = prompt("¿Cuantas unidades quieres comprar? (de 0 a 1000)");
    while (isNaN(unidades) || unidades < 0 || unidades > 1000) {
      unidades = prompt("Ingresa un numero valido (de 0 a 1000)");
    }

    marca = prompt("Ingresa la marca del producto");
    while (!isNaN(marca)) {
      marca = prompt("Ingresa la marca valida");
    }

    fabricante = prompt("Ingresa el fabricante del producto");
    while (!isNaN(fabricante)) {
      fabricante = prompt("Ingresa un fabricante valida");
    }

    totalcomra = parseInt(unidades * precio);

    if (banderaMasUnidades == true) {
      numeromayorUnidades = unidades;
      productoMayorUnidades = producto;
      totalCompraMayorUnidades = totalcomra;
    } else if (numeromayorUnidades < unidades) {
      numeromayorUnidades = unidades;
      productoMayorUnidades = producto;
      totalCompraMayorUnidades = totalcomra;
    }

    if (producto == "jabon" && banderaMasCaroJabon == true) {
      precioJabonCaro = precio;
      totalUnidadesJabonCaro = unidades;
      totalCompraJabonCaro = totalcomra;
      banderaMasUnidadesJabon = false;
    } else if (precioJabonCaro < precio) {
      precioJabonCaro = precio;
      totalUnidadesJabonCaro = unidades;
      fabricanteJabonCaro = fabricante;
    }

    if (producto == "barbijo") {
      acumuladorUnidadesBarbijos = acumuladorUnidadesBarbijos + unidades;
      acumuladorTotalCompraBarbijos + totalcomra;
      contadorComprasBarbijos = contadorComprasBarbijos + 1;
    } else if (producto == "jabon") {
      acumuladorUnidadesJabon = acumuladorUnidadesJabon + unidades;
      acumuladorTotalCompraJabon = acumuladorTotalCompraJabon + totalcomra;
      contadorComprasJabon = contadorComprasJabon + 1;
    } else {
      acumuladorUnidadesAlcohol = acumuladorUnidadesAlcohol + unidades;
      acumuladorTotalCompraAlcohol = acumuladorTotalCompraAlcohol + totalcomra;
      contadorComprasAlcohol = contadorComprasAlcohol + 1;
    }
  }

  if (
    acumuladorUnidadesBarbijos > acumuladorUnidadesJabon &&
    acumuladorUnidadesBarbijos > acumuladorUnidadesAlcohol
  ) {
    mayorUnidades = acumuladorUnidadesBarbijos;
    mayorUnidadesCompras = acumuladorTotalCompraBarbijos;
    mayorCantidadCompras = contadorComprasBarbijos;
  } else if (acumuladorUnidadesJabon > acumuladorUnidadesAlcohol) {
    mayorUnidades = acumuladorUnidadesJabon;
    mayorUnidadesCompras = acumuladorTotalCompraJabon;
    mayorCantidadCompras = contadorComprasJabon;
  } else {
    mayorUnidades = acumuladorUnidadesAlcohol;
    mayorUnidadesCompras = acumuladorTotalCompraAlcohol;
    mayorCantidadCompras = contadorComprasAlcohol;
  }

  mayorUnidadesComprasPromedio = mayorUnidadesCompras / mayorCantidadCompras;

  console.log(
    `El jabon mas caro lo fabrica ${fabricanteJabonCaro} y vendio ${totalUnidadesJabonCaro} unidades`
  );
  console.log(
    `El tipo de producto con mas unidades vendidas fue ${mayorUnidades} y ${mayorUnidadesComprasPromedio}`
  );
  console.log(`Se compraron ${acumuladorUnidadesBarbijos} barbijos`);
}
