//Individual pages in the app
const listPage = $("#listPage");
const landingPage = $("#landingPage");
const listingDisplay = $("#listingDisplay");

const listingCardsDiv = $("#allListingCards");
const listingList = $("#allListingsList");

const curLocationButton = $("#curLocation");
const moreButton = $("#moreButton");
const newLocationButton = $("#newLocation");
const listingBackButton = $("#listBackButton");

const loginModalError = $("#loginModalError");
const loginModalErrorText = $("#loginModalErrorText");

const modalLoginButton = $("#modalLoginButton");

const loggedInNavbar = $("#loggedInNavbar");

const mapViewButtons = $("#mapViewButtons");

const profileModal = $("#profileModal");
const profilePicture = $("#profilePicture");
const profileName = $("#profileName");
const profilePhone = $("#profilePhone");
const profileEmail = $("#profileEmail");
const profileAbout = $("#profileAbout");

const newPostModal = $("#newPostModal");
const newListingTitle = $("#newListingTitle");
const newListingDescription = $("#newListingDescription");
const newListingPicture = $("#newListingPicture");

//Information shown on the listing display page
const listingTitle = $("#listingTitle");
const listingBody = $("#listingBody");
const googleMapDiv = $("#googleMap");

const AllListings = {};
let seenListings = [];

let viewStates = {
    FULLMAP: 1,
    COMPACT: 2,
    EXPANDED: 3
}

let currentViewState = viewStates.COMPACT

//Google maps functionality
let googleMap; //The map itself, javascript is run on it and objects using it refer to it

let userPosition; //HTML5 Geolocated user position, or user set position
let userMarker; //User location for use within searches, colored green

let markers = []; //Markers list, so they can be unset from map

let pinImages = {}; //Colored marker icons for marker constructor
let pinShadow;  //Marker shadow for marker constructor

let mapViewBounds;

let usernameLogged;
let passwordLogged;

let cardOffset = 0;
let mapViewOffset = 0;


seenListings = JSON.parse(window.localStorage.getItem('seenListings')) || [];

const showMoreListings = function(userPosition) {
    $.ajax({
        url: `/api/listing/${cardOffset}`,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        for(let i = 0; i < response.length; i++)
        {
            console.log(response[i]);
            listingCardsDiv.append(createListingCard(response[i]));
            listingList.append(createListingsListElement(response[i]));
            AllListings[`${response[i].id}`] = response[i];
        }
        cardOffset += response.length;
        console.log(AllListings);
    })
};

moreButton.on("click", showMoreListings);

const createListingCard = function(listing) {
    console.log(listing.id);
    return $(
    `
    <a href="#listingDisplay" class='listinganchor' onclick='displaySingleListing(this)' data-id='${listing.id}' id='${createCardID(listing.id)}'>
        <div class="card listing ${hasSeenListing(listing.id) ? 'border-dark' : 'border-primary'}">
            <h5 class="card-header text-capitalize ${hasSeenListing(listing.id) ? 'text-secondary' : 'text-dark'}">${listing.title}</h5>
            <div class="card-body">
                <h5 class="card-title">created by <a class="text-primary cursorlink" onclick="showUserProfileFromLink(this);" data-username="${listing.username}">${listing.username}</a></h5>
                <p class="card-text">${listing.body.length > 300 ? `${listing.body.slice(0, 300)}...` : listing.body}</p>
            </div>
        </div>
    </a>
    `);
}

const createCardID = function(listingid)
{
    return `${listingid}card`;
}

const displaySingleListing = function(anchor) {
    const id = $(anchor).data('id');
    addSeenListing(id);

    if(currentViewState == viewStates.COMPACT)
    {
        listPage.hide();
    }
    listingDisplay.show();

    const listing = AllListings[id];
    listingTitle.text(listing.title);
    listingBody.text(listing.body);
    $("#listingAuthor").html(`created by <a class="text-primary cursorlink" onclick="showUserProfileFromLink(this);" data-username="${listing.username}">${listing.username}</a>`);

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

const addSeenListing = function(id) {
    seenListings.push(id);
    

    window.localStorage.setItem('seenListings', JSON.stringify(seenListings));
}

const createListingsListElement = function(listing) {
    let classname = `list-group-item-primary`;
    if(hasSeenListing(listing.id))
    {
        classname = `list-group-item-secondary`;
    }
    return $(`
    <li class="list-group-item ${classname} text-capitalize" onclick='displaySingleListing(this);' data-id='${listing.id}' id='${createListElementID(listing.id)}'>
        ${listing.title}
    </li>
    `);
}

const hasSeenListing = function(id) {
    return seenListings.includes(id);
}

const leaveExpandedView = function() {
    if(currentViewState == viewStates.COMPACT)
    {
        return;
    }

    $("#expandedView").hide();
    $("#compactView").show();
    $("#listBackButton").show();

    listingDisplay.detach();
    $("#listingDisplayCompact").append(listingDisplay);
    $("#pageContainer").addClass('container');
    $("#pageContainer").removeClass('container-fluid');

    currentViewState = viewStates.COMPACT;
}

const enableExpandedMode = function() {
    if(currentViewState == viewStates.EXPANDED)
    {
        return;
    }

    resetToCompact();

    $("#compactView").hide();
    $("#expandedView").show();
    $("#listBackButton").hide();

    listingDisplay.detach();
    $("#listingDisplayExpanded").append(listingDisplay);
    $("#pageContainer").removeClass('container');
    $("#pageContainer").addClass('container-fluid');


    currentViewState = viewStates.EXPANDED;
}

const createListElementID = function(listingid) {
    return `${listingid}listelement`
}

const displayAllListing = function() {
    listingDisplay.hide();
    listPage.show();
}

listingBackButton.on("click", displayAllListing)

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
}

const getUserPosition = function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        let latlng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        setUserPosition(latlng)
    });
}

const setUserPosition = function(latlngobject) {
    userPosition = latlngobject;

    userMarker = new google.maps.Marker(
        {position: userPosition, 
        map: googleMap,
        icon: pinImages.USER,
        shadow: pinShadow
        });

    showMoreListings(userPosition);

    listPage.show();
    landingPage.hide();
}

curLocationButton.on("click", getUserPosition);

const showMoreMapListings = function(userPosition) {
    $.ajax({
        url: `/api/listing/${mapViewOffset}`,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        for(let i = 0; i < response.length; i++)
        {
            const position = {lat: parseFloat(response[i].latitude), lng: parseFloat(response[i].longitude)};
            mapViewBounds.extend(position);
            markers.push(new google.maps.Marker(
                {position: position, 
                map: googleMap,
                icon: pinImages.RED,
                shadow: pinShadow
                }));
        }
        mapViewOffset += response.length;
        console.log(AllListings);

        googleMap.fitBounds(mapViewBounds);
    })
};

const fullMapView = function() {
    if(currentViewState == viewStates.FULLMAP)
    {
        return;
    }
    
    resetToCompact();
    listingDisplay.show();
    listPage.hide();
    mapViewButtons.show();

    googleMapDiv.removeClass("regularMap");
    googleMapDiv.addClass("fullMap");

    resetMarkers();

    mapViewOffset = 0;
    mapViewBounds = new google.maps.LatLngBounds();

    showMoreMapListings();

    currentViewState = viewStates.FULLMAP;
}

const leaveFullMapView = function() {
    if(currentViewState == viewStates.FULLMAP)
    {
        googleMapDiv.addClass("regularMap");
        googleMapDiv.removeClass("fullMap");

        listingDisplay.hide();
        listPage.show();
        mapViewButtons.hide();
        console.log("hello");
        currentViewState = viewStates.COMPACT;
    }
}

const resetToCompact = function() {
    if(currentViewState == viewStates.FULLMAP)
    {
        leaveFullMapView();
        return;
    }
    else if(currentViewState == viewStates.EXPANDED)
    {
        leaveExpandedView();
        return;
    }
}

const returnToLandingPage = function() {
    $(".appPage").hide();
    landingPage.show();
}

newLocationButton.on("click", returnToLandingPage);

const loginFunction = function() {
    let username = $("#loginUsername");
    let password = $("#loginPassword");

    if(!password.val() || !username.val())
    {
        return;
    }

    let data = {
        username: username.val(),
        password: password.val()
    }

    $.ajax({
        url: '/api/login',
        method: 'POST',
        data: data
    }).then(function(response) {
        if(response.success)
        {
            username.val("");
            password.val("");

            completeLogin(data.username, data.password);
        }
        else if(response.error)
        {
            showLoginError(response.error);
        }
    })
}

$("#loginButton").on("click", loginFunction);

const createAccount = function() {
    let username = $("#createUsername");
    let password = $("#createPassword");
    let email = $("#createEmail");

    if(!username.val() || !password.val() || !email.val())
    {
        return;
    }

    if(username.val().length < 6)
    {
        showLoginError("Username must be 6 or more characters");
        return;
    }
    else if(password.val().length < 6)
    {
        showLoginError("Password must be 6 or more characters");
        return;
    }
    else if(!validateEmail(email.val()))
    {
        showLoginError("Invalid email address");
        return;
    }

    let data = {
        username: username.val(),
        password: password.val(),
        email: email.val(),
    }

    $.ajax({
        url: '/api/signup',
        method: 'POST',
        data: data
    }).then(function(response) {
        if(response.success)
        {
            username.val("");
            password.val("");
            email.val("");

            completeLogin(data.username, data.password);
        }
        else if(response.error)
        {
            showLoginError(response.error);
        }
    })
}

$("#createButton").on("click", createAccount);

const validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const showLoginError = function(error) {
    loginModalError.show();
    loginModalErrorText.text(error);
    setTimeout(() => {
        loginModalError.fadeOut('slow');
    }, 2000);
}

const completeLogin = function(username, password) {
    usernameLogged = username.toLowerCase();
    passwordLogged = password;

    modalLoginButton.hide();
    loggedInNavbar.show();

    $("#loginModal").modal('hide');
}

const userLogout = function() {
    modalLoginButton.show();
    loggedInNavbar.hide();

    usernameLogged = null;
    passwordLogged = null;
}

$("#logoutButton").on("click", userLogout);

const showUserProfile = function() {
    showProfile(usernameLogged);
}

$("#profileButton").on("click", showUserProfile);

const showUserProfileFromLink = function(anchor) {
    let username = $(anchor).data("username");
    showProfile(username);
}

const showProfile = function(username) {
    $.ajax({
        url: `/api/profile/${username}`,
        method: 'GET'
    }).then(function(response) {
        if(response.error)
        {
            return console.log(response.error)
        }
        profilePicture.attr("src", response.picture);
        profileName.text(response.name);
        profilePhone.text(response.phone);
        profileEmail.text(response.email);
        profileAbout.text(response.about);

        profileModal.modal();
    });
}

const submitNewListing = function() {
    let title = newListingTitle.val();
    let picture = newListingPicture.val();
    let description = newListingDescription.val();

    if(title && picture && description && locationToMeet && usernameLogged && passwordLogged)
    {
        let newpost = {
            user: {
                username: usernameLogged,
                password: passwordLogged
            },
            listing: {
                title: title,
                picture: picture,
                body: description,
                username: usernameLogged
            }
        }

        $.ajax({
            url: '/api/newpost',
            method: 'POST',
            data: newpost
        }).then(function(response) {
            console.log(response);
            if(response.error)
            {
                return console.log(response.error);
            }
            listingCardsDiv.prepend(createListingCard(response));
            listingList.prepend(createListingsListElement(response));
            AllListings[response.id] = response;

            $("#newPostModal").modal('hide');
        })
    }
}

const geolocateUser = function() {
    if($('#userGeolocation').val())
    {
        findGeocode($('#userGeolocation').val(), setUserPosition)
    }
}

const chooseMeetupLocation = function() {
    if($('#meetupLocation').val())
    {
        findGeocode($('#meetupLocation').val(), setMeetupLocation)
    }
}

let currentResults;
let geocodeCallback;
const findGeocode = function(addressstring, callback) {
    let paramstring = $.param({
        key: 'AIzaSyBX_xk801I4H5j3WIXmAFLQFw3mAYnplok',
        address: addressstring
    })

    $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?${paramstring}`,
        method: 'GET'
    }).then(function(response) {
        if(response.status === "OK")
        {
            geocodeCallback = callback;
            if(response.results.length > 1)
            {
                currentResults = response.results;
                let geocodelist = $("#geocodeLocationsList");
                geocodelist.empty();

                for(let i = 0; i < response.results.length && i < 11; i++)
                {
                    geocodelist.append(`<li><a class="text-primary cursorlink" onclick='finishGeocode(this);' data-entry='${i}'>${response.results[i].formatted_address}</a></li>`)
                }

                $("#geocodeModal").modal('show');
                console.log('hello');
            }
        }
        else
        {
            geocodeCallback = null;
        }
        console.log(response);
    })
}

const finishGeocode = function(anchor) {
    let entry = parseInt($(anchor).data('entry'));
    let result = currentResults[entry];

    geocodeCallback(result.geometry.location);
    geocodeCallback = null;

    let geocodelist = $("#geocodeLocationsList");
    $("#geocodeModal").modal('hide');
    geocodelist.empty();
    currentResults = null;
}

let locationToMeet;
const setMeetupLocation = function(latlng) {
    let meetuplocationheader = $("#chosenMeetupLocation");

    meetuplocationheader.show();
    meetuplocationheader.text(JSON.stringify(latlng));
    locationToMeet = latlng;
}