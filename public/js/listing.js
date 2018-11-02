//Page to scroll through all listings
const listPage = $("#listPage");
const listingCards = $("#allListingCards");
const moreButton = $("#moreButton");

//Page to show individual listings
const listingDisplay = $("#listingDisplay");
const listingTitle = $("#listingTitle");
const listingBody = $("#listingBody");
const googleMapDiv = $("#googleMap");

const AllListings = {};

//Google maps functionality
let googleMap; //The map itself, javascript is run on it and objects using it refer to it

let userPosition; //HTML5 Geolocated user position, or user set position
let userMarker; //User location for use within searches, colored green

let markers = []; //Markers list, so they can be unset from map

let pinImages = {}; //Colored marker icons for marker constructor
let pinShadow;  //Marker shadow for marker constructor

let offset = 0;
const showMoreListings = function() {
    $.ajax({
        url: `/api/listing/${offset}`,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        for(let i = 0; i < response.length; i++)
        {
            console.log(response[i]);
            listingCards.append(createListing(response[i]));
            AllListings[`${response[i].id}`] = response[i];
        }
        offset += response.length;
        console.log(AllListings);
    })
}();

moreButton.on("click", showMoreListings);

const createListing = function(listing) {
    console.log(listing.id);
    return $(
    `
    <a href="#listingDisplay" class='listinganchor' onclick='displaySingleListing(this)' id='${listing.id}'>
        <div class="card listing">
        <h5 class="card-header">${listing.title}</h5>
        <div class="card-body">
            <h5 class="card-title">created by ${listing.username}</h5>
            <p class="card-text">${listing.body.length > 300 ? `${listing.body.slice(0, 300)}...` : listing.body}</p>
        </div>
        </div>
    </a>
    `);
}



const displaySingleListing = function(anchor) {
    const id = $(anchor).attr('id');

    listPage.hide();
    listingDisplay.show();

    const listing = AllListings[id];
    listingTitle.text(listing.title);
    listingBody.text(listing.body);

    let displayImage = $("#displayImage");
    if(listing.picture)
    {
        displayImage.attr("src", listing.picture);
        displayImage.show();
    }
    else
    {
        displayImage.hide();
    }

    showMapListingLocation(listing.latitude, listing.longitude);
}

const displayAllListing = function() {
    listingDisplay.hide();
    listPage.show();
}

$("#listBackButton").on("click", displayAllListing)

const showMapListingLocation = function(latitude, longitude)
{
    resetMarkers();

    const position = {lat: parseFloat(latitude), lng: parseFloat(longitude)};
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(position);
    bounds.extend(userPosition);

    const boundsPadding = 40;
    const padding = {
        left: boundsPadding,
        right: boundsPadding,
        top: boundsPadding,
        bottom: boundsPadding
    };

    //Force google map to fit all the points and zoom it to a level where it gives this padding
    googleMap.fitBounds(bounds, padding);

    //Create marker
    markers.push(new google.maps.Marker(
        {position: position, 
        map: googleMap,
        icon: pinImages.RED,
        shadow: pinShadow
        }))
}

const resetMarkers = function() {
    markers.forEach(marker => {
        marker.setMap(null);
    });
    markers = [];
}

function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    googleMap = new google.maps.Map(
        document.getElementById('googleMap'), 
        {zoom: 4, center: uluru}
    );

    const size = new google.maps.Size(21, 34);
    const point = new google.maps.Point(0,0);
    const pointend = new google.maps.Point(10, 34);
    //see this for explanation of how this creates colored markers using google's API
    //https://stackoverflow.com/questions/7095574/google-maps-api-3-custom-marker-color-for-default-dot-marker/7686977#7686977
    pinImages.USER = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + "00FF00",
        size, point, pointend);
    pinImages.RED = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + "FE7569",
        size, point, pointend);
    pinImages.ORANGERED = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + "FF4500",
        size, point, pointend);
    pinImages.ORANGE = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + "FFA500",
        size, point, pointend);
    pinImages.YELLOW = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + "FFFF00",
        size, point, pointend);
    pinImages.BLUE = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + "ADD8E6",
        size, point, pointend);
    pinImages.PURPLE = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + "EE82EE",
        size, point, pointend);


    pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
        new google.maps.Size(40, 37),
        new google.maps.Point(0, 0),
        new google.maps.Point(12, 35));  

    getUserPosition();
}


const getUserPosition = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
        };

        userMarker = new google.maps.Marker(
            {position: userPosition, 
            map: googleMap,
            icon: pinImages.USER,
            shadow: pinShadow
            });
    });
}

const fullMapView = function() {
    listingDisplay.show();
    listPage.hide();

    console.log($("#googleMap"));
    $("#googleMap").removeClass("regularMap");
    $("#googleMap").addClass("fullMap");

    resetMarkers();

    const bounds = new google.maps.LatLngBounds();

    const listingkeys = Object.keys(AllListings);
    for(let i = 0; i < listingkeys.length; i++)
    {
        const position = {lat: parseFloat(AllListings[listingkeys[i]].latitude), lng: parseFloat(AllListings[listingkeys[i]].longitude)};
        bounds.extend(position);
        markers.push(new google.maps.Marker(
            {position: position, 
            map: googleMap,
            icon: pinImages.RED,
            shadow: pinShadow
            }));
        console.log(position);
    }

    googleMap.fitBounds(bounds);
}

$("#mapviewbutton").on("click", fullMapView)