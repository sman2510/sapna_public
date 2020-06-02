import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectListComponent } from './subjectList.component';

const routes: Routes = [
    {
        path: '', 
        component: SubjectListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SubjectListRoutingModule {

}
