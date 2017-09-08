
export const home = (app: angular.IModule) => {
    app.controller('homeCtrl', function ($scope, $location) {
        $scope.goto = function (newLocation: string) {
            $location.path(newLocation); 
        }
    });
}