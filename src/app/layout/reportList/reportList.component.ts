import { Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentRef, ViewContainerRef, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ApiService } from "../service/api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { DataTableDirective } from 'angular-datatables';
import { ChildComponent } from './child/child.component';
import Swal from 'sweetalert2';



@Component({
    selector: 'app-tables',
    templateUrl: './reportList.component.html',
    styleUrls: ['./reportList.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class ReportListComponent implements OnInit {
    @ViewChild(DataTableDirective, {static: false})
    dtElement: DataTableDirective;
    isDtInitialized:boolean = false;
    title = 'angulardatatables';
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    private childRow: ComponentRef<ChildComponent>;

    public listData : Array<any> = [];
    public vendorListData : any;
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
        private SpinnerService: NgxSpinnerService,
        private compFactory: ComponentFactoryResolver,
        private viewRef: ViewContainerRef,
        private _renderer: Renderer2
        ) { }

    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.detailForm = this.formBuilder.group({
            vendor: ["", Validators.required],
        });
        this.listGetData();
    }


    listGetData(){
        this.SpinnerService.show();
        this.apiService.getData('vendor/list?pageName=vendor_report').subscribe(res => {
            this.vendorListData = res['data'];
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
        });    
    }


    vendorGetData(){
        this.SpinnerService.show();
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
    }


    saveDetail(){
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        this.listData = [];
        this.apiService.saveData('vendor/report?pageName=vendor_report', this.detailForm.value).subscribe(res => {
            this.SpinnerService.hide();
            if(res['status']){
                if(this.detailForm.value['vendor'] != 'All' && res['data'] && Object.keys(res['data']).length){
                    this.listData.push(res['data']);
                }else{
                    this.listData = res['data'];
                }
                this.vendorGetData();
                this.modalReference.close();
                // this.toastr.success(res['message']);
            }else{
                this.toastr.error(res['message']);
            }
        },
        error => {
            if(error['error']){
                this.toastr.error(error.error['message']);
                this.router.navigate(['/login']);
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


    expandRow(trRef:any, rowData:any) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          var row = dtInstance.row(trRef);
          if (row.child.isShown()) {
            row.child.hide();
            this._renderer.removeClass(trRef, 'shown');
          }
          else {
            let factory = this.compFactory.resolveComponentFactory(ChildComponent);
            this.childRow = this.viewRef.createComponent(factory);
            this.childRow.instance.data = rowData;
            row.child(this.childRow.location.nativeElement).show();
            this._renderer.addClass(trRef, 'shown');
          }
        })
    }


}
