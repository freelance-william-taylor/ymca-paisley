
import { enterprise } from './controller-enterprise';
import { programmes } from './controller-programmes';
import { contact} from './controller-contact';
import { donate } from './controller-donate';
import { youth } from './controller-youth';
import { venue } from './controller-venue'; 
import { home } from './controller-home';
import { nav } from './controller-nav';

const controllers: ((app: angular.IModule) => void)[] = [ 
	programmes,
	enterprise,
	donate,
	contact,
	youth,
	venue,
	home,
	nav
];

export const bootstrapControllers = (app: angular.IModule) => {
	controllers.forEach(ctrl => ctrl(app));
}