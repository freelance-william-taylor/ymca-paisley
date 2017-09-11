
import { ViewControllerMap } from './model';
import Google = google.maps;

export const routeTable: ViewControllerMap = {
    "/": { templateUrl: "html/home.html", controller: 'homeCtrl' },
    "/venue": { templateUrl: "html/venue.html", controller: 'venueCtrl' },
    "/ienterprise": { templateUrl: "html/ienterprise.html", controller: 'enterpriseCtrl' },
    "/programmes": { templateUrl: "html/programmes.html", controller: 'programmesCtrl' },
    "/youth-clubs": { templateUrl: "html/youth-clubs.html", controller: 'youthCtrl' },
    "/volunteer": { templateUrl: "html/volunteer.html", controller: 'volunteerCtrl' },
    "/donate": { templateUrl: "html/donate.html", controller: 'donateCtrl' },
    "/contact": { templateUrl: "html/contact.html", controller: 'contactCtrl' }
};

 export const mapStyles: Google.MapTypeStyle[] = [
    {
        featureType: "all",
        elementType: "all",
        stylers: [
            { "visibility": "simplified" },
            { "hue": "#FF0000" }
        ]
    }
];