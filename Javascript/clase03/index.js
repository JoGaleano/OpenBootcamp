//Calculo de factorial de 10 utilizando el bucle for
let total = 1;
for (let i = 1; i < 11; i++) {
    total = total * i; 
}
console.log(total);

//Calculo de factorial de 10 utilizando el bucle while
let cont = 1;
let totalWhile = 1;
while (cont < 11) {
    totalWhile = totalWhile * cont;
    cont ++;
}
console.log(totalWhile);

//Calculo de factorial de 10 utilizando el bucle while, una bifurcacion if y una sentencia break
let contador = 1;
let factorial = 1;
while (contador < 11) {
    factorial = factorial * contador;
    contador ++;
    if(factorial == 3628800){
        break;
    }
}

console.log(factorial);