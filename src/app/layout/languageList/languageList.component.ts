import { Component, OnInit, ViewChild } from "@angular/core";
import { routerTransition } from "../../router.animations";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import {
    FormBuilder,
    FormGroup,
    FormControl,
    FormArray,
    NgForm,
    Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { ApiService } from "../service/api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { DataTableDirective } from "angular-datatables";
import Swal from "sweetalert2";

@Component({
    selector: "app-tables",
    templateUrl: "./languageList.component.html",
    styleUrls: ["./languageList.component.scss"],
    animations: [routerTransition()],
    providers: [ApiService],
})
export class LanguageListComponent implements OnInit {
    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;
    isDtInitialized: boolean = false;
    title = "angulardatatables";
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    public apiUrl: any;
    public listData: any;
   
    public editID: any;
    public modalReference: any;
    public formType: string;
 
    public progress: number = 0;
    closeResult: string;
    detailForm: FormGroup;
    submitted = false;
    constructor(
        private apiService: ApiService,
        private modalService: NgbModal,
        public router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) {}
    ngOnInit() {
        sessionStorage.removeItem("videoId");
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 5,
            processing: true,
        };
        this.detailForm = this.formBuilder.group({            
            title: ["", Validators.required],
            });
        this.listGetData();
      
    } 
    
    
    listGetData() {
        this.SpinnerService.show();
        this.apiService.getData("language/list?pageName=language").subscribe(
            (res) => {
                this.listData = res["data"];
                if (this.isDtInitialized) {
                    this.dtElement.dtInstance.then(
                        (dtInstance: DataTables.Api) => {
                            dtInstance.destroy();
                            this.dtTrigger.next();
                        }
                    );
                } else {
                    this.isDtInitialized = true;
                    this.dtTrigger.next();
                }
                this.SpinnerService.hide();
            },
            (error) => {
                if (error["error"]) {
                    this.toastr.error(error.error["message"]);
                    this.router.navigate(["/login"]);
                }
            }
        );
    }

    editData(id: any) {
        this.SpinnerService.show();
        this.editID = id;
        this.apiService
            .getData("language/list/" + this.editID + "?pageName=language")
            .subscribe((res) => {
              
                this.detailForm.controls["title"].setValue(res["data"].title);
                
                this.SpinnerService.hide();
            });
    }
    saveDetail() {
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        if (this.formType == "add") {
            this.apiUrl = "language/add";
        } else {
            this.detailForm.value["id"] = this.editID;
            this.apiUrl = "language/edit";
        }
       
        const formData = new FormData();
        
        formData.append("title", this.detailForm.value.title);  
        this.apiService.savePData(this.apiUrl, formData).subscribe(
            (res) => {
                this.progress = Math.round(
                    (100 / res["total"]) * res["loaded"]
                );
                if (res["status"] == 200) {
                    this.SpinnerService.hide();
                    this.modalReference.close();
                    this.listGetData();
                    if (res["body"]) {
                        this.toastr.success(res["body"]["message"]);
                    }
                }
            },
            (error) => {
                this.SpinnerService.hide();
                if (error["error"]) {
                    this.toastr.error(error.error["message"]);
                }
            }
        );
    } 
    deleteData(id: any, type: any) {
        Swal.fire({
            title: "Are you sure?",
            text: "You wan't to delete ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, keep it",
        }).then((result) => {
            if (result.value) {
                var obj = {
                    id: id,
                };
                if (type == "language") {
                    this.apiService
                        .saveData("languae/delete?pageName=language", obj)
                        .subscribe((res) => {
                            this.listGetData();
                            this.toastr.success(res["message"]);
                        });
                } 
               
            } else if (result.dismiss === Swal.DismissReason.cancel) {
            }
        });

        
    }
    open(content: any, type: any, id: any) {
        this.submitted = false;
        this.detailForm.markAsPristine();
        this.detailForm.markAsUntouched();
        this.detailForm.updateValueAndValidity();
        this.detailForm.reset();
        this.detailForm.clearValidators();
        Object.keys(this.detailForm.controls).forEach((key) => {
            this.detailForm.get(key).setErrors(null);
        });
        if (type == "edit") {
            this.editData(id);
            this.formType = "edit";
            this.detailForm = this.formBuilder.group({
                title: ["", Validators.required],});
        } else {
            this.formType = "add";
            this.detailForm = this.formBuilder.group({
                
                title: ["", Validators.required]        
         
            });
        }

        this.modalReference = this.modalService.open(content);
        this.modalReference.result.then(
            (result) => {
                this.closeResult = `Closed with: ${result}`;
            },
            (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            }
        );
    }

    getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return "by pressing ESC";
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        } else {
            return `with: ${reason}`;
        }
    }

    get fval() {
        return this.detailForm.controls;
    }

  
}