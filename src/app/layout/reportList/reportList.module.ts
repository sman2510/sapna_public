import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListRoutingModule } from './reportList-routing.module';
import { ReportListComponent } from './reportList.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from "ngx-spinner";  
import { ChildComponent } from './child/child.component';

@NgModule({
    imports: [
    	CommonModule, 
    	ReportListRoutingModule, 
    	PageHeaderModule, 
    	NgbModule,
    	FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        DataTablesModule,
        NgxSpinnerModule
    ],
    declarations: [ReportListComponent, ChildComponent],
    entryComponents: [ChildComponent]
})

export class ReportListModule {}
