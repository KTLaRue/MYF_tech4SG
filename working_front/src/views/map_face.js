import React from 'react'
import { Link } from 'react-router-dom'
import { Fragment } from "react";
import "../styles/map_style.css"



const Map_face = (props) => {
    return (
        <Fragment>
            <div className="map-header">
                <button onclick="goBack()">Back</button>
                <h1>Google Maps</h1>
                {/* <!-- This is your button-link --> */}
                {/* <a href="/path-to-your-destination" class="button-link">Your Label</a> */}
            </div>

            <div id="map-container">
                <div id="map"></div>
                <div id="locationInput">
                    <button type="button" id="useMyLocationButton">Use My Location</button>
                    <button type="button" id="getDirectionsButton">Get Directions</button>
                </div>
                <div id="directionsPanel"></div>
            </div>

            {/*  <!-- Google Maps API script --> */}
            <script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDSZjD7YEAuFV_jMfrSdcWmSYWUq9iTMJU&callback=initMap&libraries=places"></script>

            <script>
                let map, directionsService, directionsRenderer, userLocation, selectedDestination;
                const markers = [];
                initMap();
                autoFillUserLocation();
                findNearbyStores(location);
                {/* findNearbyStores(locationInput); */}
                createMarker(place);
                clearMarkers();
                getDirections(origin, destination);
                goBack();
            </script>
        </Fragment>

    )


    function initMap() {
        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();

        const options = {
            center: { lat: 48.733843, lng: -122.48647 },
            zoom: 10
        };

        map = new google.maps.Map(document.getElementById("map"), options);
        directionsRenderer.setMap(map);

        document.getElementById('useMyLocationButton').addEventListener('click', function () {
            autoFillUserLocation();
        });

        document.getElementById('getDirectionsButton').addEventListener('click', function () {
            if (userLocation && selectedDestination) {
                getDirections(userLocation, selectedDestination);
            } else {
                alert('Please use your location and select a destination first.');
            }
        });
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
                    alert('Error getting your location: ' + error.message);
                },
                { enableHighAccuracy: true } // This is the added option for high accuracy
            );
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    }

    function findNearbyStores(location) {
        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: location,
            radius: 5000,
            type: ['store']
        }, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                clearMarkers();
                for (let i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            } else {
                alert('Failed to find stores: ' + status);
            }
        });
    }

    function createMarker(place) {
        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
            title: place.name
        });
        markers.push(marker);

        const infowindow = new google.maps.InfoWindow();
        marker.addListener('click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
            selectedDestination = place.geometry.location; // Set the clicked location as the destination
        });
    }

    function clearMarkers() {
        for (let marker of markers) {
            marker.setMap(null);
        }
        markers.length = 0;
    }

    function getDirections(origin, destination) {
        const request = {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
        };

        directionsService.route(request, function(response, status) {
            if (status === 'OK') {
                directionsRenderer.setDirections(response);
                document.getElementById('directionsPanel').style.display = 'block';
                directionsRenderer.setPanel(document.getElementById('directionsPanel'));
            } else {
                alert('Directions request failed: ' + status);
            }
        });
    }

    function goBack() {
        window.history.back();
    }

}

export default Map_face