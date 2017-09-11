
import { Email } from '../model/model';

export const emailService = (app: angular.IModule) => {
    app.service('email', function() {
        this.send = (email: Email) => {
        	console.log(JSON.stringify(email));
        }
    });
}