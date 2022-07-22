new TypeIt("#myElement", {
    strings: "Hello there!",
}).go();

//Vincula un evento de tipo "click" al botón anterior, que muestre una alerta en el navegador "click en el botón"

const btn = document.getElementById("btn");

btn.addEventListener('click', e =>{
    Swal.fire('Touch me again')
});

//En el fichero index.js crea un evento click en el botón a través de jQuery, que muestre por consola "Hola, estoy utilizando jQuery"

$(() =>{
    $("#btnJQ").click(() =>Swal.fire('Touch me again! I am JQuery'))
});


