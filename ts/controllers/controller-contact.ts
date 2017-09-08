
import Google = google.maps;

export const contact = (app: angular.IModule) => {
    app.controller('contactCtrl', function ($scope) {
        const styles: Google.MapTypeStyle[] = [
            {
                featureType: "all",
                elementType: "all",
                stylers: [
                    { "visibility": "simplified" },
                    { "hue": "#aa0000" }
                ]
            }
        ];

        const element = document.getElementById('map');
        const options: Google.MapOptions = {
            styles: styles,
            center: { lat: 55.845031, lng: -4.426623 },
            zoom: 16
        };

        const map = new Google.Map(element, options);
    });
};