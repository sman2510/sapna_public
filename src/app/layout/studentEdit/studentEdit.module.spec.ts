import { StudentEditModule } from './studentEdit.module';

describe('StudentEditModule', () => {
	let studentEditModule: StudentEditModule;

    beforeEach(() => {
    	studentEditModule = new StudentEditModule();
    });

    it('should create an instance', () => {
    	expect(studentEditModule).toBeTruthy();
    });
});
