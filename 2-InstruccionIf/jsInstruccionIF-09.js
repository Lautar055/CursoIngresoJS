//Lautaro D'Andrea
function mostrar() {
  let max = 10;
  let min = 1;
  //let num = Math.round(Math.random() * max);
  let num = Math.floor(Math.random() * max + min);
  //let num = Math.ceil(Math.random() * max);

  if (num > 0 && num < 11) {
    alert(num);
  }
} //FIN DE LA FUNCIÓN
