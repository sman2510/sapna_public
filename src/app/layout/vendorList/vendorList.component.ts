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
    templateUrl: './vendorList.component.html',
    styleUrls: ['./vendorList.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class VendorListComponent implements OnInit {
    @ViewChild(DataTableDirective, {static: false})
    dtElement: DataTableDirective;
    isDtInitialized:boolean = false;
    title = 'angulardatatables';
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    public apiUrl : any;
    public listData : any;
    public downloadData : Array<any> = [];
    public stateData : any;
    public cityData : any;
    public editID : any;
    public modalReference : any;
    public formType : string;
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
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.detailForm = this.formBuilder.group({
            name: ["", Validators.required],
            email: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required,Validators.minLength(6)]],
            mobile_no: ["", [Validators.required, Validators.pattern("[0-9]{10}")]],
            type: ["", Validators.required],
            address: ["", Validators.required],
            state: ["", Validators.required],
            city: ["", Validators.required],
        });
        this.getStateData();
        this.listGetData();
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


    listGetData(){
        this.SpinnerService.show();
        this.apiService.getData('vendor/list?pageName=vendor').subscribe(res => {
            this.listData = res['data'];
            var tempData = JSON.parse(JSON.stringify(res['data']));
            tempData.forEach(element => {
                delete element['id'];
                delete element['role'];
                delete element['status'];
                delete element['created_at'];
                delete element['updated_at'];
                element['type'] = element['vendor_details']['type'];
                element['address'] = element['vendor_details']['address'];
                element['city'] = element['vendor_details']['city'];
                element['state'] = element['vendor_details']['state'];
                element['referral_code'] = element['vendor_details']['referral_code'];
                delete element['vendor_details'];
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


    editData(id:any){
        this.SpinnerService.show();
        this.editID = id;
        this.apiService.getData('vendor/list/'+this.editID+'?pageName=vendor').subscribe(res => {
            this.getStateData();
            this.getCityData(res['data'].vendor_details.state);
            this.detailForm.controls['name'].setValue(res['data'].name);
            this.detailForm.controls['email'].setValue(res['data'].email);
            this.detailForm.controls['mobile_no'].setValue(res['data'].mobile_no);
            this.detailForm.controls['type'].setValue(res['data'].vendor_details.type);
            this.detailForm.controls['address'].setValue(res['data'].vendor_details.address);
            this.detailForm.controls['state'].setValue(res['data'].vendor_details.state);
            this.detailForm.controls['city'].setValue(res['data'].vendor_details.city);
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
            this.apiUrl = 'vendor/add';
        }else{
            this.detailForm.value['id'] = this.editID;
            this.apiUrl = 'vendor/edit';
        }
        if(this.formType == 'edit'){
            this.detailForm.value['id'] = this.editID;
        }
        this.detailForm.value['pageName'] = 'vendor';
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
                this.apiService.saveData('vendor/delete?pageName=vendor', obj).subscribe(res => {
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
                name: ["", Validators.required],
                email: ['', [Validators.required,Validators.email]],
                password: [""],
                mobile_no: ["", [Validators.required, Validators.pattern("[0-9]{10}")]],
                type: ["", Validators.required],
                address: ["", Validators.required],
                state: ["", Validators.required],
                city: ["", Validators.required],
            });
        }else{
            this.formType = 'add';
            this.detailForm = this.formBuilder.group({
                name: ["", Validators.required],
                email: ['', [Validators.required,Validators.email]],
                password: ["", Validators.required],
                mobile_no: ["", [Validators.required, Validators.pattern("[0-9]{10}")]],
                type: ["", Validators.required],
                address: ["", Validators.required],
                state: ["", Validators.required],
                city: ["", Validators.required],
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


    getExcel(){
        this.SpinnerService.show();
        this.exportService.exportExcel(this.downloadData, 'Vendor');
        this.SpinnerService.hide();
    }


}

