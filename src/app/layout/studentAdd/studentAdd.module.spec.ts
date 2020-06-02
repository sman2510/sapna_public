import { StudentAddModule } from './studentAdd.module';

describe('StudentAddModule', () => {
	let studentAddModule: StudentAddModule;

    beforeEach(() => {
    	studentAddModule = new StudentAddModule();
    });

    it('should create an instance', () => {
    	expect(studentAddModule).toBeTruthy();
    });
});
