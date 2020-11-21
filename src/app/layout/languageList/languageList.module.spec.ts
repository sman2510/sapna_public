import { LanguageListModule } from './languageList.module';

describe('LanguageListModule', () => {
	let languageListModule: LanguageListModule;

    beforeEach(() => {
    	languageListModule = new LanguageListModule();
    });

    it('should create an instance', () => {
    	expect(languageListModule).toBeTruthy();
    });
});
