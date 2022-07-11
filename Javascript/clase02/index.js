//Publicacion del libro
const publicacion = new Date(2013, 04, 14);
//Construccion objeto libro favorito
const libro = {
    titulo: 'Inferno',
    autor: 'Dan Brown',
    fehca: publicacion,
    url: 'https://www.amazon.com/-/es/Dan-Brown-ebook/dp/B00CHSPHWY/ref=sr_1_4?crid=3JAUOSPCLNMFC&keywords=inferno+dan+brown&qid=1657543911&s=books&sprefix=inferno+da%2Cstripbooks-intl-ship%2C216&sr=1-4'
};

//lista con nombre, edad, progrmador?, libro favorito
const datos = ['Maria', 26 , true, 19, libro];
console.log(datos);