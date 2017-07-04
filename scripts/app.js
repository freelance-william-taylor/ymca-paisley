
var app = angular.module("ymca", ['ngRoute']); 

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    var homeTemplate = { templateUrl : "html/home.html" };
    $routeProvider
        .when("/", homeTemplate)
        .when("/venue", { templateUrl : "html/venue.html" })
        .when("/activities", { templateUrl : "html/activities.html" })
        .when("/volunteer", { templateUrl : "html/volunteer.html" })
        .when("/donate", { templateUrl : "html/donate.html" })
        .when("/contact", { templateUrl : "html/contact.html" })
        .otherwise(homeTemplate)
});

app.controller("AppController", function($scope) {
    // code
});
