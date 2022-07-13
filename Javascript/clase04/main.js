//Una cadena de texto con tu nombre
let name = 'Maria Jose';
console.log(name);

//Una cadena de texto con tu apellido
let lastname = 'Galeano';
console.log(lastname);

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${name} ${lastname}`;
console.log(estudiante);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numLetras = estudiante.length;
console.log(numLetras);

//Una variable que contenga la primera letra del Nombre
let firtsLetter = name.slice(0,1);
console.log(firtsLetter);

//Otra variable que contenga la última letra del Apellido
let lastLetterLastname = lastname.slice(-1);
console.log(lastLetterLastname);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let sinEspacio = estudiante.replace(/ /g, "");
console.log(sinEspacio);

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log('Maria Jose' === name);


