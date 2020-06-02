import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListRoutingModule } from './vendorList-routing.module';
import { VendorListComponent } from './vendorList.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from "ngx-spinner";  

@NgModule({
    imports: [
    	CommonModule, 
    	VendorListRoutingModule, 
    	PageHeaderModule, 
    	NgbModule,
    	FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        DataTablesModule,
        NgxSpinnerModule
    ],
    declarations: [VendorListComponent]
})

export class VendorListModule {}
