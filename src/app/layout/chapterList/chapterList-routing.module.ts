import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterListComponent } from './chapterList.component';

const routes: Routes = [
    {
        path: '', 
        component: ChapterListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ChapterListRoutingModule {

}
