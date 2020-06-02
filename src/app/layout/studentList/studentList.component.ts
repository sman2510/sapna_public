import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ApiService } from "../service/api.service";
import { ExportService } from "../service/export.service";
import { NgxSpinnerService } from "ngx-spinner";
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-tables',
    templateUrl: './studentList.component.html',
    styleUrls: ['./studentList.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class StudentListComponent implements OnInit {
    @ViewChild(DataTableDirective, {static: false})
    dtElement: DataTableDirective;
    isDtInitialized:boolean = false;
    title = 'angulardatatables';
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    public apiUrl : any;
    public listData : any;
    public downloadData : Array<any> = [];
    public modalReference : any;
    public editID : any;
    closeResult : string;    
    detailForm : FormGroup;
    submitted = false;

    constructor(
        private apiService: ApiService,
        private exportService: ExportService,
        private modalService: NgbModal,
        public router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) { }


    ngOnInit() {
        sessionStorage.removeItem('studId');
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.detailForm = this.formBuilder.group({
            status: ["", Validators.required],
        });
        this.listGetData();       
    }


    listGetData(){
        this.SpinnerService.show();
        this.apiService.getData('student/list?pageName=student').subscribe(res => {
            this.listData = res['data'];
            var tempData = JSON.parse(JSON.stringify(res['data']));
            tempData.forEach(element => {
                delete element['email_verified_at'];
                delete element['password'];
                delete element['remember_token'];
                delete element['created_at'];
                delete element['updated_at'];
                delete element['role'];
                delete element['status'];
                delete element['image'];
                delete element['user_id'];
                delete element['id'];
                this.downloadData.push(element);
            });
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
                this.router.navigate(['/login']);
            }
        });
    }


    deleteData(id:any){
        Swal.fire({
            title: 'Are you sure?',
            text: "You wan't to delete ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                var obj = {
                    "id" : id
                }
                this.apiService.saveData('student/delete?pageName=student', obj).subscribe(res => {
                    this.listGetData();
                    this.toastr.success(res['message']);
                });    
            } else if (result.dismiss === Swal.DismissReason.cancel) {

            }
        })
    }


    editData(id:any){
        this.editID = id;
        this.SpinnerService.show();
        this.apiService.getData('student/list/'+id+'?pageName=student').subscribe(res => {
            this.detailForm.controls['status'].setValue(res['data'].status);
            this.SpinnerService.hide();
        });
    }


    saveDetail(){
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        this.apiUrl = 'student/status/update';
        this.detailForm.value['id'] = this.editID;
        this.detailForm.value['pageName'] = 'student';
        this.apiService.saveData(this.apiUrl, this.detailForm.value).subscribe(res => {
            this.SpinnerService.hide();
            if(res['status']){
                this.modalReference.close();
                this.listGetData();
                this.toastr.success(res['message']);
            }else{
                this.toastr.error(res['message']);
            }
        });    
    }


    open(content:any, type:any, id:any) {
        this.submitted = false;
        this.detailForm.markAsPristine();
        this.detailForm.markAsUntouched();
        this.detailForm.updateValueAndValidity();
        this.detailForm.reset();
        this.detailForm.clearValidators();
        Object.keys(this.detailForm.controls).forEach(key => {
            this.detailForm.get(key).setErrors(null) ;
        });
        
        this.editData(id);

        this.modalReference = this.modalService.open(content);
        this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }


    getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }


    get fval() {
        return this.detailForm.controls; 
    }













    addStudent(){
        this.router.navigate(['/studentAdd']);
    }    


    editStudent(id:any){
        sessionStorage.setItem('studId', id);
        this.router.navigate(['/studentEdit']);
    }


    viewStudent(id:any){
        sessionStorage.setItem('studId', id);
        this.router.navigate(['/studentView']);
    }    


    getExcel(){
        this.SpinnerService.show();
        this.exportService.exportExcel(this.downloadData, 'Student');
        this.SpinnerService.hide();
    }


}
