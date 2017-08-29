
var app = angular.module("ymca", ['ngRoute']); 

app.controller('homeCtrl', function($scope, $location) {
    console.log('Controller being created')
    $scope.goto = function(newLocation) {
        $location.path(newLocation);
    }
});

app.controller('venueCtrl', function($scope) {
    // TODO: Write Venue Controller
});

app.controller('activitiesCtrl', function($scope) {
    // TODO: Write Activities Controller
});

app.controller('volunteerCtrl', function($scope) {
    // TODO: Write Volunteer Controller
});

app.controller('donateCtrl', function($scope) {
    // TODO: Write Donate Controller
});

app.controller('contactCtrl', function($scope) {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.845031, lng: -4.426623 },
        zoom: 16
    });
});

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when("/", { templateUrl : "html/home.html", controller: 'homeCtrl'  })
        .when("/venue", { templateUrl : "html/venue.html" })
        .when("/activities", { templateUrl : "html/activities.html" })
        .when("/volunteer", { templateUrl : "html/volunteer.html" })
        .when("/donate", { templateUrl : "html/donate.html" })
        .when("/contact", { templateUrl : "html/contact.html", controller: 'contactCtrl' })
            .otherwise({redirectTo: '/'})
});