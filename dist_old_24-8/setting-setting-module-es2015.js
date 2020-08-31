(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-setting-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableDirective.prototype, "dtOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], DataTableDirective.prototype, "dtTrigger", void 0);
    DataTableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[datatable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DataTableDirective);
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule_1 = DataTablesModule;
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule_1
        };
    };
    var DataTablesModule_1;
    DataTablesModule = DataTablesModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
            exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
        })
    ], DataTablesModule);
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/setting/setting.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/setting/setting.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n\r\n    <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">  \r\n        <p style=\"color: white\">Please Wait... </p>  \r\n    </ngx-spinner> \r\n\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    <span>General Setting</span>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <form [formGroup]=\"detailForm\" (ngSubmit)=\"saveDetail()\" >\r\n                        <div class=\"formbox\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Client Key *</label>\r\n                                        <input type=\"text\" formControlName=\"client_key\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.client_key.errors }\"/>\r\n                                        <div *ngIf=\"submitted && fval.client_key.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"fval.client_key.errors.required\">\r\n                                                Client Key is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Secret Key *</label>\r\n                                        <input type=\"text\" formControlName=\"secret_key\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.secret_key.errors }\"/>\r\n                                        <div *ngIf=\"submitted && fval.secret_key.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"fval.secret_key.errors.required\">\r\n                                                Secret Key is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Session End Date *</label>\r\n                                        <div class=\"input-group\">\r\n                                            <select class=\"form-control\" formControlName=\"day\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.day.errors }\">\r\n                                                <option *ngFor=\"let data of dayData\" value=\"{{data.value}}\">{{data.value}}</option>\r\n                                            </select>\r\n                                            <div *ngIf=\"submitted && fval.day.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"fval.day.errors.required\">\r\n                                                    Day is required\r\n                                                </div>\r\n                                            </div>\r\n                                            &nbsp;&nbsp;&nbsp;\r\n                                            <select class=\"form-control\" formControlName=\"month\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.month.errors }\">\r\n                                                <option *ngFor=\"let data of monthData\" value=\"{{data.value}}\">{{data.value}}</option>\r\n                                            </select>\r\n                                            <div *ngIf=\"submitted && fval.month.errors\" class=\"invalid-feedback\">\r\n                                                <div *ngIf=\"fval.month.errors.required\">\r\n                                                    Month is required\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>                                \r\n                                <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Minimum Redeem Amount *</label>\r\n                                        <input type=\"number\" min=\"0\" formControlName=\"min_redeem\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.min_redeem.errors }\"/>\r\n                                        <div *ngIf=\"submitted && fval.min_redeem.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"fval.min_redeem.errors.required\">\r\n                                                Minimum Redeem Amount is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Maximum Redeem Amount *</label>\r\n                                        <input type=\"number\" min=\"0\" formControlName=\"max_redeem\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.max_redeem.errors }\"/>\r\n                                        <div *ngIf=\"submitted && fval.max_redeem.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"fval.max_redeem.errors.required\">\r\n                                                Maximum Redeem Amount is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Referred Amount *</label>\r\n                                        <input type=\"number\" min=\"0\" formControlName=\"referred_amount\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.referred_amount.errors }\"/>\r\n                                        <div *ngIf=\"submitted && fval.referred_amount.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"fval.referred_amount.errors.required\">\r\n                                                Referred Amount is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Vendor Commission % *</label>\r\n                                        <input type=\"number\" min=\"0\" formControlName=\"vendor_per\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.vendor_per.errors }\"/>\r\n                                        <div *ngIf=\"submitted && fval.vendor_per.errors\" class=\"invalid-feedback\">\r\n                                            <div *ngIf=\"fval.vendor_per.errors.required\">\r\n                                                Vendor Commission % is required\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-12 col-sm-12 col-xl-12 col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <br>\r\n                                        <button type=\"submit\" class=\"btn btn-primary pull-right\">Update</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/setting/setting-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/setting/setting-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: SettingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function() { return SettingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.component */ "./src/app/layout/setting/setting.component.ts");




const routes = [
    {
        path: '',
        component: _setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]
    }
];
let SettingRoutingModule = class SettingRoutingModule {
};
SettingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SettingRoutingModule);



/***/ }),

/***/ "./src/app/layout/setting/setting.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/setting/setting.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .datepicker-input .custom-select {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHRpbmcvQzpcXHhhbXBwXFxwYW5lbF9uZXdfMmp1bHlcXFBhbmVsX2NvZGVfbWFzdGVyXFxQaHBfQ29kZS9zcmNcXGFwcFxcbGF5b3V0XFxzZXR0aW5nXFxzZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksc0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmRhdGVwaWNrZXItaW5wdXQge1xyXG4gICAgLmN1c3RvbS1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiOmhvc3QgOjpuZy1kZWVwIC5kYXRlcGlja2VyLWlucHV0IC5jdXN0b20tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/setting/setting.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/setting/setting.component.ts ***!
  \*****************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/api.service */ "./src/app/layout/service/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");








let SettingComponent = class SettingComponent {
    constructor(apiService, router, formBuilder, toastr, SpinnerService) {
        this.apiService = apiService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.SpinnerService = SpinnerService;
        this.submitted = false;
        this.dayData = [];
        this.monthData = [];
    }
    ngOnInit() {
        this.detailForm = this.formBuilder.group({
            client_key: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            secret_key: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            min_redeem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            max_redeem: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            referred_amount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            day: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            month: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            session_end: [""],
            vendor_per: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.getData();
        for (var i = 1; i < 32; i++) {
            var obj = {};
            obj['value'] = i;
            if (i < 13) {
                this.monthData.push(obj);
            }
            this.dayData.push(obj);
        }
    }
    getData() {
        this.apiService.getData('setting/details?pageName=setting').subscribe(res => {
            this.detailForm.controls['client_key'].setValue(res['data'].client_key);
            this.detailForm.controls['secret_key'].setValue(res['data'].secret_key);
            this.detailForm.controls['min_redeem'].setValue(res['data'].min_redeem);
            this.detailForm.controls['max_redeem'].setValue(res['data'].max_redeem);
            this.detailForm.controls['referred_amount'].setValue(res['data'].referred_amount);
            this.detailForm.controls['month'].setValue(res['data'].session_end.split('-')[1]);
            this.detailForm.controls['day'].setValue(res['data'].session_end.split('-')[0]);
            this.detailForm.controls['vendor_per'].setValue(res['data'].vendor_per);
        }, error => {
            if (error['error']) {
                this.toastr.error(error.error['message']);
                this.router.navigate(['/login']);
            }
        });
    }
    saveDetail() {
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        this.detailForm.value['pageName'] = 'setting';
        this.detailForm.value['session_end'] = this.detailForm.value['day'] + '-' + this.detailForm.value['month'];
        this.apiService.saveData('setting/add', this.detailForm.value).subscribe(res => {
            this.SpinnerService.hide();
            if (res['status']) {
                this.getData();
                this.toastr.success(res['message']);
            }
            else {
                this.toastr.error(res['message']);
            }
        });
    }
    get fval() {
        return this.detailForm.controls;
    }
};
SettingComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tables',
        template: __webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/setting/setting.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]],
        styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/app/layout/setting/setting.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
], SettingComponent);



/***/ }),

/***/ "./src/app/layout/setting/setting.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/setting/setting.module.ts ***!
  \**************************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _setting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-routing.module */ "./src/app/layout/setting/setting-routing.module.ts");
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting.component */ "./src/app/layout/setting/setting.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");











let SettingModule = class SettingModule {
};
SettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _setting_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
        ],
        declarations: [_setting_component__WEBPACK_IMPORTED_MODULE_4__["SettingComponent"]]
    })
], SettingModule);



/***/ })

}]);
//# sourceMappingURL=setting-setting-module-es2015.js.map