(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscriptionList-subscriptionList-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/subscriptionList/subscriptionList.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/subscriptionList/subscriptionList.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Subscriptions'\"></app-page-header>\r\n\r\n    <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">  \r\n        <p style=\"color: white\">Please Wait... </p>  \r\n    </ngx-spinner> \r\n\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    <span>Subscription Details</span>\r\n                    <button class=\"btn btn-sm btn-primary pull-right\" (click)=\"open(content,'add','')\">Add</button>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>S. No.</th>\r\n                                <th>Title</th>\r\n                                <th>Price</th>\r\n                                <th>Days</th>\r\n                                <th class=\"text-center actionHeader\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"listData?.length != 0\">\r\n                            <tr *ngFor=\"let data of listData; index as i\">\r\n                                <td>{{i+1}}</td>\r\n                                <td>{{data.title}}</td>\r\n                                <td>{{data.price}}</td>\r\n                                <td>{{data.days}}</td>\r\n                                <td class=\"text-center actionHeader\">\r\n                                    <button (click)=\"open(content, 'edit', data.id)\" class=\"btn btn-sm btn-primary fa fa-pencil\"></button>\r\n                                    &nbsp;\r\n                                    <button (click)=\"deleteData(data.id)\" class=\"btn btn-sm btn-danger fa fa-trash\"></button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Add/Edit Modal Start -->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Subscription Detail</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form [formGroup]=\"detailForm\" (ngSubmit)=\"saveDetail()\" >\r\n                <div class=\"formbox\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Title Name *</label>\r\n                                <input type=\"text\" formControlName=\"title\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.title.errors }\"/>\r\n                                <div *ngIf=\"submitted && fval.title.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.title.errors.required\">\r\n                                        Title Name is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Days *</label>\r\n                                <input type=\"number\" min=\"0\" formControlName=\"days\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.days.errors }\"/>\r\n                                <div *ngIf=\"submitted && fval.days.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.days.errors.required\">\r\n                                        Days is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Price *</label>\r\n                                <input type=\"number\" min=\"0\" formControlName=\"price\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.price.errors }\"/>\r\n                                <div *ngIf=\"submitted && fval.price.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.price.errors.required\">\r\n                                        Price is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Image *</label>\r\n                                <input type=\"file\" (change)=\"uploadFile($event)\" formControlName=\"image\" class=\"form-control\" accept=\"image/png, image/jpg, image/jpeg\" [ngClass]=\"{ 'is-invalid': submitted && fval.image.errors }\" />\r\n                                <div *ngIf=\"submitted && fval.image.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.image.errors.required\">\r\n                                        Image is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"button\" class=\"btn btn-danger pull-right marLt_2Per\" (click)=\"c('Close click')\">Close</button>\r\n                        <button type=\"submit\" class=\"btn btn-primary pull-right\">Save</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </ng-template>\r\n    <!-- Add/Edit Modal End -->\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/subscriptionList/subscriptionList-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/subscriptionList/subscriptionList-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: SubscriptionListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionListRoutingModule", function() { return SubscriptionListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _subscriptionList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscriptionList.component */ "./src/app/layout/subscriptionList/subscriptionList.component.ts");




const routes = [
    {
        path: '',
        component: _subscriptionList_component__WEBPACK_IMPORTED_MODULE_3__["SubscriptionListComponent"]
    }
];
let SubscriptionListRoutingModule = class SubscriptionListRoutingModule {
};
SubscriptionListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SubscriptionListRoutingModule);



/***/ }),

/***/ "./src/app/layout/subscriptionList/subscriptionList.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/layout/subscriptionList/subscriptionList.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zdWJzY3JpcHRpb25MaXN0L3N1YnNjcmlwdGlvbkxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/subscriptionList/subscriptionList.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/subscriptionList/subscriptionList.component.ts ***!
  \***********************************************************************/
/*! exports provided: SubscriptionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionListComponent", function() { return SubscriptionListComponent; });
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












let SubscriptionListComponent = class SubscriptionListComponent {
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
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            days: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.listGetData();
    }
    listGetData() {
        this.SpinnerService.show();
        this.apiService.getData('subscription/list?pageName=subscription').subscribe(res => {
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
        this.apiService.getData('subscription/list/' + this.editID + '?pageName=subscription').subscribe(res => {
            this.detailForm.controls['title'].setValue(res['data'].title);
            this.detailForm.controls['price'].setValue(res['data'].price);
            this.detailForm.controls['days'].setValue(res['data'].days);
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
            this.apiUrl = 'subscription/add';
        }
        else {
            this.detailForm.value['id'] = this.editID;
            this.apiUrl = 'subscription/edit';
        }
        if (this.formType == 'edit' && this.tempFileData == undefined) {
            this.tempFileData = '';
        }
        const formData = new FormData();
        formData.append('pageName', 'subscription');
        formData.append('title', this.detailForm.value.title);
        formData.append('price', this.detailForm.value.price);
        formData.append('days', this.detailForm.value.days);
        formData.append('image', this.tempFileData);
        if (this.formType == 'edit') {
            formData.append('id', this.editID);
        }
        this.apiService.saveData(this.apiUrl, formData).subscribe(res => {
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
    uploadFile(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.tempFileData = file;
            this.detailForm.value.image = file;
        }
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
                this.apiService.saveData('subscription/delete?pageName=subscription', obj).subscribe(res => {
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
            this.detailForm = this.formBuilder.group({
                title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                days: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                image: [""],
            });
        }
        else {
            this.formType = 'add';
            this.detailForm = this.formBuilder.group({
                title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                days: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
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
SubscriptionListComponent.ctorParameters = () => [
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
], SubscriptionListComponent.prototype, "dtElement", void 0);
SubscriptionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tables',
        template: __webpack_require__(/*! raw-loader!./subscriptionList.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/subscriptionList/subscriptionList.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]],
        styles: [__webpack_require__(/*! ./subscriptionList.component.scss */ "./src/app/layout/subscriptionList/subscriptionList.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
], SubscriptionListComponent);



/***/ }),

/***/ "./src/app/layout/subscriptionList/subscriptionList.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/subscriptionList/subscriptionList.module.ts ***!
  \********************************************************************/
/*! exports provided: SubscriptionListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionListModule", function() { return SubscriptionListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _subscriptionList_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscriptionList-routing.module */ "./src/app/layout/subscriptionList/subscriptionList-routing.module.ts");
/* harmony import */ var _subscriptionList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscriptionList.component */ "./src/app/layout/subscriptionList/subscriptionList.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");











let SubscriptionListModule = class SubscriptionListModule {
};
SubscriptionListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _subscriptionList_routing_module__WEBPACK_IMPORTED_MODULE_3__["SubscriptionListRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
        ],
        declarations: [_subscriptionList_component__WEBPACK_IMPORTED_MODULE_4__["SubscriptionListComponent"]]
    })
], SubscriptionListModule);



/***/ })

}]);
//# sourceMappingURL=subscriptionList-subscriptionList-module-es2015.js.map