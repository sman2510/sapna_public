import { ChapterListModule } from './chapterList.module';

describe('ChapterListModule', () => {
	let teacherListModule: ChapterListModule;

    beforeEach(() => {
    	chapterListModule = new ChapterListModule();
    });

    it('should create an instance', () => {
    	expect(chapterListModule).toBeTruthy();
    });
});
