import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplePaperComponent } from './samplePaper.component';

const routes: Routes = [
    {
        path: '', 
        component: SamplePaperComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SamplePaperRoutingModule {

}
