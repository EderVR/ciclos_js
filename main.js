// Nuestro eprsonaje, quiere dormir sus 8 horas diaras
// por lo que el se ha propuesto poner un bucle for que le avise cuando
// haya dormido sus 8 horas.
// Las horas estan representadas en minutos, 
// por lo que 1 hora = 60 minutos.

let tiempoDescanso = 480;
let cansado = true;
let horaDeDormir = "11 pm";

if (cansado === true){
  console.log("Es hora de dormir");
  let hora = horaDeDormir.split(" ");
  console.log(hora);
  let oncePm = hora[0];
  if  (oncePm == 11){
    console.log("11 En punto hora de dormir");
    for (let i = tiempoDescanso; i >= 0; i--){
      if (i === 0){
        console.log("Hora de despertarse");
      }else{
        console.log("Aun hay tiempo, sigue durmiendo");
      }
    }
  }
}else{
  console.log("Aun no tienes sueño");
}

while (cansado){
  let $hora = horaDeDormir.split(" ");
  let $oncePm = $hora[0];
  if ($oncePm == 11){
    if (tiempoDescanso == 0){
      cansado = false;
    }
    tiempoDescanso--;
    continue;
  }
  console.log("Hora de levantarse")
}