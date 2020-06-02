import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherListComponent } from './teacherList.component';

const routes: Routes = [
    {
        path: '', 
        component: TeacherListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeacherListRoutingModule {

}
