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
    templateUrl: './subjectList.component.html',
    styleUrls: ['./subjectList.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class SubjectListComponent implements OnInit {
    @ViewChild(DataTableDirective, {static: false})
    dtElement: DataTableDirective;
    isDtInitialized:boolean = false;
    title = 'angulardatatables';
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    public apiUrl : any;
    public listData : any;
    public classData : any;
    public teacherData : any;
    public editID : any;
    public modalReference : any;
    public formType : string;
    public tempFileData : any;
    closeResult : string;    
    detailForm : FormGroup;
    submitted = false;

    constructor(
        private apiService: ApiService,
        private modalService: NgbModal,
        public router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) { }


    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.detailForm = this.formBuilder.group({
            class_id: ["", Validators.required],
            teacher_id: ["", Validators.required],
            subject_name: ["", Validators.required],
            color_code: ["", Validators.required],
            icons: ["", Validators.required],
            description: ["", Validators.required],
        });
        this.listGetData();
        this.getClassData();
        this.getTeacherData();
    }


    getClassData(){
        this.apiService.getData('class/list?pageName=subject').subscribe(res => {
            this.classData = res['data'];
        });    
    }


    getTeacherData(){
        this.apiService.getData('teacher/list?pageName=subject').subscribe(res => {
            this.teacherData = res['data'];
        });    
    }


    listGetData(){
        this.SpinnerService.show();
        this.apiService.getData('subject/list?pageName=subject').subscribe(res => {
            this.listData = res['data'];
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


    editData(id:any){
        this.SpinnerService.show();
        this.editID = id;
        this.apiService.getData('subject/list/'+this.editID+'?pageName=subject').subscribe(res => {
            this.detailForm.controls['class_id'].setValue(res['data'].class_id);
            this.detailForm.controls['teacher_id'].setValue(res['data'].teacher_id);
            this.detailForm.controls['subject_name'].setValue(res['data'].subject_name);
            this.detailForm.controls['color_code'].setValue(res['data'].color_code);
            this.detailForm.controls['description'].setValue(res['data'].description);
            this.SpinnerService.hide();
        });    
    }


    saveDetail(){
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        if(this.formType == 'add'){
            this.apiUrl = 'subject/add';
        }else{
            this.detailForm.value['id'] = this.editID;
            this.apiUrl = 'subject/edit';
        }
        if(this.formType == 'edit' &&  this.tempFileData == undefined){
            this.detailForm.value.image = '';
            this.tempFileData = '';
        }
        const formDataTest = new FormData();
        formDataTest.append('pageName', 'subject');
        formDataTest.append('class_id', this.detailForm.value.class_id);
        formDataTest.append('teacher_id', this.detailForm.value.teacher_id);
        formDataTest.append('subject_name', this.detailForm.value.subject_name);
        formDataTest.append('color_code', this.detailForm.value.color_code);
        formDataTest.append('description', this.detailForm.value.description);
        formDataTest.append('icons', this.tempFileData);
        if(this.formType == 'edit'){
            formDataTest.append('id', this.editID);
        }
        this.apiService.saveData(this.apiUrl, formDataTest).subscribe(res => {
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


    uploadFile(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.tempFileData = file;
            this.detailForm.value.icons = file;
        }
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
                this.apiService.saveData('subject/delete?pageName=subject', obj).subscribe(res => {
                    this.listGetData();
                    this.toastr.success(res['message']);
                });    
            } else if (result.dismiss === Swal.DismissReason.cancel) {

            }
        })
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
        
        if(type == 'edit'){
            this.editData(id);
            this.formType = 'edit';
            this.detailForm = this.formBuilder.group({
                class_id: ["", Validators.required],
                teacher_id: ["", Validators.required],
                subject_name: ["", Validators.required],
                color_code: ["", Validators.required],
                icons: [""],
                description: ["", Validators.required],
            });
        }else{
            this.formType = 'add';
            this.detailForm = this.formBuilder.group({
                class_id: ["", Validators.required],
                teacher_id: ["", Validators.required],
                subject_name: ["", Validators.required],
                color_code: ["", Validators.required],
                icons: ["", Validators.required],
                description: ["", Validators.required],
            });
        }

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


}

