
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

export interface Email {
    name: string;
    email: string;
    subject: string;
    message: string;
}