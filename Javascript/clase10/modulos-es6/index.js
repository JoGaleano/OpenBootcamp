//En el entrypoint index.js, importa el módulo controller.js

import {suma, multiplica} from '../controller/controller.js';

//El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
const sum = suma(4,5);
const mult = multiplica(1,2);

//Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
import chalk from 'chalk';

//Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
console.log(chalk.green(sum, mult));