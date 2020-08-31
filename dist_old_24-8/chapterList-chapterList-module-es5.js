(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chapterList-chapterList-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/chapterList/chapterList.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/chapterList/chapterList.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Chapters'\"></app-page-header>\r\n\r\n    <ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"default\" type=\"ball-spin-clockwise\">  \r\n        <p style=\"color: white\">Please Wait... </p>  \r\n    </ngx-spinner> \r\n\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    <span>Chapter Details</span>\r\n                    <button class=\"btn btn-sm btn-primary pull-right\" (click)=\"open(content,'add', '')\">Add</button>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-striped table-bordered table-sm row-border hover\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>S. No.</th>\r\n                                <th>Class</th>\r\n                                <th>Subject</th>\r\n                                <th>Chapter Name</th>\r\n                                <th>Description</th>\r\n                                <th>Squence Number</th>\r\n                                <th class=\"text-center actionHeader\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"listData?.length != 0\">\r\n                            <tr *ngFor=\"let data of listData; index as i\">\r\n                                <td>{{i+1}}</td>\r\n                                <td>{{data.subject.classes.class_name}}</td>\r\n                                <td>{{data.subject.subject_name}}</td>\r\n                                <td>{{data.chapter_name}}</td>\r\n                                <td>{{data.description}}</td>\r\n                                <td>{{data.sqno}}</td>\r\n                                <td class=\"text-center actionHeader\">\r\n                                    <button (click)=\"open(content,'edit', data.id)\" class=\"btn btn-sm btn-primary fa fa-pencil\"></button>\r\n                                    &nbsp;\r\n                                    <button (click)=\"deleteData(data.id)\" class=\"btn btn-sm btn-danger fa fa-trash\"></button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Add/Edit Modal Start -->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Chapter Detail</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form [formGroup]=\"detailForm\" (ngSubmit)=\"saveDetail();\">\r\n                <div class=\"formbox\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Class *</label>\r\n                                <select class=\"form-control\" formControlName=\"class_id\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.class_id.errors }\" (change)=\"getSubjectData($event)\">\r\n                                    <option *ngFor=\"let data of classData\" value=\"{{data.id}}\">{{data.class_name}}</option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && fval.class_id.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.class_id.errors.required\">\r\n                                        Class is required\r\n                                    </div>                        \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Subject *</label>\r\n                                <select class=\"form-control\" formControlName=\"subject_id\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.subject_id.errors }\">\r\n                                    <option *ngFor=\"let data of subjectData\" value=\"{{data.id}}\">{{data.subject_name}}</option>\r\n                                </select>\r\n                                <div *ngIf=\"submitted && fval.subject_id.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.subject_id.errors.required\">\r\n                                        Subject is required\r\n                                    </div>                        \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Chapter Name *</label>\r\n                                <input type=\"text\" formControlName=\"chapter_name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && fval.chapter_name.errors }\"/>\r\n                                <div *ngIf=\"submitted && fval.chapter_name.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.chapter_name.errors.required\">\r\n                                        Chapter Name is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-6 col-sm-6 col-xl-6 col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Image *</label>\r\n                                <input type=\"file\" (change)=\"uploadFile($event)\" formControlName=\"thumbnail\" class=\"form-control\" accept=\"image/png, image/jpg, image/jpeg\" [ngClass]=\"{ 'is-invalid': submitted && fval.thumbnail.errors }\"/>\r\n                                <div *ngIf=\"submitted && fval.thumbnail.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.thumbnail.errors.required\">\r\n                                        Image is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-12 col-sm-12 col-xl-12 col-md-12\">\r\n                            <div class=\"form-group\">\r\n                                <label>Description *</label>\r\n                                <textarea formControlName=\"description\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && fval.description.errors }\"></textarea>\r\n                                <div *ngIf=\"submitted && fval.description.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"fval.description.errors.required\">\r\n                                        Description is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"button\" class=\"btn btn-danger pull-right marLt_2Per\" (click)=\"c('Close click')\">Close</button>\r\n                        <button type=\"submit\" class=\"btn btn-primary pull-right\">Save</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </ng-template>\r\n    <!-- Add/Edit Modal End -->\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/chapterList/chapterList-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/chapterList/chapterList-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ChapterListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterListRoutingModule", function() { return ChapterListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chapterList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chapterList.component */ "./src/app/layout/chapterList/chapterList.component.ts");




var routes = [
    {
        path: '',
        component: _chapterList_component__WEBPACK_IMPORTED_MODULE_3__["ChapterListComponent"]
    }
];
var ChapterListRoutingModule = /** @class */ (function () {
    function ChapterListRoutingModule() {
    }
    ChapterListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ChapterListRoutingModule);
    return ChapterListRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/chapterList/chapterList.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/chapterList/chapterList.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jaGFwdGVyTGlzdC9jaGFwdGVyTGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/chapterList/chapterList.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/chapterList/chapterList.component.ts ***!
  \*************************************************************/
/*! exports provided: ChapterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterListComponent", function() { return ChapterListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/api.service */ "./src/app/layout/service/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












var ChapterListComponent = /** @class */ (function () {
    function ChapterListComponent(apiService, modalService, router, formBuilder, toastr, SpinnerService) {
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
    ChapterListComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.detailForm = this.formBuilder.group({
            class_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subject_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            chapter_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            thumbnail: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.listGetData();
        this.getClassData();
    };
    ChapterListComponent.prototype.getClassData = function () {
        var _this = this;
        this.apiService.getData('class/list?pageName=chapter').subscribe(function (res) {
            _this.classData = res['data'];
        });
    };
    ChapterListComponent.prototype.getSubjectData = function (event) {
        var _this = this;
        var value;
        if (event && event.target && event.target.value) {
            value = event.target.value;
        }
        else {
            value = event;
        }
        var url = 'class/getSubject/' + value + '?pageName=chapter';
        this.apiService.getData(url).subscribe(function (res) {
            _this.subjectData = res['data'].subject;
        });
    };
    ChapterListComponent.prototype.listGetData = function () {
        var _this = this;
        this.SpinnerService.show();
        this.apiService.getData('chapter/list?pageName=chapter').subscribe(function (res) {
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
    ChapterListComponent.prototype.editData = function (id) {
        var _this = this;
        this.SpinnerService.show();
        this.editID = id;
        this.apiService.getData('chapter/list/' + this.editID + '?pageName=chapter').subscribe(function (res) {
            _this.getSubjectData(res['data'].subject.classes.id);
            _this.detailForm.controls['class_id'].setValue(res['data'].subject.classes.id);
            _this.detailForm.controls['subject_id'].setValue(res['data'].subject.id);
            _this.detailForm.controls['chapter_name'].setValue(res['data'].chapter_name);
            _this.detailForm.controls['description'].setValue(res['data'].description);
            _this.SpinnerService.hide();
        });
    };
    ChapterListComponent.prototype.saveDetail = function () {
        var _this = this;
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        if (this.formType == 'add') {
            this.apiUrl = 'chapter/add';
        }
        else {
            this.detailForm.value['id'] = this.editID;
            this.apiUrl = 'chapter/edit';
        }
        if (this.formType == 'edit' && this.tempFileData == undefined) {
            this.detailForm.value.image = '';
            this.tempFileData = '';
        }
        var formData = new FormData();
        formData.append('pageName', 'chapter');
        formData.append('class_id', this.detailForm.value.class_id);
        formData.append('subject_id', this.detailForm.value.subject_id);
        formData.append('chapter_name', this.detailForm.value.chapter_name);
        formData.append('description', this.detailForm.value.description);
        formData.append('thumbnail', this.tempFileData);
        if (this.formType == 'edit') {
            formData.append('id', this.editID);
        }
        this.apiService.saveData(this.apiUrl, formData).subscribe(function (res) {
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
    ChapterListComponent.prototype.uploadFile = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.detailForm.value.thumbnail = file;
            this.tempFileData = file;
        }
    };
    ChapterListComponent.prototype.deleteData = function (id) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
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
                _this.apiService.saveData('chapter/delete?pageName=chapter', obj).subscribe(function (res) {
                    _this.listGetData();
                    _this.toastr.success(res['message']);
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.DismissReason.cancel) {
            }
        });
    };
    ChapterListComponent.prototype.open = function (content, type, id) {
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
                class_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                subject_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                chapter_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                thumbnail: [""],
                description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        }
        else {
            this.formType = 'add';
            this.detailForm = this.formBuilder.group({
                class_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                subject_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                chapter_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                thumbnail: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        }
        this.modalReference = this.modalService.open(content);
        this.modalReference.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ChapterListComponent.prototype.getDismissReason = function (reason) {
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
    Object.defineProperty(ChapterListComponent.prototype, "fval", {
        get: function () {
            return this.detailForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ChapterListComponent.ctorParameters = function () { return [
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_10__["DataTableDirective"])
    ], ChapterListComponent.prototype, "dtElement", void 0);
    ChapterListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! raw-loader!./chapterList.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/chapterList/chapterList.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
            providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]],
            styles: [__webpack_require__(/*! ./chapterList.component.scss */ "./src/app/layout/chapterList/chapterList.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
    ], ChapterListComponent);
    return ChapterListComponent;
}());



/***/ }),

/***/ "./src/app/layout/chapterList/chapterList.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/chapterList/chapterList.module.ts ***!
  \**********************************************************/
/*! exports provided: ChapterListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterListModule", function() { return ChapterListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chapterList_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chapterList-routing.module */ "./src/app/layout/chapterList/chapterList-routing.module.ts");
/* harmony import */ var _chapterList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chapterList.component */ "./src/app/layout/chapterList/chapterList.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");











var ChapterListModule = /** @class */ (function () {
    function ChapterListModule() {
    }
    ChapterListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _chapterList_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChapterListRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
            ],
            declarations: [_chapterList_component__WEBPACK_IMPORTED_MODULE_4__["ChapterListComponent"]]
        })
    ], ChapterListModule);
    return ChapterListModule;
}());



/***/ })

}]);
//# sourceMappingURL=chapterList-chapterList-module-es5.js.map