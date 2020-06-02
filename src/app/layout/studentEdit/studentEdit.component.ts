import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ApiService } from "../service/api.service";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';

@Component({
    selector: 'app-tables',
    templateUrl: './studentEdit.component.html',
    styleUrls: ['./studentEdit.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class StudentEditComponent implements OnInit {
    detailForm : FormGroup;
    submitted = false;
    public studentId : any
    public classData : any;
    public stateData : any;
    public cityData : any;

    constructor(
        private apiService: ApiService,
        public router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) { }


    ngOnInit() {
        this.studentId = sessionStorage.getItem('studId');
        this.detailForm = this.formBuilder.group({
            name: ["", Validators.required],
            email: ['', [Validators.required,Validators.email]],
            password: [""],
            mobile_no: ["", [Validators.required, Validators.pattern("[0-9]{10}")]],
            class: ["", Validators.required], 
            dob: ["", Validators.required],
            gender: ["", Validators.required],
            state: ["", Validators.required],
            city: ["", Validators.required],
        });
        this.getClassData();
        this.getStateData();
        this.getStudentData();
    }


    getClassData(){
        this.apiService.getData('class/list?pageName=student').subscribe(res => {
            this.classData = res['data'];
        });    
    }


    getStateData(){
        this.apiService.getData('state/list').subscribe(res => {
            this.stateData = res['data'];
        });    
    }


    getCityData(event){
        var value;
        if(event && event.target && event.target.value){
            value = event.target.value;
        }else{
            value = event;
        }
        var url = 'city/list?state=' + value;
        this.apiService.getData(url).subscribe(res => {
            this.cityData = res['data'];
        });    
    }


    getStudentData(){
        this.apiService.getData('student/list/'+this.studentId+'?pageName=student').subscribe(res => {            
            this.getCityData(res['data'].student_details.state);
            this.detailForm.controls['name'].setValue(res['data'].name);
            this.detailForm.controls['email'].setValue(res['data'].email);
            this.detailForm.controls['password'].setValue(res['data'].password);
            this.detailForm.controls['mobile_no'].setValue(res['data'].mobile_no);
            this.detailForm.controls['class'].setValue(res['data'].student_details.class);
            this.detailForm.controls['dob'].setValue(res['data'].student_details.dob);
            this.detailForm.controls['gender'].setValue(res['data'].student_details.gender);
            this.detailForm.controls['state'].setValue(res['data'].student_details.state);
            this.detailForm.controls['city'].setValue(res['data'].student_details.city);
        },
        error => {
            if(error['error']){
                this.toastr.error(error.error['message']);
                this.router.navigate(['/login']);
            }
        });
    }


    saveDetail(){
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        this.detailForm.value['id'] = this.studentId;
        this.apiService.saveData('student/update/admin?pageName=student', this.detailForm.value).subscribe(res => {
            this.SpinnerService.hide();
            if(res['status']){
                this.toastr.success(res['message']);
                this.router.navigate(['/studentList']);
            }else{
                this.toastr.error(res['message']);
            }
        });    
    }


    get fval() {
        return this.detailForm.controls; 
    }


    backUrl(){
        this.router.navigate(['/studentList']);
    }

}
