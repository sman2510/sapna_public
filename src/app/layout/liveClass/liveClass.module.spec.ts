import { LiveClassModule } from './liveClass.module';

describe('LiveClassModule', () => {
	let liveClassModule: LiveClassModule;

    beforeEach(() => {
    	liveClassModule = new LiveClassModule();
    });

    it('should create an instance', () => {
    	expect(liveClassModule).toBeTruthy();
    });
});
