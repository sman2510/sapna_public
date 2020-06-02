import { VendorListModule } from './vendorList.module';

describe('VendorListModule', () => {
	let vendorListModule: VendorListModule;

    beforeEach(() => {
    	vendorListModule = new VendorListModule();
    });

    it('should create an instance', () => {
    	expect(vendorListModule).toBeTruthy();
    });
});
