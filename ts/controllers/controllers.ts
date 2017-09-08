
import { contact} from './controller-contact';
import { home } from './controller-home';
import { nav } from './controller-nav';

export const bootstrapControllers = (app: angular.IModule) => {
    contact(app);
    home(app);
    nav(app);
}