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
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class SettingComponent implements OnInit {
    detailForm : FormGroup;
    submitted = false;
    public dayData : Array<any> = [];
    public monthData : Array<any> = [];


    constructor(
        private apiService: ApiService,
        public router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) { }


    ngOnInit() {
        this.detailForm = this.formBuilder.group({
            client_key: ["", Validators.required],
            secret_key: ["", Validators.required],
            min_redeem: ["", Validators.required],
            max_redeem: ["", Validators.required],
            referred_amount: ["", Validators.required],
            day: ["", Validators.required], 
            month: ["", Validators.required], 
            session_end: [""], 
            vendor_per: ["", Validators.required],
        });
        this.getData();
        for(var i = 1; i<32; i++){
            var obj = {};
            obj['value'] = i;
            if(i<13){
                this.monthData.push(obj);
            }            
            this.dayData.push(obj);
        }
    }


    getData(){
        this.apiService.getData('setting/details?pageName=setting').subscribe(res => {
            this.detailForm.controls['client_key'].setValue(res['data'].client_key);
            this.detailForm.controls['secret_key'].setValue(res['data'].secret_key);
            this.detailForm.controls['min_redeem'].setValue(res['data'].min_redeem);
            this.detailForm.controls['max_redeem'].setValue(res['data'].max_redeem);
            this.detailForm.controls['referred_amount'].setValue(res['data'].referred_amount);
            this.detailForm.controls['month'].setValue(res['data'].session_end.split('-')[1]);
            this.detailForm.controls['day'].setValue(res['data'].session_end.split('-')[0]);
            this.detailForm.controls['vendor_per'].setValue(res['data'].vendor_per);
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
        this.detailForm.value['pageName'] = 'setting';
        this.detailForm.value['session_end'] = this.detailForm.value['day'] + '-' + this.detailForm.value['month'];        
        this.apiService.saveData('setting/add', this.detailForm.value).subscribe(res => {
            this.SpinnerService.hide();
            if(res['status']){
                this.getData();
                this.toastr.success(res['message']);
            }else{
                this.toastr.error(res['message']);
            }
        });    
    }


    get fval() {
        return this.detailForm.controls; 
    }


}
