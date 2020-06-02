import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorDashboardComponent } from './vendorDashboard.component';

const routes: Routes = [
    {
        path: '', 
        component: VendorDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VendorDashboardRoutingModule {

}
