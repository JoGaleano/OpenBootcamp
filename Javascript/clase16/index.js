const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

function fase1(pEvento) {
    pEvento.dataTransfer.setData( "text/plain"
                                , pEvento.target.id
                                );
}

function fase2(pEvento) {
    pEvento.preventDefault();
}

function fase3(pEvento) {
    pEvento.preventDefault();
    document.getElementById( pEvento.dataTransfer.getData("text") )
            .remove();
    
}

