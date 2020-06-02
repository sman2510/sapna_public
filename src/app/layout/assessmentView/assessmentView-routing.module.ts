import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentViewComponent } from './assessmentView.component';

const routes: Routes = [
    {
        path: '', 
        component: AssessmentViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AssessmentViewRoutingModule {

}
