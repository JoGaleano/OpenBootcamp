//Una clase llamada "Estudiante" que tenga:
class Estudiante {
    constructor(nombre) {
        //Una variable llamada nombre
        this.nombre = nombre;
        //Otra variable llamada asignatura con 3 items, Javascript, HTML, CSS
        this.asignatura = ['Javascript',' HTML', ' CSS.'];
    }
    //Un metodo "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos(){
        console.log(`El estudiante es ${this.nombre} y cursa ${this.asignatura}`);
    }
}
//Crea una nueva instancia "Estudiante"
const estudiante01 = new Estudiante ('Maria');

//haz la llamada al metodo obtenDatos
estudiante01.obtenDatos();