import { RedeemAmountListModule } from './redeemAmountList.module';

describe('RedeemAmountListModule', () => {
	let redeemAmountListModule: RedeemAmountListModule;

    beforeEach(() => {
    	redeemAmountListModule = new RedeemAmountListModule();
    });

    it('should create an instance', () => {
    	expect(redeemAmountListModule).toBeTruthy();
    });
});
