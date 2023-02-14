/* una agencia de viajes debe sacar las tarifas de los viajes , Lautaro D'Andrea
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final
 */
function mostrar() {
  let estacion = document.getElementById("txtIdEstacion").value;
  let destinoIngresado = document.getElementById("txtIdDestino").value;
  let precioBase = 15000;
  let porcentaje = 0;
  let preFin;

  switch (estacion) {
    case "Invierno":
      switch (destinoIngresado) {
        case "Bariloche":
          porcentaje = -20;
          break;
        case "Mar del plata":
          porcentaje = 20;
          break;
        default:
          porcentaje = 10;
      }
      break;

    case "Verano":
      switch (destinoIngresado) {
        case "Bariloche":
          porcentaje = 20;
          break;
        case "Mar del plata":
          porcentaje = -20;
          break;
        default:
          porcentaje = -10;
      }
      break;

    default:
      switch (destinoIngresado) {
        case "Cordoba":
          porcentaje = 0;
          break;
        default:
          porcentaje = -10;
      }
  }

  console.log(precioBase);
  preFin = 15000 - (15000 * porcentaje) / 100;

  alert(preFin);
} //FIN DE LA FUNCIÓN
/*       if (destinoIngresado === "Bariloche") {
        porcentaje = 20;
      }else if */
