import { SubjectListModule } from './subjectList.module';

describe('SubjectListModule', () => {
	let subjectListModule: SubjectListModule;

    beforeEach(() => {
    	subjectListModule = new SubjectListModule();
    });

    it('should create an instance', () => {
    	expect(subjectListModule).toBeTruthy();
    });
});
