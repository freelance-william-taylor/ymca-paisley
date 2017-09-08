
export const nav = (app: angular.IModule) => {
    app.controller('navCtrl', function ($scope, $location) {
        $scope.isActive = false;
        $scope.toggle = function () {
            $scope.isActive = !$scope.isActive;
        }

        $scope.open = function (newLocation: string) {
            $location.path(newLocation);
            $scope.toggle();
        }

        $scope.close = function () {
            if ($scope.isActive) {
                $scope.toggle();
            }
        }
    });
};
