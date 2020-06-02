import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ApiService } from "../service/api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-tables',
    templateUrl: './studentView.component.html',
    styleUrls: ['./studentView.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class StudentViewComponent implements OnInit {
    @ViewChild(DataTableDirective, {static: false})
    dtElement: DataTableDirective;
    isDtInitialized:boolean = false;
    title = 'angulardatatables';
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    public studentId : any;
    public listData : any;
    public redeemData : any;
    public studentData : Array<any> = [];

    constructor(
        private apiService: ApiService,
        private modalService: NgbModal,
        public router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) { }


    ngOnInit() {
        this.studentId = sessionStorage.getItem('studId');
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.listGetData();       
    }


    listGetData(){
        this.SpinnerService.show();
        this.apiService.getData('student/history/'+this.studentId+'?pageName=student').subscribe(res => {
            this.listData = res['data']['order_hist'];
            this.redeemData = res['data']['redeem_history'];
            this.studentData.push(res['data'])
            if (this.isDtInitialized) {
                this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                    dtInstance.destroy();
                    this.dtTrigger.next();
                });
            } else {
                this.isDtInitialized = true;
                this.dtTrigger.next();
            }
            this.SpinnerService.hide();
        },
        error => {
            if(error['error']){
                this.toastr.error(error.error['message']);
               // this.router.navigate(['/login']);
            }
        });
    }

    
    backUrl(){
        this.router.navigate(['/studentList']);
    }

}
