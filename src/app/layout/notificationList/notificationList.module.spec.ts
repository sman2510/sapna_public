import { NotificationListModule } from './notificationList.module';

describe('NotificationListModule', () => {
	let notificationListModule: NotificationListModule;

    beforeEach(() => {
    	notificationListModule = new NotificationListModule();
    });

    it('should create an instance', () => {
    	expect(notificationListModule).toBeTruthy();
    });
});
