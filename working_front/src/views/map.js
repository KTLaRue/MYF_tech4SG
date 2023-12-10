function initMap() {
    var options = {
        center: { lat: 48.733843, lng: -122.48647 },
        zoom: 10
    };

    var map = new google.maps.Map(document.getElementById("map"), options);
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer({ map: map });

    // Function to add a marker to the map
    function addMarker(property) {
        var marker = new google.maps.Marker({
            position: property.location,
            map: map,
        });

        if (property.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: property.content,
            });

            marker.addListener('click', function () {
                // Open info window with additional details
                infoWindow.setContent(property.content + "<p>Address: " + property.address + "</p><a href='#' onclick='getDirections(" + property.location.lat() + "," + property.location.lng() + ")'>Get Directions</a>");
                infoWindow.open(map, marker);
            });
        }
    }

// Function to get directions from user's current location to a selected destination
    function getDirections(lat, lng) {
        const destination = { lat: parseFloat(lat), lng: parseFloat(lng) };

        autoFillUserLocation(function (userLatLng) {
            calculateAndDisplayRoute(userLatLng, destination);
        });
    }

// Function to calculate and display directions
    function calculateAndDisplayRoute(origin, destination) {
        const request = {
            origin: origin,
            destination: destination,
            travelMode: 'DRIVING'
        };

        directionsService.route(request, function (result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
            } else {
                console.error('Error calculating directions:', status);
                alert('Error calculating directions. Please try again.');
            }
        });
    }


    // Function to clear existing markers on the map
    function clearMarkers() {
        // Implement logic to clear existing markers on the map
        // For example, if you store markers in an array, you can iterate through the array and setMap(null) for each marker.
    }

    // Function to calculate and display directions
    function calculateAndDisplayRoute(destination) {
        const userLocationInput = document.getElementById('mapSearch');
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
                    origin: userLatLng,
                    destination: destination,
                    travelMode: 'DRIVING'
                };

                directionsService.route(request, function (result, status) {
                    if (status == 'OK') {
                        directionsRenderer.setDirections(result);
                    } else {
                        console.error('Error calculating directions:', status);
                        alert('Error calculating directions. Please try again.');
                    }
                });
            } else {
                console.error('Error geocoding the location:', status);
                alert('Error geocoding the location. Please try again.');
            }
        });
    }

    // Function to automatically fill user's location on the map
    function autoFillUserLocation(callback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const userLatLng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };

                    console.log('User Location:', userLatLng); // Add this line for debugging

                    map.setCenter(userLatLng);

                    addMarker({
                        location: userLatLng,
                        content: "<h2>Your Location</h2>",
                    });

                    // Trigger the search for nearby grocery stores after setting the user's location
                    searchNearbyStores(userLatLng);

                    // Invoke the callback function with user's location
                    if (callback) {
                        callback(userLatLng);
                    }
                },
                function (error) {
                    alert('Error getting your location: ' + error.message);
                }
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    }
    
    // Function to search for nearby grocery stores
    function searchNearbyStores(userLatLng) {
        const request = {
            location: userLatLng,
            radius: 5000,
            type: 'grocery_or_supermarket',
        };

        const service = new google.maps.places.PlacesService(map);

        clearMarkers(); // Clear existing markers

        service.nearbySearch(request, (results, status) => {
            console.log('Nearby Search Results:', results);

            if (status === google.maps.places.PlacesServiceStatus.OK) {
                const groceryStores = results.filter(result => result.types.includes('grocery_or_supermarket'));

                console.log('Filtered Grocery Stores:', groceryStores);

                // Add markers for the nearby grocery stores with the address
                for (let i = 0; i < groceryStores.length; i++) {
                    addMarker({
                        location: groceryStores[i].geometry.location,
                        content: `<h2>${groceryStores[i].name}</h2>`,
                        address: groceryStores[i].vicinity,
                    });
                }
            } else {
                console.error('Error searching for nearby stores:', status);
                alert('Error searching for nearby stores. Please try again.');
            }
        });
    }

    document.getElementById('findStoresButton').addEventListener('click', function () {
        const userLocationInput = document.getElementById('mapSearch');
        const userLocation = userLocationInput.value;

        if (!userLocation) {
            alert('Please enter a location or use your current location.');
            return;
        }

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: userLocation }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
                const userLatLng = results[0].geometry.location;
                addMarker({
                    location: userLatLng,
                    content: `<h2>Your Location: ${userLocation}</h2>`,
                });
                map.setCenter(userLatLng);
                searchNearbyStores(userLatLng);
            } else {
                console.error('Error geocoding the location:', status);
                alert('Error geocoding the location. Please try again.');
            }
        });
    });

    document.getElementById('useMyLocationButton').addEventListener('click', autoFillUserLocation);
}
