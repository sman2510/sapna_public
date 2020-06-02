import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionListComponent } from './subscriptionList.component';

const routes: Routes = [
    {
        path: '', 
        component: SubscriptionListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SubscriptionListRoutingModule {

}
