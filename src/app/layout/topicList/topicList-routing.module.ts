import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent } from './topicList.component';

const routes: Routes = [
    {
        path: '', 
        component: TopicListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TopicListRoutingModule {

}
