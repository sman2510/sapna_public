import { StudentViewModule } from './studentView.module';

describe('StudentViewModule', () => {
	let studentViewModule: StudentViewModule;

    beforeEach(() => {
    	studentViewModule = new StudentViewModule();
    });

    it('should create an instance', () => {
    	expect(studentViewModule).toBeTruthy();
    });
});
