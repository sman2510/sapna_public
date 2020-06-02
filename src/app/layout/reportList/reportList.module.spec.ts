import { ReportListModule } from './reportList.module';

describe('ReportListModule', () => {
	let reportListModule: ReportListModule;

    beforeEach(() => {
    	reportListModule = new ReportListModule();
    });

    it('should create an instance', () => {
    	expect(reportListModule).toBeTruthy();
    });
});
