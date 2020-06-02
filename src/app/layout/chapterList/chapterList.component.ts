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
    templateUrl: './chapterList.component.html',
    styleUrls: ['./chapterList.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class ChapterListComponent implements OnInit {
    @ViewChild(DataTableDirective, {static: false})
    dtElement: DataTableDirective;
    isDtInitialized:boolean = false;
    title = 'angulardatatables';
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    public apiUrl : any;
    public listData : any;
    public classData : any;
    public subjectData : any;
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
            subject_id: ["", Validators.required],
            chapter_name: ["", Validators.required],
            thumbnail: ["", Validators.required],
            description: ["", Validators.required],
        });
        this.listGetData();
        this.getClassData();
    }


    getClassData(){
        this.apiService.getData('class/list?pageName=chapter').subscribe(res => {
            this.classData = res['data'];
        });    
    }


    getSubjectData(event){
        var value;
        if(event && event.target && event.target.value){
            value = event.target.value;
        }else{
            value = event;
        }
        var url = 'class/getSubject/' + value + '?pageName=chapter';
        this.apiService.getData(url).subscribe(res => {
            this.subjectData = res['data'].subject;
        });    
    }


    listGetData(){
        this.SpinnerService.show();
        this.apiService.getData('chapter/list?pageName=chapter').subscribe(res => {
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
        this.apiService.getData('chapter/list/'+this.editID+'?pageName=chapter').subscribe(res => {
            this.getSubjectData(res['data'].subject.classes.id);
            this.detailForm.controls['class_id'].setValue(res['data'].subject.classes.id);
            this.detailForm.controls['subject_id'].setValue(res['data'].subject.id);
            this.detailForm.controls['chapter_name'].setValue(res['data'].chapter_name);
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
            this.apiUrl = 'chapter/add';
        }else{
            this.detailForm.value['id'] = this.editID;
            this.apiUrl = 'chapter/edit';
        }
        if(this.formType == 'edit' && this.tempFileData == undefined){
            this.detailForm.value.image = '';
            this.tempFileData = '';
        }
        const formData = new FormData();
        formData.append('pageName', 'chapter');
        formData.append('class_id', this.detailForm.value.class_id);
        formData.append('subject_id', this.detailForm.value.subject_id);
        formData.append('chapter_name', this.detailForm.value.chapter_name);
        formData.append('description', this.detailForm.value.description);
        formData.append('thumbnail', this.tempFileData);
        if(this.formType == 'edit'){
            formData.append('id', this.editID);
        }
        this.apiService.saveData(this.apiUrl, formData).subscribe(res => {
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
            this.detailForm.value.thumbnail = file;
            this.tempFileData = file;
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
                this.apiService.saveData('chapter/delete?pageName=chapter', obj).subscribe(res => {
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
                subject_id: ["", Validators.required],
                chapter_name: ["", Validators.required],
                thumbnail: [""],
                description: ["", Validators.required],
            });
        }else{
            this.formType = 'add';
            this.detailForm = this.formBuilder.group({
                class_id: ["", Validators.required],
                subject_id: ["", Validators.required],
                chapter_name: ["", Validators.required],
                thumbnail: ["", Validators.required],
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

