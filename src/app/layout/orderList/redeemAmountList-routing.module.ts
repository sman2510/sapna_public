import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedeemAmountListComponent } from './redeemAmountList.component';

const routes: Routes = [
    {
        path: '', 
        component: RedeemAmountListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RedeemAmountListRoutingModule {

}
