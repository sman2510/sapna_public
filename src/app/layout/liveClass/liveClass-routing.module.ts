import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveClassComponent } from './liveClass.component';

const routes: Routes = [
    {
        path: '', 
        component: LiveClassComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LiveClassRoutingModule {

}
