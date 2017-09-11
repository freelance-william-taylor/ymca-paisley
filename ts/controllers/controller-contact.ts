
import { mapStyles } from '../model/consts';
import Google = google.maps;

export const contact = (app: angular.IModule) => {
    app.controller('contactCtrl', function ($scope, $timeout, email) {
        $scope.subjects = [
            "Activities",
            "Volunteering",
            "Questions",
            "Help"
        ];

        $scope.subject = $scope.subjects[0];
        $scope.setupMap = function() {
            $timeout(() => {
                const element = document.getElementById('map');
                const options: Google.MapOptions = {
                    styles: mapStyles,
                    center: { lat: 55.845031, lng: -4.426623 },
                    zoom: 16
                };

                const map = new Google.Map(element, options);   
            });
        }

        $scope.clear = function() {
            $scope.name = "";
            $scope.email = "";
            $scope.subject = "";
            $scope.message = "";
        }

        $scope.submit = function() {
            email.send({ 
                name: $scope.name,
                email: $scope.email,
                subject: $scope.subject,
                message: $scope.message
            });

            $scope.clear();
        }
    });
};