(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assessment-assessment-module"],{

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

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/assessment/assessment.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/assessment/assessment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <ngx-spinner\r\n        bdColor=\"rgba(51, 51, 51, 0.8)\"\r\n        size=\"default\"\r\n        type=\"ball-spin-clockwise\"\r\n    >\r\n        <p style=\"color: white;\">Please Wait...</p>\r\n    </ngx-spinner>\r\n\r\n    <br />\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    <span>Assessment</span>\r\n                    <button\r\n                        (click)=\"backUrl()\"\r\n                        class=\"btn btn-sm btn-primary pull-right\"\r\n                    >\r\n                        Back\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-body table-responsive\" *ngIf=\"videoId\">\r\n                    <div class=\"formbox\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Quiz Title *</label>\r\n                                    <input\r\n                                        type=\"text\"\r\n                                        [(ngModel)]=\"quizTitle\"\r\n                                        class=\"form-control\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Quiz Minutes *</label>\r\n                                    <input\r\n                                        type=\"number\"\r\n                                        [(ngModel)]=\"quizMinutes\"\r\n                                        class=\"form-control\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div\r\n                            class=\"row\"\r\n                            *ngFor=\"let dynamic of dynamicArray; let i = index\"\r\n                        >\r\n                            <div\r\n                                class=\"col-lg-10 col-sm-10 col-xl-10 col-md-10\"\r\n                            >\r\n                                <div class=\"form-group\">\r\n                                    <label>Question *</label>\r\n                                    <input\r\n                                        type=\"text\"\r\n                                        [(ngModel)]=\"dynamicArray[i].question\"\r\n                                        class=\"form-control\"\r\n                                    />\r\n                                    <input\r\n                                        type=\"hidden\"\r\n                                        [(ngModel)]=\"dynamicArray[i].id\"\r\n                                    />\r\n                                    <input\r\n                                        type=\"hidden\"\r\n                                        [(ngModel)]=\"dynamicArray[i].q_image\"\r\n                                    />\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <label>Question Image</label>\r\n                                    <input\r\n                                        type=\"file\"\r\n                                        (change)=\"uploadFile($event, i)\"\r\n                                        class=\"form-control\"\r\n                                        accept=\"image/png, image/jpg, image/jpeg\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-lg-2 col-sm-2 col-xl-2 col-md-2\">\r\n                                <br />\r\n                                <button\r\n                                    (click)=\"addRow(i)\"\r\n                                    class=\"btn btn-primary fa fa-plus\"\r\n                                ></button>\r\n                                &nbsp;&nbsp;\r\n                                <button\r\n                                    (click)=\"deleteRow(i, dynamicArray[i].id)\"\r\n                                    class=\"btn btn-danger fa fa-trash\"\r\n                                ></button>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-sm-3 col-xl-3 col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Option 1 *</label>\r\n                                    <input\r\n                                        type=\"text\"\r\n                                        [(ngModel)]=\"dynamicArray[i].a\"\r\n                                        class=\"form-control\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-sm-3 col-xl-3 col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Option 1 Image</label>\r\n                                    <input\r\n                                        type=\"file\"\r\n                                        (change)=\"uploadFileA($event, i)\"\r\n                                        class=\"form-control\"\r\n                                        accept=\"image/png, image/jpg, image/jpeg\"\r\n                                    />\r\n                                    <input\r\n                                        type=\"hidden\"\r\n                                        [(ngModel)]=\"dynamicArray[i].a_image\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-sm-3 col-xl-3 col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Option 2 *</label>\r\n                                    <input\r\n                                        type=\"text\"\r\n                                        [(ngModel)]=\"dynamicArray[i].b\"\r\n                                        class=\"form-control\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-sm-3 col-xl-3 col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Option 2 Image</label>\r\n                                    <input\r\n                                        type=\"file\"\r\n                                        (change)=\"uploadFileB($event, i)\"\r\n                                        class=\"form-control\"\r\n                                        accept=\"image/png, image/jpg, image/jpeg\"\r\n                                    />\r\n                                    <input\r\n                                        type=\"hidden\"\r\n                                        [(ngModel)]=\"dynamicArray[i].b_image\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-sm-3 col-xl-3 col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Option 3 *</label>\r\n                                    <input\r\n                                        type=\"text\"\r\n                                        [(ngModel)]=\"dynamicArray[i].c\"\r\n                                        class=\"form-control\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-sm-3 col-xl-3 col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Option 3 Image</label>\r\n                                    <input\r\n                                        type=\"file\"\r\n                                        (change)=\"uploadFileC($event, i)\"\r\n                                        class=\"form-control\"\r\n                                        accept=\"image/png, image/jpg, image/jpeg\"\r\n                                    />\r\n                                    <input\r\n                                        type=\"hidden\"\r\n                                        [(ngModel)]=\"dynamicArray[i].c_image\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-sm-3 col-xl-3 col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Option 4 *</label>\r\n                                    <input\r\n                                        type=\"text\"\r\n                                        [(ngModel)]=\"dynamicArray[i].d\"\r\n                                        class=\"form-control\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-sm-3 col-xl-3 col-md-3\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Option 4 Image</label>\r\n                                    <input\r\n                                        type=\"file\"\r\n                                        (change)=\"uploadFileD($event, i)\"\r\n                                        class=\"form-control\"\r\n                                        accept=\"image/png, image/jpg, image/jpeg\"\r\n                                    />\r\n                                    <input\r\n                                        type=\"hidden\"\r\n                                        [(ngModel)]=\"dynamicArray[i].d_image\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-lg-2 col-sm-2 col-xl-2 col-md-2\">\r\n                                <div class=\"form-group\">\r\n                                    <label>Answer *</label>\r\n                                    <select\r\n                                        [(ngModel)]=\"dynamicArray[i].ans\"\r\n                                        class=\"form-control\"\r\n                                    >\r\n                                        <option value=\"a\">Option 1</option>\r\n                                        <option value=\"b\">Option 2</option>\r\n                                        <option value=\"c\">Option 3</option>\r\n                                        <option value=\"d\">Option 4</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div\r\n                                class=\"col-lg-10 col-sm-10 col-xl-10 col-md-10\"\r\n                            >\r\n                                <div class=\"form-group\">\r\n                                    <label>Description *</label>\r\n                                    <input\r\n                                        type=\"text\"\r\n                                        [(ngModel)]=\"\r\n                                            dynamicArray[i].description\r\n                                        \"\r\n                                        class=\"form-control\"\r\n                                    />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12 col-sm-12 col-xl-12 col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <br />\r\n                                <button\r\n                                    (click)=\"saveDetail()\"\r\n                                    class=\"btn btn-primary pull-right\"\r\n                                >\r\n                                    Update\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/assessment/assessment-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/assessment/assessment-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: AssessmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentRoutingModule", function() { return AssessmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _assessment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assessment.component */ "./src/app/layout/assessment/assessment.component.ts");




const routes = [
    {
        path: '',
        component: _assessment_component__WEBPACK_IMPORTED_MODULE_3__["AssessmentComponent"]
    }
];
let AssessmentRoutingModule = class AssessmentRoutingModule {
};
AssessmentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AssessmentRoutingModule);



/***/ }),

/***/ "./src/app/layout/assessment/assessment.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/assessment/assessment.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hc3Nlc3NtZW50L2Fzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/assessment/assessment.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/assessment/assessment.component.ts ***!
  \***********************************************************/
/*! exports provided: AssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentComponent", function() { return AssessmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/api.service */ "./src/app/layout/service/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");








let AssessmentComponent = class AssessmentComponent {
    constructor(apiService, router, formBuilder, toastr, SpinnerService) {
        this.apiService = apiService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.SpinnerService = SpinnerService;
        this.dynamicArray = [];
        this.newDynamic = {};
    }
    ngOnInit() {
        this.videoId = sessionStorage.getItem("videoId");
        if (this.videoId) {
            this.getData();
        }
        else {
            this.router.navigate(["/videoList"]);
        }
        this.newDynamic = {
            id: "",
            question: "",
            q_image: "",
            question_image: "",
            a: "",
            a_image: "",
            a_option_image: "",
            b: "",
            b_image: "",
            b_option_image: "",
            c: "",
            c_image: "",
            c_option_image: "",
            d: "",
            d_image: "",
            d_option_image: "",
            ans: "",
            description: "",
        };
        this.dynamicArray.push(this.newDynamic);
    }
    getData() {
        this.SpinnerService.show();
        this.apiService
            .getData("video/list/" + this.videoId + "?pageName=video")
            .subscribe((res) => {
            if (res["data"] && res["data"]["quiz"]) {
                this.quizTitle = res["data"]["quiz"]["title"];
                this.quizMinutes = res["data"]["quiz"]["minutes"];
                this.dynamicArray =
                    res["data"]["quiz"]["quiz_question"];
                if (this.dynamicArray.length == 0) {
                    this.dynamicArray.push(this.newDynamic);
                }
            }
            this.SpinnerService.hide();
        }, (error) => {
            if (error["error"]) {
                this.toastr.error(error.error["message"]);
                this.router.navigate(["/login"]);
            }
        });
    }
    uploadFile(event, id) {
        console.log(this.dynamicArray[id]);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            //this.tempFileData = file;
            //this.detailForm.value.image = file;
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                // called once readAsDataURL is completed
                this.dynamicArray[id].q_image = reader.result;
            };
        }
        console.log(this.dynamicArray[id]);
    }
    uploadFileA(event, id) {
        console.log(this.dynamicArray[id]);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            //this.tempFileData = file;
            //this.detailForm.value.image = file;
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                // called once readAsDataURL is completed
                this.dynamicArray[id].a_image = reader.result;
            };
        }
        console.log(this.dynamicArray[id]);
    }
    uploadFileB(event, id) {
        console.log(this.dynamicArray[id]);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            //this.tempFileData = file;
            //this.detailForm.value.image = file;
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                // called once readAsDataURL is completed
                this.dynamicArray[id].b_image = reader.result;
            };
        }
        console.log(this.dynamicArray[id]);
    }
    uploadFileC(event, id) {
        console.log(this.dynamicArray[id]);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            //this.tempFileData = file;
            //this.detailForm.value.image = file;
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                // called once readAsDataURL is completed
                this.dynamicArray[id].c_image = reader.result;
            };
        }
        console.log(this.dynamicArray[id]);
    }
    uploadFileD(event, id) {
        console.log(this.dynamicArray[id]);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            //this.tempFileData = file;
            //this.detailForm.value.image = file;
            let reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                // called once readAsDataURL is completed
                this.dynamicArray[id].d_image = reader.result;
            };
        }
        console.log(this.dynamicArray[id]);
    }
    saveDetail() {
        var obj = {};
        obj["video_id"] = this.videoId;
        obj["title"] = this.quizTitle;
        obj["minutes"] = this.quizMinutes;
        obj["questions"] = this.dynamicArray;
        // console.log(this.dynamicArray)
        var flag = false;
        this.dynamicArray.forEach(function (d, i) {
            if (d.question == null ||
                d.question == "" ||
                d.question == undefined) {
                this.toastr.error("Question is required");
                flag = true;
            }
            else if (d.a == null || d.a == "" || d.a == undefined) {
                this.toastr.error("Option A is required");
                flag = true;
            }
            else if (d.b == null || d.b == "" || d.b == undefined) {
                this.toastr.error("Option B is required");
                flag = true;
            }
            else if (d.c == null || d.c == "" || d.c == undefined) {
                this.toastr.error("Option C is required");
                flag = true;
            }
            else if (d.d == null || d.d == "" || d.d == undefined) {
                this.toastr.error("Option D is required");
                flag = true;
            }
            else if (d.ans == null || d.ans == "" || d.ans == undefined) {
                this.toastr.error("Answer is required");
                flag = true;
            }
            console.log(i, flag, d);
        });
        if (flag) {
            return;
        }
        this.SpinnerService.show();
        this.apiService
            .saveData("quiz/addEdit?pageName=video", obj)
            .subscribe((res) => {
            this.SpinnerService.hide();
            if (res["status"]) {
                this.getData();
                this.toastr.success(res["message"]);
                this.router.navigate(["/videoList"]);
            }
            else {
                this.toastr.error(res["message"]);
            }
        });
    }
    backUrl() {
        this.router.navigate(["/videoList"]);
    }
    addRow(index) {
        this.newDynamic = {
            id: "",
            question: "",
            q_image: "",
            question_image: "",
            a: "",
            a_image: "",
            a_option_image: "",
            b: "",
            b_image: "",
            b_option_image: "",
            c: "",
            c_image: "",
            c_option_image: "",
            d: "",
            d_image: "",
            d_option_image: "",
            ans: "",
            description: "",
        };
        this.dynamicArray.push(this.newDynamic);
        return true;
    }
    deleteRow(index, id) {
        if (this.dynamicArray.length == 1) {
            return false;
        }
        else {
            this.SpinnerService.show();
            this.dynamicArray.splice(index, 1);
            var obj = {
                id: id,
            };
            this.apiService
                .saveData("quiz/questionDelete?pageName=video", obj)
                .subscribe((res) => {
                this.SpinnerService.hide();
                this.toastr.success(res["message"]);
            });
            return true;
        }
    }
};
AssessmentComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
];
AssessmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tables",
        template: __webpack_require__(/*! raw-loader!./assessment.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/assessment/assessment.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]],
        styles: [__webpack_require__(/*! ./assessment.component.scss */ "./src/app/layout/assessment/assessment.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
], AssessmentComponent);



/***/ }),

/***/ "./src/app/layout/assessment/assessment.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/assessment/assessment.module.ts ***!
  \********************************************************/
/*! exports provided: AssessmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentModule", function() { return AssessmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _assessment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assessment-routing.module */ "./src/app/layout/assessment/assessment-routing.module.ts");
/* harmony import */ var _assessment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assessment.component */ "./src/app/layout/assessment/assessment.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");











let AssessmentModule = class AssessmentModule {
};
AssessmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _assessment_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssessmentRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
        ],
        declarations: [_assessment_component__WEBPACK_IMPORTED_MODULE_4__["AssessmentComponent"]]
    })
], AssessmentModule);



/***/ })

}]);
//# sourceMappingURL=assessment-assessment-module-es2015.js.map