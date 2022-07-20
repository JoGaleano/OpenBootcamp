//- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

const Fibonacci = (num) =>{
    let fibo = [];
    fibo[0] = 0;
    fibo[1] = 1;
    for(let i = 2; i < num; i++){
        fibo[i] = fibo[i-2] + fibo[i-1];
    }
    return fibo;
}

let prueba = Fibonacci(6);
console.log(prueba);
//- Ejecuta la depuración de VSCode para visualizar la ejecución de la función
