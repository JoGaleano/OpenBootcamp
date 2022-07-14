//Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ['miel', 'harina', 'pan', 'leche', 'salsa'];
console.log(listaCompra);

//Modifica la lista de la compra y añádele "Aceite de Girasol"

listaCompra.push('Aceite de Girasol');
console.log(listaCompra);

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop();
console.log(listaCompra);

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [{nombre:'Ratatouille', director: 'Brad Bird' , fecha: '28 de julio de 2007'},
                    {nombre: 'Sinbad', director: 'Tim Johnson', fecha:'2 de julio de 2003'},
                    {nombre:'Kung Fu Panda', director:'Mark Osborne', fecha: '3 de julio de 2008'}];
        
   
    listaNombre = ['Ratatouille','Sinbad','Kung Fu Panda'];
    listaDirector = ['Brad Bird','Tim Johnson','Mark Osborne'];
    listaFecha = ['28 de julio de 2007','2 de julio de 2003','3 de julio de 2008'];


//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasPosteriores = peliculas.filter((el) => el.fecha.includes('2010'));
console.log(peliculasPosteriores);

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map((el)=>{
        return{
            director: el.director
            }    
        });

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map((el)=>{
    return{
        nombre: el.nombre
        }    
    });

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let listConcat = directores.concat(titulos);
console.log(listConcat);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let listPropagacion = [...directores, ...titulos];
console.log(listPropagacion);
