
var app = angular.module("ymca", ['ngRoute']);
app.controller('homeCtrl', function ($scope, $location) {
    $scope.goto = function (newLocation) {
        $location.path(newLocation);
    }
});

app.controller('navCtrl', function($scope) {
    $scope.isActive = false;
    $scope.toggle = function() {
        $scope.isActive = !$scope.isActive;
    }

    $scope.close = function() {
        if($scope.isActive) {
            $scope.toggle();
        }
    }
});

app.controller('venueCtrl', function ($scope) {
    // TODO: Write Venue Controller
});

app.controller('activitiesCtrl', function ($scope) {
    // TODO: Write Activities Controller
});

app.controller('volunteerCtrl', function ($scope) {
    // TODO: Write Volunteer Controller
});

app.controller('donateCtrl', function ($scope) {
    // TODO: Write Donate Controller
});

app.controller('contactCtrl', function ($scope) {
    var styles = [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "hue": "#aa0000"
                }
            ]
        }
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        styles: styles,
        center: { lat: 55.845031, lng: -4.426623 },
        zoom: 16
    });
});

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/", { templateUrl: "html/home.html", controller: 'homeCtrl' })
        .when("/venue", { templateUrl: "html/venue.html" })
        .when("/ienterprise", { templateUrl: "html/ienterprise.html" })
        .when("/programmes", { templateUrl: "html/programmes.html" })
        .when("/youth-clubs", { templateUrl: "html/youth-clubs.html" })
        .when("/volunteer", { templateUrl: "html/volunteer.html" })
        .when("/donate", { templateUrl: "html/donate.html" })
        .when("/contact", { templateUrl: "html/contact.html", controller: 'contactCtrl' })
        .otherwise({ redirectTo: '/' })
});