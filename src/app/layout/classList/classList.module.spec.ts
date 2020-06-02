import { ClassListModule } from './classList.module';

describe('ClassListModule', () => {
	let classListModule: ClassListModule;

    beforeEach(() => {
    	classListModule = new ClassListModule();
    });

    it('should create an instance', () => {
    	expect(classListModule).toBeTruthy();
    });
});
