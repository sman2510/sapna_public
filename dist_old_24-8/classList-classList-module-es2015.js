(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["classList-classList-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/classList/classList.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/classList/classList.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Classes'\"></app-page-header>\r\n\r\n    <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">  \r\n        <p style=\"color: white\">Please Wait... </p>  \r\n    </ngx-spinner> \r\n\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    <span>Class Details</span>\r\n                    <button class=\"btn btn-sm btn-primary pull-right\" (click)=\"open(content,'add', '')\">Add</button>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>S. No.</th>\r\n                                <th>Name</th>\r\n                                <th>Description</th>\r\n                                <th class=\"text-center actionHeader\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"listData?.length != 0\">\r\n                            <tr *ngFor=\"let data of listData; index as i\">\r\n                                <td>{{i+1}}</td>\r\n                                <td>{{data.class_name}}</td>\r\n                                <td>{{data.description}}</td>\r\n                                <td class=\"text-center actionHeader\">\r\n                                    <button (click)=\"open(content,'edit', data.id)\" class=\"btn btn-sm btn-primary fa fa-pencil\"></button>\r\n                                    &nbsp;\r\n                                    <button (click)=\"deleteData(data.id)\" class=\"btn btn-sm btn-danger fa fa-trash\"></button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Add/Edit Modal Start -->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Class Detail</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form [formGroup]=\"detailForm\" (ngSubmit)=\"saveDetail();\">\r\n                <div class=\"formbox\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Class Name *</label>\r\n                                <input type=\"text\" formControlName=\"class_name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.class_name.errors }\"/>\r\n                                <div *ngIf=\"submitted && fval.class_name.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.class_name.errors.required\">\r\n                                        Class Name is required\r\n                                    </div>                        \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description *</label>\r\n                                <textarea formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.description.errors }\"></textarea>\r\n                                <div *ngIf=\"submitted && fval.description.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.description.errors.required\">\r\n                                        Description is required\r\n                                    </div>                        \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"button\" class=\"btn btn-danger pull-right marLt_2Per\" (click)=\"c('Close click')\">Close</button>\r\n                        <button type=\"submit\" class=\"btn btn-primary pull-right\">Save</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </ng-template>\r\n    <!-- Add/Edit Modal End -->\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/classList/classList-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/classList/classList-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ClassListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassListRoutingModule", function() { return ClassListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _classList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classList.component */ "./src/app/layout/classList/classList.component.ts");




const routes = [
    {
        path: '',
        component: _classList_component__WEBPACK_IMPORTED_MODULE_3__["ClassListComponent"]
    }
];
let ClassListRoutingModule = class ClassListRoutingModule {
};
ClassListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ClassListRoutingModule);



/***/ }),

/***/ "./src/app/layout/classList/classList.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/classList/classList.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jbGFzc0xpc3QvY2xhc3NMaXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/classList/classList.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/classList/classList.component.ts ***!
  \*********************************************************/
/*! exports provided: ClassListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassListComponent", function() { return ClassListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/api.service */ "./src/app/layout/service/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let ClassListComponent = class ClassListComponent {
    constructor(apiService, modalService, router, formBuilder, toastr, SpinnerService) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.SpinnerService = SpinnerService;
        this.isDtInitialized = false;
        this.title = 'angulardatatables';
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.submitted = false;
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.detailForm = this.formBuilder.group({
            class_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.listGetData();
    }
    listGetData() {
        this.SpinnerService.show();
        this.apiService.getData('class/list?pageName=classes').subscribe(res => {
            this.listData = res['data'];
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
    editData(id) {
        this.SpinnerService.show();
        this.editID = id;
        this.apiService.getData('class/list/' + this.editID + '?pageName=classes').subscribe(res => {
            this.detailForm.controls['class_name'].setValue(res['data'].class_name);
            this.detailForm.controls['description'].setValue(res['data'].description);
            this.SpinnerService.hide();
        });
    }
    saveDetail() {
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        if (this.formType == 'add') {
            this.apiUrl = 'class/add';
        }
        else {
            this.detailForm.value['id'] = this.editID;
            this.apiUrl = 'class/edit';
        }
        this.detailForm.value['pageName'] = 'classes';
        this.apiService.saveData(this.apiUrl, this.detailForm.value).subscribe(res => {
            this.SpinnerService.hide();
            if (res['status']) {
                this.modalReference.close();
                this.listGetData();
                this.toastr.success(res['message']);
            }
            else {
                this.toastr.error(res['data']['class_name'][0]);
            }
        });
    }
    deleteData(id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
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
                this.apiService.saveData('class/delete?pageName=classes', obj).subscribe(res => {
                    this.listGetData();
                    this.toastr.success(res['message']);
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.DismissReason.cancel) {
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
        if (type == 'edit') {
            this.editData(id);
            this.formType = 'edit';
        }
        else {
            this.formType = 'add';
        }
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
};
ClassListComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"])
], ClassListComponent.prototype, "dtElement", void 0);
ClassListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tables',
        template: __webpack_require__(/*! raw-loader!./classList.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/classList/classList.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]],
        styles: [__webpack_require__(/*! ./classList.component.scss */ "./src/app/layout/classList/classList.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
], ClassListComponent);



/***/ }),

/***/ "./src/app/layout/classList/classList.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/classList/classList.module.ts ***!
  \******************************************************/
/*! exports provided: ClassListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassListModule", function() { return ClassListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _classList_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classList-routing.module */ "./src/app/layout/classList/classList-routing.module.ts");
/* harmony import */ var _classList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classList.component */ "./src/app/layout/classList/classList.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");











let ClassListModule = class ClassListModule {
};
ClassListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _classList_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClassListRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
        ],
        declarations: [_classList_component__WEBPACK_IMPORTED_MODULE_4__["ClassListComponent"]]
    })
], ClassListModule);



/***/ })

}]);
//# sourceMappingURL=classList-classList-module-es2015.js.map