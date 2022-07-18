//Crea un nuevo proyecto de Node
// Configura el proyecto para utilizar los módulos de ES6
//En el entrypoint index.js, importa el módulo controller.js
// 1- CommonJS - requiere
const {suma, multiplica} = require('controller.js');

//El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
const sumar = suma(4,5);
const multi = multiplica(1,2)

