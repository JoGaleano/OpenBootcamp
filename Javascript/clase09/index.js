const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

//Crear un nuevo proyecto node
//Instalar la dependendia en Windows
//En el archivo ndes.js crea una función que devuelva un error con un mensaje personalizado
//console.log("Hola estoy saliendo por consola");
logger.info("Mensaje informativo");
logger.warn("Esto es un mensaje de advertencia")
logger.debug("Esto es un mensajde debug")
logger.error("Esto es un error")

//Registra el error en un archivo a través de un try...catch

const miFuncion = val => {
    if (typeof val === 'number') {
        return 2 * val;
    } throw new Error("El valor debe ser de tipo numero");
}

try {
    //Codigo que puede fallar
    console.log("Esta ejecutandose de manera correcta");
    const doble = miFuncion(8);
    console.log(doble);
} catch (e) {
    //En caso de fallar, quiero que ejecutes
    console.error("ERROR!");
    console.error(`El valor de e: ${e}`);
} finally {
    console.log('Esto se va a ejecutar tanto si se produce algun error, como si no existe ninguno');
}