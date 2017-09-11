
import { emailService } from './service-email';

export const bootstrapServices = (app: angular.IModule) => {
	emailService(app);
}