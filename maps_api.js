function initMap () {
    var options = {
        center: {lat: -34.60375082707916, lng: -58.38158502750212},
        zoom: 15,
    }

    map = new google.maps.Map(document.getElementById("map"),options)

    function addMarker(property){
        const marker = new google.maps.Marker({
            position: property.location,
            map: map,
        });
    }

    addMarker({location: {lat: -34.60965851624465, lng: -58.39101295008378}});//sucursal1
    addMarker({location: {lat: -34.60827212288309, lng: -58.371253158078225}});//sucursal2
    addMarker({location: {lat: -34.60375082707916, lng: -58.38158502750212}});//sucursal3
}
