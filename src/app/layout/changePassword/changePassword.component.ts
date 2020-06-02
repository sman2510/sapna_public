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
    templateUrl: './changePassword.component.html',
    styleUrls: ['./changePassword.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class ChangePasswordComponent implements OnInit {
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
            password: ['', [Validators.required,Validators.minLength(6)]],
        });
    }


    saveDetail(){
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        this.detailForm.value['pageName'] = 'change_password';
        this.apiService.saveData('changePassword', this.detailForm.value).subscribe(res => {
            this.SpinnerService.hide();
            if(res['status']){
                this.toastr.success(res['message']);
                this.router.navigate(['/login']);
            }else{
                this.toastr.error(res['message']);
            }
        });    
    }


    get fval() {
        return this.detailForm.controls; 
    }


}
