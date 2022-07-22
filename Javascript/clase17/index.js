// Initialize and add the map
function initMap() {
    // The location of cba
    const cba = { lat: -31.41973215508858, lng: -64.18869780962702 };
    const ireland = {lat:53.279089416721824, lng: -9.054299926381583};
    const iceland = {lat: 64.13683415722998, lng:-21.911537587927132}
    // The map, centered at cba
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: cba,
    });
    (document.getElementById("map"), {
        zoom: 1,
        right: ireland,
    });
    (document.getElementById("map"), {
        zoom: 1,
        left: iceland,
    });
    // The marker, positioned at cba
    const marker = new google.maps.Marker({
        position:cba,
        map: map,
    });
    const marker01 = new google.maps.Marker({
        position:ireland,
        map: map,
    });
    const marker02 = new google.maps.Marker({
        position:iceland,
        map: map,
    });
}

window.initMap = initMap;