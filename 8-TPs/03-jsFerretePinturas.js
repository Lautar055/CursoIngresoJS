/*3.	Para el departamento de Pinturas: Lautaro D'Andrea
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
  let Temp = parseInt(document.getElementById("txtIdTemperatura").value);
  let Cambio = ((Temp - 32) * 5) / 9;
  alert(Cambio);
}

function CentigradosFahrenheit() {
  let Temp = parseInt(document.getElementById("txtIdTemperatura").value);
  let Cambio = (Temp * 9) / 5 + 32;
  alert(Cambio);
}

//(33 °F − 32) × 5/9
//(1 °C × 9/5) + 32
