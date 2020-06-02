import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAddComponent } from './studentAdd.component';

const routes: Routes = [
    {
        path: '', 
        component: StudentAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StudentAddRoutingModule {

}
