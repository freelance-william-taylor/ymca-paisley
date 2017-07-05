
var app = angular.module("ymca", ['ngRoute']); 

app.controller('contactCtrl', function($scope) {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
});

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    var homeTemplate = { templateUrl : "html/home.html" };
    $routeProvider
        .when("/", homeTemplate)
        .when("/venue", { templateUrl : "html/venue.html" })
        .when("/activities", { templateUrl : "html/activities.html" })
        .when("/volunteer", { templateUrl : "html/volunteer.html" })
        .when("/donate", { templateUrl : "htclearml/donate.html" })
        .when("/contact", { templateUrl : "html/contact.html", controller: 'contactCtrl' })
        .otherwise(homeTemplate)
});

app.controller("AppController", function($scope) {
    // code
});
