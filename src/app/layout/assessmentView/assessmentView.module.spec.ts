import { AssessmentViewModule } from './assessmentView.module';

describe('AssessmentViewModule', () => {
	let assessmentViewModule: AssessmentViewModule;

    beforeEach(() => {
    	assessmentViewModule = new AssessmentViewModule();
    });

    it('should create an instance', () => {
    	expect(assessmentViewModule).toBeTruthy();
    });
});
