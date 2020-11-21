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
    templateUrl: "./samplePaper.component.html",
    styleUrls: ["./samplePaper.component.scss"],
    animations: [routerTransition()],
    providers: [ApiService],
})
export class SamplePaperComponent implements OnInit {
    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective;
    isDtInitialized: boolean = false;
    title = "angulardatatables";
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    public apiUrl: any;
    public listData: any;
    public examData: any;    
    public editID: any;
    public modalReference: any;
    public formType: string;
    public tempDocData: any;
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
            exam_id: ["", Validators.required],           
            title: ["", Validators.required],           
            DocumentPath: [""],           
            description: ["", Validators.required],
            document: [""],
            
        });
        this.listGetData();
        this.getExamData();
    }

    getExamData() {
        this.apiService
            .getData("exam/list?pageName=samplePaper")
            .subscribe((res) => {
                this.examData = res["data"];
            });
    }

   

    listGetData() {
        this.SpinnerService.show();
        this.apiService.getData("samplepaper/list?pageName=samplepaper").subscribe(
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
            .getData("samplepaper/list/" + this.editID + "?pageName=samplepaper")
            .subscribe((res) => {
                this.detailForm.controls["exam_id"].setValue(
                    res["data"].class_id
                );
                this.detailForm.controls["title"].setValue(res["data"].title);
                this.detailForm.controls["DocumentPath"].setValue(res["data"].document_url);
                this.detailForm.controls["description"].setValue(
                    res["data"].description
                );
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
            this.apiUrl = "samplepaper/add";
        } else {
            this.detailForm.value["id"] = this.editID;
            this.apiUrl = "samplepaper/edit";
        }
        
       
        if (this.tempDocData == undefined) {
            this.detailForm.value.document = "";
            this.tempDocData = "";
        }
       
        const formData = new FormData();
        formData.append("pageName", "video");
        formData.append("exam_id", this.detailForm.value.exam_id);
        formData.append("title", this.detailForm.value.title);
        formData.append("description", this.detailForm.value.description
        );
        formData.append("document", this.tempDocData);
       if (this.formType == "edit") {
            formData.append("id", this.editID);
        }
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

  
    uploadDoc(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.detailForm.value.document = file;
            this.tempDocData = file;
        }
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
                if (type == "notes") {
                    this.apiService
                        .saveData("samplepaper/notesdelete?pageName=samplepaper", obj)
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
                exam_id: ["", Validators.required],
                title: ["", Validators.required],
                DocumentPath: [""],
                description: ["", Validators.required],
                document: [""],
                
            });
        } else {
            this.formType = "add";
            this.detailForm = this.formBuilder.group({
                exam_id: ["", Validators.required],                
                title: ["", Validators.required],
                DocumentPath: [""],
                description: ["", Validators.required],
                document: [""],
                
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