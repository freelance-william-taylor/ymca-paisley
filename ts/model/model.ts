
export interface GroupItem {
    title: string;
    description: string;
    image: string;
}

export interface ViewControllerEntry {
    templateUrl?: string;
    controller?: string;
}

export interface ViewControllerMap {
    [key: string]: ViewControllerEntry;
}

export const routeTable: ViewControllerMap = {
    "/": { templateUrl: "html/home.html", controller: 'homeCtrl' },
    "/venue": { templateUrl: "html/venue.html" },
    "/ienterprise": { templateUrl: "html/ienterprise.html" },
    "/programmes": { templateUrl: "html/programmes.html" },
    "/youth-clubs": { templateUrl: "html/youth-clubs.html" },
    "/volunteer": { templateUrl: "html/volunteer.html" },
    "/donate": { templateUrl: "html/donate.html" },
    "/contact": { templateUrl: "html/contact.html", controller: 'contactCtrl' }
};