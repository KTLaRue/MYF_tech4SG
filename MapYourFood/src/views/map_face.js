import React, { useEffect } from 'react';
import { Fragment } from 'react';
import '../styles/map_style.css';

const Map_face = (props) => {
  let map, directionsService, directionsRenderer, userLocation, selectedDestination;
  const markers = [];
  const defaultTravelMode = 'DRIVING';

  useEffect(() => {
    window.initMap = initMap;
    loadGoogleMapsScript();

    return () => {
      // Cleanup function if necessary
    };
  }, []);

  const loadGoogleMapsScript = () => {
    const script = document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDSZjD7YEAuFV_jMfrSdcWmSYWUq9iTMJU&callback=initMap&libraries=places';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  };

  function initMap() {
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();

    const options = {
      center: { lat: 48.769768, lng: -122.485886 },
      zoom: 12,
    };

    map = new google.maps.Map(document.getElementById('map'), options);
    directionsRenderer.setMap(map);

    document.getElementById('useMyLocationButton').addEventListener('click', function () {
      autoFillUserLocation();
    });

    document.getElementById('getDirectionsButton').addEventListener('click', function () {
      if (userLocation && selectedDestination) {
        getDirections(userLocation, selectedDestination, defaultTravelMode);
      } else {
        alert('Please use your location and select a destination first.');
      }
    });

    // Call autoFillUserLocation here to ensure 'map' is defined
    autoFillUserLocation();
  }

  function autoFillUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          userLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          map.setCenter(userLocation);
          findNearbyStores(userLocation);
        },
        function (error) {
          if (error.code === error.PERMISSION_DENIED) {
            alert('Geolocation permission denied. Please enable location services in your browser.');
          } else {
            alert('Error getting your location: ' + error.message);
          }
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }

  function findNearbyStores(location) {
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(
      {
        location: location,
        radius: 5000,
        type: ['grocery_or_supermarket'],
      },
      function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          clearMarkers();
          for (let i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        } else {
          alert('Failed to find grocery stores: ' + status);
        }
      }
    );
  }

  function createMarker(place) {
    const marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: place.name,
    });
    markers.push(marker);

    const infowindow = new google.maps.InfoWindow();
    const contentString = `<div><strong>${place.name}</strong><br>${place.vicinity}</div>`;

    marker.addListener('click', function () {
      closeInfoWindow();
      clearDirections();
      infowindow.setContent(contentString);
      infowindow.open(map, this);
      selectedDestination = place.geometry.location;
      map.currentInfoWindow = infowindow;
    });
  }

  function closeInfoWindow() {
    if (map.currentInfoWindow) {
      map.currentInfoWindow.close();
    }
  }

  function clearMarkers() {
    for (let marker of markers) {
      marker.setMap(null);
    }
    markers.length = 0;
  }

  function clearDirections() {
    if (directionsRenderer) {
      directionsRenderer.setDirections(null);
      document.getElementById('directionsPanel').innerHTML = '';
    }
  }

  function getDirections(origin, destination, travelMode) {
    console.log('Selected Travel Mode:', travelMode);

    const request = {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode[travelMode],
    };

    // Ensure proper initialization
    if (!directionsRenderer) {
      directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);
    }
    if (!directionsService) {
      directionsService = new google.maps.DirectionsService();
    }

    // Clear directions and panel
    directionsRenderer.setDirections(null);
    document.getElementById('directionsPanel').innerHTML = '';

    directionsService.route(request, function (response, status) {
      if (status === 'OK') {
        displayDirections(response, travelMode);
      } else {
        alert(`${travelMode} directions request failed: ${status}`);
      }
    });
  }

  function displayDirections(response, mode) {
    if (directionsRenderer) {
      directionsRenderer.setDirections(response);
      document.getElementById('directionsPanel').innerHTML += `<h3>${mode} Directions</h3>`;
      directionsRenderer.setPanel(document.getElementById('directionsPanel'));
    } else {
      alert('Directions renderer not initialized.');
    }
  }

  function goBack() {
    window.history.back();
  }

  return (
    <Fragment>
      <div className="map-header">
        <button onClick={goBack}>Back</button>
        <h1>Google Maps</h1>
      </div>

      <div id="map-container">
        <div id="map" className="map"></div>
        <div id="locationInput">
          <button type="button" id="useMyLocationButton">
            Use My Location
          </button>

          <button
            type="button"
            id="getDirectionsButton"
            onClick={() => getDirections(userLocation, selectedDestination, defaultTravelMode)}
          >
            Get Directions
          </button>
        </div>
        <div id="directionsPanel"></div>
      </div>
    </Fragment>
  );
};

export default Map_face
