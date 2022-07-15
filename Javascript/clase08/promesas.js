//Una función sin parámetros que devuelva siempre "true"
const booleano = () => {console.log(true)};
booleano();

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const funAsinc = (res) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            res ? resolve ('Hola soy una promesa'): reject ('Promesa rechazada'), 5000
        });
    });
};

//Una función generadora de índices pares automáticos

function* generaID(){
    let id = 0;
    while(true){
        id ++;
        if(id===10){
            return;
        }
        yield id; //Esperando hasta que la volvamos a llamar
    }
}

const gen = generaID();
console.log(gen.next());