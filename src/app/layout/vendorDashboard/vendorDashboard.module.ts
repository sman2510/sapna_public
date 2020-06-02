import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorDashboardRoutingModule } from './vendorDashboard-routing.module';
import { VendorDashboardComponent } from './vendorDashboard.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from "ngx-spinner";  

@NgModule({
    imports: [
    	CommonModule, 
    	VendorDashboardRoutingModule, 
    	PageHeaderModule, 
    	NgbModule,
    	FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        DataTablesModule,
        NgxSpinnerModule
    ],
    declarations: [VendorDashboardComponent]
})

export class VendorDashboardModule {}
