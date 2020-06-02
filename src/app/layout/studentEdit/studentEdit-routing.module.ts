import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentEditComponent } from './studentEdit.component';

const routes: Routes = [
    {
        path: '', 
        component: StudentEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StudentEditRoutingModule {

}
