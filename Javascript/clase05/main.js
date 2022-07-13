//Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 177;
console.log(alturaCm);

//Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMetros = parseFloat(177.02);
console.log(alturaMetros);

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = parseFloat(64.05);
console.log(peso);

//Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaMetro = Math.ceil(177.02);
console.log(alturaMetro);

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedondeo = Math.round(64.04);
console.log(pesoRedondeo);

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let cadena = `el máximo valor que se puede obtener en Javascript + 1 = ${Number.MAX_VALUE} `;
console.log(cadena);