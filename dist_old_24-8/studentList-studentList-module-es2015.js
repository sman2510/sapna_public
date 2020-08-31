(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["studentList-studentList-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/studentList/studentList.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/studentList/studentList.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Students'\"></app-page-header>\r\n\r\n    <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">  \r\n        <p style=\"color: white\">Please Wait... </p>  \r\n    </ngx-spinner> \r\n\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    <span>Student Details</span>\r\n                    <button class=\"btn btn-sm btn-success pull-right marLt_1Per\" (click)=\"getExcel()\">Export To Excel</button>\r\n                    <button class=\"btn btn-sm btn-primary pull-right\" (click)=\"addStudent()\">Add</button>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>S. No.</th>\r\n                                <th>Name</th>\r\n                                <th>Email</th>\r\n                                <th>Mobile</th>\r\n                                <th>Gender</th>\r\n                                <th>DOB</th>\r\n                                <th>State</th>\r\n                                <th>City</th>\r\n                                <th>Class</th>\r\n                                <th>Wallet Balance</th>\r\n                                <th>Status</th>\r\n                                <th class=\"text-center\">Change Status</th>\r\n                                <th class=\"text-center actionHeader\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"listData?.length != 0\">\r\n                            <tr *ngFor=\"let data of listData; index as i\">\r\n                                <td>{{i+1}}</td>\r\n                                <td>{{data.name}}</td>\r\n                                <td>{{data.email}}</td>\r\n                                <td>{{data.mobile_no}}</td>\r\n                                <td>{{data.gender | titlecase}}</td>\r\n                                <td>{{data.dob}}</td>\r\n                                <td>{{data.state}}</td>\r\n                                <td>{{data.city}}</td>\r\n                                <td>{{data.class}}</td>\r\n                                <td>{{data.wallet_balance}}</td>\r\n                                <td>\r\n                                    <span *ngIf=\"data.status == '1'\">Active</span>\r\n                                    <span *ngIf=\"data.status == '0'\">In-Active</span>\r\n                                </td>\r\n                                <td class=\"text-center\">\r\n                                    <button (click)=\"open(content,'edit', data.user_id)\" class=\"btn btn-sm btn-info fa fa-flag\"></button>\r\n                                </td>\r\n                                <td class=\"text-center actionHeader\">\r\n                                    <button (click)=\"editStudent(data.user_id)\" class=\"btn btn-sm btn-primary fa fa-pencil\"></button>\r\n                                    <button (click)=\"deleteData(data.user_id)\" class=\"btn btn-sm btn-danger fa fa-trash\"></button>\r\n                                    &nbsp;\r\n                                    <button (click)=\"viewStudent(data.user_id)\" class=\"btn btn-sm btn-success fa fa-eye\"></button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    \r\n    <!-- Add/Edit Modal Start -->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Student Status Detail</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form [formGroup]=\"detailForm\" (ngSubmit)=\"saveDetail()\" >\r\n                <div class=\"formbox\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Status *</label>\r\n                                <select class=\"form-control\" formControlName=\"status\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.status.errors }\">\r\n                                    <option value=\"1\">Active</option>\r\n                                    <option value=\"0\">In-Active</option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && fval.status.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.status.errors.required\">\r\n                                        Status is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"button\" class=\"btn btn-danger pull-right marLt_2Per\" (click)=\"c('Close click')\">Close</button>\r\n                        <button type=\"submit\" class=\"btn btn-primary pull-right\">Save</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </ng-template>\r\n    <!-- Add/Edit Modal End -->\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/studentList/studentList-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/studentList/studentList-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: StudentListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListRoutingModule", function() { return StudentListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _studentList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./studentList.component */ "./src/app/layout/studentList/studentList.component.ts");




const routes = [
    {
        path: '',
        component: _studentList_component__WEBPACK_IMPORTED_MODULE_3__["StudentListComponent"]
    }
];
let StudentListRoutingModule = class StudentListRoutingModule {
};
StudentListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StudentListRoutingModule);



/***/ }),

/***/ "./src/app/layout/studentList/studentList.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/studentList/studentList.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zdHVkZW50TGlzdC9zdHVkZW50TGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/studentList/studentList.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/studentList/studentList.component.ts ***!
  \*************************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/api.service */ "./src/app/layout/service/api.service.ts");
/* harmony import */ var _service_export_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/export.service */ "./src/app/layout/service/export.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);













let StudentListComponent = class StudentListComponent {
    constructor(apiService, exportService, modalService, router, formBuilder, toastr, SpinnerService) {
        this.apiService = apiService;
        this.exportService = exportService;
        this.modalService = modalService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.SpinnerService = SpinnerService;
        this.isDtInitialized = false;
        this.title = 'angulardatatables';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.downloadData = [];
        this.submitted = false;
    }
    ngOnInit() {
        sessionStorage.removeItem('studId');
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.detailForm = this.formBuilder.group({
            status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.listGetData();
    }
    listGetData() {
        this.SpinnerService.show();
        this.apiService.getData('student/list?pageName=student').subscribe(res => {
            this.listData = res['data'];
            var tempData = JSON.parse(JSON.stringify(res['data']));
            tempData.forEach(element => {
                delete element['email_verified_at'];
                delete element['password'];
                delete element['remember_token'];
                delete element['created_at'];
                delete element['updated_at'];
                delete element['role'];
                delete element['status'];
                delete element['image'];
                delete element['user_id'];
                delete element['id'];
                this.downloadData.push(element);
            });
            if (this.isDtInitialized) {
                this.dtElement.dtInstance.then((dtInstance) => {
                    dtInstance.destroy();
                    this.dtTrigger.next();
                });
            }
            else {
                this.isDtInitialized = true;
                this.dtTrigger.next();
            }
            this.SpinnerService.hide();
        }, error => {
            if (error['error']) {
                this.toastr.error(error.error['message']);
                this.router.navigate(['/login']);
            }
        });
    }
    deleteData(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: 'Are you sure?',
            text: "You wan't to delete ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                var obj = {
                    "id": id
                };
                this.apiService.saveData('student/delete?pageName=student', obj).subscribe(res => {
                    this.listGetData();
                    this.toastr.success(res['message']);
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.DismissReason.cancel) {
            }
        });
    }
    editData(id) {
        this.editID = id;
        this.SpinnerService.show();
        this.apiService.getData('student/list/' + id + '?pageName=student').subscribe(res => {
            this.detailForm.controls['status'].setValue(res['data'].status);
            this.SpinnerService.hide();
        });
    }
    saveDetail() {
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        this.apiUrl = 'student/status/update';
        this.detailForm.value['id'] = this.editID;
        this.detailForm.value['pageName'] = 'student';
        this.apiService.saveData(this.apiUrl, this.detailForm.value).subscribe(res => {
            this.SpinnerService.hide();
            if (res['status']) {
                this.modalReference.close();
                this.listGetData();
                this.toastr.success(res['message']);
            }
            else {
                this.toastr.error(res['message']);
            }
        });
    }
    open(content, type, id) {
        this.submitted = false;
        this.detailForm.markAsPristine();
        this.detailForm.markAsUntouched();
        this.detailForm.updateValueAndValidity();
        this.detailForm.reset();
        this.detailForm.clearValidators();
        Object.keys(this.detailForm.controls).forEach(key => {
            this.detailForm.get(key).setErrors(null);
        });
        this.editData(id);
        this.modalReference = this.modalService.open(content);
        this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    get fval() {
        return this.detailForm.controls;
    }
    addStudent() {
        this.router.navigate(['/studentAdd']);
    }
    editStudent(id) {
        sessionStorage.setItem('studId', id);
        this.router.navigate(['/studentEdit']);
    }
    viewStudent(id) {
        sessionStorage.setItem('studId', id);
        this.router.navigate(['/studentView']);
    }
    getExcel() {
        this.SpinnerService.show();
        this.exportService.exportExcel(this.downloadData, 'Student');
        this.SpinnerService.hide();
    }
};
StudentListComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _service_export_service__WEBPACK_IMPORTED_MODULE_9__["ExportService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTableDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTableDirective"])
], StudentListComponent.prototype, "dtElement", void 0);
StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tables',
        template: __webpack_require__(/*! raw-loader!./studentList.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/studentList/studentList.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]],
        styles: [__webpack_require__(/*! ./studentList.component.scss */ "./src/app/layout/studentList/studentList.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
        _service_export_service__WEBPACK_IMPORTED_MODULE_9__["ExportService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]])
], StudentListComponent);



/***/ }),

/***/ "./src/app/layout/studentList/studentList.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/studentList/studentList.module.ts ***!
  \**********************************************************/
/*! exports provided: StudentListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListModule", function() { return StudentListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _studentList_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./studentList-routing.module */ "./src/app/layout/studentList/studentList-routing.module.ts");
/* harmony import */ var _studentList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./studentList.component */ "./src/app/layout/studentList/studentList.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");











let StudentListModule = class StudentListModule {
};
StudentListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _studentList_routing_module__WEBPACK_IMPORTED_MODULE_3__["StudentListRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
        ],
        declarations: [_studentList_component__WEBPACK_IMPORTED_MODULE_4__["StudentListComponent"]]
    })
], StudentListModule);



/***/ })

}]);
//# sourceMappingURL=studentList-studentList-module-es2015.js.map