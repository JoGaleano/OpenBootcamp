//Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {
    name: 'Maria',
    lastName: 'Galeano',
    age: '26',
    height: '177',
    developer : true
};

//Una variable que obtenga tu edad a partir del objeto anterior

let age = datosPersonales.age;

console.log(age);

//Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

class FriendData {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const friend01 = new FriendData('Silvina', 25);
const friend02 = new FriendData('Arami', 24);

const friend = [friend01, friend02, datosPersonales];


//Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
friend.sort((a,b)=>b.age - a.age);

console.log(friend);
