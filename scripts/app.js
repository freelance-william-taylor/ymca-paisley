
var app = angular.module("ymca", ['ngRoute']); 

app.controller('contactCtrl', function($scope) {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.845031, lng: -4.426623 },
        zoom: 16
    });
});

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/", { templateUrl : "html/home.html" })
        .when("/venue", { templateUrl : "html/venue.html" })
        .when("/activities", { templateUrl : "html/activities.html" })
        .when("/volunteer", { templateUrl : "html/volunteer.html" })
        .when("/donate", { templateUrl : "html/donate.html" })
        .when("/contact", { templateUrl : "html/contact.html", controller: 'contactCtrl' })
            .otherwise({redirectTo: '/'})
});