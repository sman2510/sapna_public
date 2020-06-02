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
    templateUrl: './studentAdd.component.html',
    styleUrls: ['./studentAdd.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class StudentAddComponent implements OnInit {
    detailForm : FormGroup;
    submitted = false;
    public classData : any;
    public stateData : any;
    public cityData : any;
    public paymentData : any;
    public subscriptionData : any;

    constructor(
        private apiService: ApiService,
        public router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) { }


    ngOnInit() {
        this.detailForm = this.formBuilder.group({
            name: ["", Validators.required],
            email: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required,Validators.minLength(6)]],
            mobile_no: ["", [Validators.required, Validators.pattern("[0-9]{10}")]],
            class: ["", Validators.required], 
            dob: ["", Validators.required],
            gender: ["", Validators.required],
            state: ["", Validators.required],
            city: ["", Validators.required],
            payment_method: ["", Validators.required],
            subscription_type: ["", Validators.required],
            amount: ["", Validators.required],
        });
        this.getClassData();
        this.getStateData();
        this.getPaymentData();
        this.getSubscriptionData();
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


    getPaymentData(){
        this.apiService.getData('paymentMethodList?pageName=student').subscribe(res => {
            this.paymentData = res['data'];
        });    
    }


    getSubscriptionData(){
        this.apiService.getData('subscription/list?pageName=student').subscribe(res => {
            this.subscriptionData = res['data'];
        });    
    }    


    saveDetail(){
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        this.apiService.saveData('student/create/admin?pageName=student', this.detailForm.value).subscribe(res => {
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
