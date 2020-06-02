import { VendorDashboardModule } from './vendorDashboard.module';

describe('VendorDashboardModule', () => {
	let vendorDashboardModule: VendorDashboardModule;

    beforeEach(() => {
    	vendorDashboardModule = new VendorDashboardModule();
    });

    it('should create an instance', () => {
    	expect(vendorDashboardModule).toBeTruthy();
    });
});
