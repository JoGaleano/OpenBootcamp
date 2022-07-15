//La fecha de hoy
const fecha = new Date();
console.log(fecha);

//La fecha de tu nacimiento
const nacimiento = new Date(1996,02,19);
nacimiento.toLocaleDateString("en-GB");
console.log(nacimiento);

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
if(fecha>nacimiento){console.log(`Hoy es mas tarde que ${nacimiento}`);}

//Una variable que contenga el día de tu nacimiento
const daynacimiento = nacimiento.getDate();
console.log(daynacimiento);

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mothnacimiento = nacimiento.getMonth() + 1;
console.log(mothnacimiento);

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const agenacimiento = nacimiento.getFullYear();
console.log(agenacimiento);