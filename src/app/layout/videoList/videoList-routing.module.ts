import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './videoList.component';

const routes: Routes = [
    {
        path: '', 
        component: VideoListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VideoListRoutingModule {

}
