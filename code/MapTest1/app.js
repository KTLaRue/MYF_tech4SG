function initMap() {
    var options = {
        center: { lat: 48.733843, lng: -122.48647 },
        zoom: 10
    };

    var map = new google.maps.Map(document.getElementById("map"), options);

    function addMarker(property) {
        var marker = new google.maps.Marker({
            position: property.location,
            map: map,
        });

        if (property.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: property.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }

    function autoFillUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const userLatLng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    map.setCenter(userLatLng);

                    addMarker({
                        location: userLatLng,
                        content: "<h2>Your Location</h2>",
                    });
                },
                function (error) {
                    alert('Error getting your location: ' + error.message);
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    }

    function searchNearbyStores() {
        const userLocationInput = document.getElementById('userLocation');
        const userLocation = userLocationInput.value;

        if (!userLocation) {
            alert('Please enter a location or use your current location.');
            return;
        }

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: userLocation }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
                const userLatLng = results[0].geometry.location;

                const request = {
                    location: userLatLng,
                    radius: 5000,
                    type: 'grocery_or_supermarket',
                };

                const service = new google.maps.places.PlacesService(map);

                service.nearbySearch(request, (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        // Clear existing markers
                        // ...

                        // Add markers for the nearby stores
                        for (let i = 0; i < results.length; i++) {
                            addMarker({
                                location: results[i].geometry.location,
                                content: `<h2>${results[i].name}</h2>`,
                            });
                        }
                    } else {
                        alert('Error searching for nearby stores: ' + status);
                    }
                });
            } else {
                alert('Error geocoding the location: ' + status);
            }
        });
    }

    document.getElementById('findStoresButton').addEventListener('click', searchNearbyStores);
    document.getElementById('useMyLocationButton').addEventListener('click', autoFillUserLocation);
}
