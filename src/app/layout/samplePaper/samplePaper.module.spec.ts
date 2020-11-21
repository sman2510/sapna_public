import { SamplePaperModule } from './samplePaper.module';

describe('SamplePaperModule', () => {
	let samlePaperModule: SamplePaperModule;

    beforeEach(() => {
    	samplePaperModule = new SamplePaperModule();
    });

    it('should create an instance', () => {
    	expect(samplePaperModule).toBeTruthy();
    });
});
