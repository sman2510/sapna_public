import { SubscriptionListModule } from './subscriptionList.module';

describe('SubscriptionListModule', () => {
	let subscriptionListModule: SubscriptionListModule;

    beforeEach(() => {
    	subscriptionListModule = new SubscriptionListModule();
    });

    it('should create an instance', () => {
    	expect(subscriptionListModule).toBeTruthy();
    });
});
