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
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class AboutusComponent implements OnInit {
    public tempFileData : any;
    detailForm : FormGroup;
    submitted = false;

    constructor(
        private apiService: ApiService,
        public router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) { }


    ngOnInit() {
        this.detailForm = this.formBuilder.group({
            email_id: ['', [Validators.required,Validators.email]],
            mobile_no: ["", Validators.required],
            logo: [""],
            about: ["", Validators.required],
        });
        this.getData();
    }


    getData(){
        this.SpinnerService.show();
        this.apiService.getData('company/details?pageName=company').subscribe(res => {
            this.detailForm.controls['email_id'].setValue(res['data'].email_id);
            this.detailForm.controls['mobile_no'].setValue(res['data'].mobile_no);
            this.detailForm.controls['about'].setValue(res['data'].about);
            this.SpinnerService.hide();
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
        const formData = new FormData();
        formData.append('pageName', 'company');
        formData.append('email_id', this.detailForm.value.email_id);
        formData.append('mobile_no', this.detailForm.value.mobile_no);
        formData.append('logo', this.tempFileData);
        formData.append('about', this.detailForm.value.about);
        this.apiService.saveData('company/addEdit', formData).subscribe(res => {
            this.SpinnerService.hide();
            if(res['status']){
                this.getData();
                this.toastr.success(res['message']);
            }else{
                this.toastr.error(res['message']);
            }
        });    
    }


    uploadFile(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.detailForm.value.logo = file;
            this.tempFileData = file;
        }
    }


    get fval() {
        return this.detailForm.controls; 
    }


}
