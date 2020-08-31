(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminList-adminList-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/adminList/adminList.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/adminList/adminList.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Admins'\"></app-page-header>\r\n\r\n    <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">  \r\n        <p style=\"color: white\">Please Wait... </p>  \r\n    </ngx-spinner> \r\n\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    <span>Admin Details</span>\r\n                    <button class=\"btn btn-sm btn-primary pull-right\" (click)=\"open(content,'add','')\">Add</button>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>S. No.</th>\r\n                                <th>Name</th>\r\n                                <th>Email</th>\r\n                                <th class=\"text-center actionHeader\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"listData?.length != 0\">\r\n                            <tr *ngFor=\"let data of listData; index as i\">\r\n                                <td>{{i+1}}</td>\r\n                                <td>{{data.name}}</td>\r\n                                <td>{{data.email}}</td>\r\n                                <td class=\"text-center actionHeader\">\r\n                                    <button (click)=\"open(content, 'edit', data.id)\" class=\"btn btn-sm btn-primary fa fa-pencil\"></button>\r\n                                    &nbsp;\r\n                                    <button (click)=\"deleteData(data.id)\" class=\"btn btn-sm btn-danger fa fa-trash\"></button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Add/Edit Modal Start -->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Admin Detail</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form [formGroup]=\"detailForm\" (ngSubmit)=\"saveDetail()\" >\r\n                <div class=\"formbox\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Name *</label>\r\n                                <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.name.errors }\"/>\r\n                                <div *ngIf=\"submitted && fval.name.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.name.errors.required\">\r\n                                        Name is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Email ID *</label>\r\n                                <input type=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.email.errors }\"/>\r\n                                <div *ngIf=\"submitted && fval.email.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.email.errors.required\">\r\n                                        Email ID is required\r\n                                    </div>\r\n                                    <div *ngIf=\"fval.email.errors.email\">\r\n                                        Enter valid Email Id\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Password *</label>\r\n                                <input type=\"password\" formControlName=\"password\" minlength=\"6\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.password.errors }\"/>\r\n                                <div *ngIf=\"submitted && fval.password.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.password.errors.required\">\r\n                                        Password is required\r\n                                    </div>\r\n                                    <div *ngIf=\"fval.password.errors.minlength\">\r\n                                        Password must be at least 6 characters\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"button\" class=\"btn btn-danger pull-right marLt_2Per\" (click)=\"c('Close click')\">Close</button>\r\n                        <button type=\"submit\" class=\"btn btn-primary pull-right\">Save</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </ng-template>\r\n    <!-- Add/Edit Modal End -->\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/adminList/adminList-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/adminList/adminList-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: AdminListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminListRoutingModule", function() { return AdminListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminList.component */ "./src/app/layout/adminList/adminList.component.ts");




var routes = [
    {
        path: '',
        component: _adminList_component__WEBPACK_IMPORTED_MODULE_3__["AdminListComponent"]
    }
];
var AdminListRoutingModule = /** @class */ (function () {
    function AdminListRoutingModule() {
    }
    AdminListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminListRoutingModule);
    return AdminListRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/adminList/adminList.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/adminList/adminList.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbkxpc3QvYWRtaW5MaXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/adminList/adminList.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/adminList/adminList.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminListComponent", function() { return AdminListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/api.service */ "./src/app/layout/service/api.service.ts");
/* harmony import */ var _service_export_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/export.service */ "./src/app/layout/service/export.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);













var AdminListComponent = /** @class */ (function () {
    function AdminListComponent(apiService, exportService, modalService, router, formBuilder, toastr, SpinnerService) {
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
        this.submitted = false;
    }
    AdminListComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.detailForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
        });
        this.listGetData();
    };
    AdminListComponent.prototype.listGetData = function () {
        var _this = this;
        this.SpinnerService.show();
        this.apiService.getData('user/list?pageName=setting').subscribe(function (res) {
            _this.listData = res['data'];
            if (_this.isDtInitialized) {
                _this.dtElement.dtInstance.then(function (dtInstance) {
                    dtInstance.destroy();
                    _this.dtTrigger.next();
                });
            }
            else {
                _this.isDtInitialized = true;
                _this.dtTrigger.next();
            }
            _this.SpinnerService.hide();
        }, function (error) {
            if (error['error']) {
                _this.toastr.error(error.error['message']);
                _this.router.navigate(['/login']);
            }
        });
    };
    AdminListComponent.prototype.editData = function (id) {
        var _this = this;
        this.SpinnerService.show();
        this.editID = id;
        this.apiService.getData('user/list/' + this.editID + '?pageName=setting').subscribe(function (res) {
            _this.detailForm.controls['name'].setValue(res['data'].name);
            _this.detailForm.controls['email'].setValue(res['data'].email);
            _this.detailForm.controls['password'].setValue(res['data'].password);
            _this.SpinnerService.hide();
        });
    };
    AdminListComponent.prototype.saveDetail = function () {
        var _this = this;
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        if (this.formType == 'add') {
            this.apiUrl = 'user/create';
        }
        else {
            this.detailForm.value['id'] = this.editID;
            this.apiUrl = 'user/update';
        }
        if (this.formType == 'edit') {
            this.detailForm.value['user_id'] = this.editID;
        }
        this.detailForm.value['pageName'] = 'setting';
        this.apiService.saveData(this.apiUrl, this.detailForm.value).subscribe(function (res) {
            _this.SpinnerService.hide();
            if (res['status']) {
                _this.modalReference.close();
                _this.listGetData();
                _this.toastr.success(res['message']);
            }
            else {
                _this.toastr.error(res['message']);
            }
        });
    };
    AdminListComponent.prototype.deleteData = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
            title: 'Are you sure?',
            text: "You wan't to delete ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                var obj = {
                    "id": id
                };
                _this.apiService.saveData('user/delete?pageName=setting', obj).subscribe(function (res) {
                    _this.listGetData();
                    _this.toastr.success(res['message']);
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.DismissReason.cancel) {
            }
        });
    };
    AdminListComponent.prototype.open = function (content, type, id) {
        var _this = this;
        this.submitted = false;
        this.detailForm.markAsPristine();
        this.detailForm.markAsUntouched();
        this.detailForm.updateValueAndValidity();
        this.detailForm.reset();
        this.detailForm.clearValidators();
        Object.keys(this.detailForm.controls).forEach(function (key) {
            _this.detailForm.get(key).setErrors(null);
        });
        if (type == 'edit') {
            this.editData(id);
            this.formType = 'edit';
            this.detailForm = this.formBuilder.group({
                name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
                password: [""],
            });
        }
        else {
            this.formType = 'add';
            this.detailForm = this.formBuilder.group({
                name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
                password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        }
        this.modalReference = this.modalService.open(content);
        this.modalReference.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AdminListComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    Object.defineProperty(AdminListComponent.prototype, "fval", {
        get: function () {
            return this.detailForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    AdminListComponent.ctorParameters = function () { return [
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
        { type: _service_export_service__WEBPACK_IMPORTED_MODULE_9__["ExportService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTableDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTableDirective"])
    ], AdminListComponent.prototype, "dtElement", void 0);
    AdminListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! raw-loader!./adminList.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/adminList/adminList.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]],
            styles: [__webpack_require__(/*! ./adminList.component.scss */ "./src/app/layout/adminList/adminList.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
            _service_export_service__WEBPACK_IMPORTED_MODULE_9__["ExportService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]])
    ], AdminListComponent);
    return AdminListComponent;
}());



/***/ }),

/***/ "./src/app/layout/adminList/adminList.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/adminList/adminList.module.ts ***!
  \******************************************************/
/*! exports provided: AdminListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminListModule", function() { return AdminListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adminList_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminList-routing.module */ "./src/app/layout/adminList/adminList-routing.module.ts");
/* harmony import */ var _adminList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adminList.component */ "./src/app/layout/adminList/adminList.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");











var AdminListModule = /** @class */ (function () {
    function AdminListModule() {
    }
    AdminListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _adminList_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminListRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
            ],
            declarations: [_adminList_component__WEBPACK_IMPORTED_MODULE_4__["AdminListComponent"]]
        })
    ], AdminListModule);
    return AdminListModule;
}());



/***/ })

}]);
//# sourceMappingURL=adminList-adminList-module-es5.js.map