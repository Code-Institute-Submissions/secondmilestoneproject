// Map variables
var autocomplete;
var map;
var markers = [];
var infoWindow;
var places;

// Initialise map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 54.5260, lng: 15.2551},
        // Map controls allowing user to zoom in/out, switch to satellite mode and view streetview images
        mapTypeControl: true,
        zoomControl: true,
        streetViewControl: true
    });

    // Info window with place details
    infoWindow = new google.maps.InfoWindow({
        content: document.getElementById('place-details')
    });

    // Autocomplete
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'));
        places = new google.maps.places.PlacesService(map);
        autocomplete.addListener('place_changed', onPlaceChanged); // Resets map to new area that has been searched
        document.getElementById('accommodation-filter').addEventListener('change', onPlaceChanged);
        document.getElementById('food-filter').addEventListener('change', onPlaceChanged);
}

// Select autocomplete query - return details of place and zoom into area
function onPlaceChanged() {
    if ($("#accommodation-filter").is(':checked')) {        
        var place = autocomplete.getPlace();                //getPlace() retrieves place name for autocomplete query
        if (place.geometry) {
            map.panTo(place.geometry.location);             //Retrieves lng/lat of place
            map.setZoom(15);
            searchAccommodation();
        }
        else {
            $('#autocomplete').attr("placeholder", "Search");
        }
    }
    else if ($("#food-filter").is(':checked')) {
        var place = autocomplete.getPlace();
        if (place.geometry) {
            map.panTo(place.geometry.location);
            map.setZoom(15);
            searchFoodAndDrink();
        }
        else {
            $('#autocomplete').attr("placeholder", "Search");
        }
    }
    
        else {
            $('#autocomplete').attr("placeholder", "Search");
        }
    }


// Search for accommodation
function searchAccommodation() {
    var search = {
        bounds: map.getBounds(),                //getBounds() retrieves lng/lat for corners of visible area of map
        types: ['lodging', 'campground']
    };
    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {         //If Places Service is working, create marker
            clearResult();
            clearMarker();
            // Create marker
            for (var x = 0; x < results.length; x++) {
                markers[x] = new google.maps.Marker({
                    position: results[x].geometry.location                  //Positions marker to searched location
                });
                // When user clicks accommodation marker, show details
                markers[x].placeResult = results[x];
                google.maps.event.addListener(markers[x], 'click', showInfoWindow);
                setTimeout(dropMarkers(x), x * 100);
            }
        }
    });
}

// Search for food and drink
function searchFoodAndDrink() {
    var search = {
        bounds: map.getBounds(),
        types: ['restaurant', 'bar']
    };
    places.nearbySearch(search, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResult();
            clearMarker();
            // Create marker
            for (var x = 0; x < results.length; x++) {
                markers[x] = new google.maps.Marker({
                    position: results[x].geometry.location
                });
                // When user clicks food and drink marker, show details
                markers[x].placeResult = results[x];
                google.maps.event.addListener(markers[x], 'click', showInfoWindow);
                setTimeout(dropMarkers(x), x * 100);
            }
        }
    });
}

// Clear markers when new radio option selected
function clearMarker() {
    for (var x = 0; x < markers.length; x++) {
        if (markers[x]) {
            markers[x].setMap(null);
        }
    }
    markers = [];
}

// Add found results to map
function dropMarkers(x) {
    return function() {
        markers[x].setMap(map);
    };
}

function clearResult() {
    var results = document.getElementById('results');
    while (results.childNodes[0]) {
        results.removeChild(results.childNodes[0]);
    }
}

// Fetch place details
function showInfoWindow() {
    var marker = this;
    places.getDetails({placeId: marker.placeResult.place_id},
        function(place, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }
            infoWindow.open(map, marker);
            setPlaceDetails(place);
        });
}

// Show place details in info window on map
function setPlaceDetails(place) {
    document.getElementById('url').innerHTML = '<a href="' + place.url + 'target="_blank">' + place.name + '</a>';
    document.getElementById('address').textContent = place.vicinity;
    document.getElementById('phone').textContent = place.formatted_phone_number;
}