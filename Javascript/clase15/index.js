const name = "Maria";
const lastName = "Galeano";


class ObjetoNombre {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

const personOne = new ObjetoNombre('Ignacio', 'Gomez');
const personTwo = new ObjetoNombre('Maria', 'Galeano');

//Almacena el objeto anterior en la SessionStorage
sessionStorage.setItem("persona", JSON.stringify(personOne));
sessionStorage.setItem("persona02", JSON.stringify(personTwo));

//Almacena el objeto anterior en la LocalStorage
localStorage.setItem("persona", JSON.stringify(personOne));
localStorage.setItem("persona02", JSON.stringify(personTwo));

//Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
document.cookie = "nombreCookie=Galeano";
document.cookie = "vencimiento=Galeano; expira=" + new Date(2022,06,23)
.toUTCString()
