(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videoList-videoList-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/videoList/videoList.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/videoList/videoList.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <app-page-header [heading]=\"'Videos'\"></app-page-header>\r\n\r\n    <ngx-spinner\r\n        bdColor=\"rgba(51, 51, 51, 0.8)\"\r\n        size=\"default\"\r\n        type=\"ball-spin-clockwise\"\r\n    >\r\n        <!-- <p style=\"color: white\">Please Wait... {{progress}} </p> -->\r\n        <span style=\"color: white;\">Please Wait... </span>\r\n        <span *ngIf=\"progress\" style=\"color: white;\">{{ progress }} % </span>\r\n    </ngx-spinner>\r\n\r\n    <!-- <div class=\"prog\" *ngIf=\"progress\">\r\n        <div class=\"prog-bar\" [style.width]=\"prog + '%'\">{{progress}}%</div>\r\n    </div>\r\n    <div class=\"prog\">\r\n        <div class=\"prog-bar\" [style.width]=\"prog + '%'\">{{progress}}%</div>\r\n    </div> -->\r\n    <!-- <progress-bar [progress]=\"100\" [color]=\"'#488aff'\"></progress-bar> -->\r\n    <!-- <progress-bar [progress]=\"progress\" [color]=\"'#488aff'\"></progress-bar>\r\n    <progress-bar *ngIf=\"progress\" [progress]=\"progress\" [color]=\"'#488aff'\"></progress-bar> -->\r\n    <!-- <div class=\"progress form-group\" *ngIf=\"progress > 0\">\r\n        <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width.%]=\"progress\"></div>\r\n    </div> -->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col col-xl-12 col-lg-12\">\r\n            <div class=\"card mb-3\">\r\n                <div class=\"card-header\">\r\n                    <span>Video Details</span>\r\n                    <button\r\n                        class=\"btn btn-sm btn-primary pull-right\"\r\n                        (click)=\"open(content, 'add', '')\"\r\n                    >\r\n                        Add\r\n                    </button>\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table\r\n                        class=\"table table-striped table-bordered table-sm row-border hover\"\r\n                        datatable\r\n                        [dtOptions]=\"dtOptions\"\r\n                        [dtTrigger]=\"dtTrigger\"\r\n                    >\r\n                        <thead>\r\n                            <tr>\r\n                                <th>S. No.</th>\r\n                                <th>Class</th>\r\n                                <th>Subject</th>\r\n                                <th>Teacher</th>\r\n                                <th>Chapter</th>\r\n                                <th>Topic</th>\r\n                                <th>Video Title</th>\r\n                                <th>Video Type</th>\r\n                                <th>Video Description</th>\r\n                                <th>Document Description</th>\r\n                                <th class=\"text-center actionHeader\">Action</th>\r\n                                <th class=\"text-center actionHeader\">\r\n                                    Assessment\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody *ngIf=\"listData?.length != 0\">\r\n                            <tr *ngFor=\"let data of listData; index as i\">\r\n                                <td>{{ i + 1 }}</td>\r\n                                <td>\r\n                                    {{\r\n                                        data.topic.chapter.subject.classes\r\n                                            .class_name\r\n                                    }}\r\n                                </td>\r\n                                <td>\r\n                                    {{\r\n                                        data.topic.chapter.subject.subject_name\r\n                                    }}\r\n                                </td>\r\n                                <td>{{ data.teacher_video.teacher_name }}</td>\r\n                                <td>{{ data.topic.chapter.chapter_name }}</td>\r\n                                <td>{{ data.topic.topic_name }}</td>\r\n                                <td>{{ data.title }}</td>\r\n                                <td>{{ data.type | titlecase }}</td>\r\n                                <td>{{ data.video_description }}</td>\r\n                                <td>{{ data.document_description }}</td>\r\n                                <td class=\"text-center actionHeader\">\r\n                                    <button\r\n                                        (click)=\"open(content, 'edit', data.id)\"\r\n                                        class=\"btn btn-sm btn-primary fa fa-pencil\"\r\n                                    ></button>\r\n                                    &nbsp;\r\n                                    <button\r\n                                        (click)=\"deleteData(data.id, 'video')\"\r\n                                        class=\"btn btn-sm btn-danger fa fa-trash\"\r\n                                    ></button>\r\n                                </td>\r\n                                <td class=\"text-center actionHeader\">\r\n                                    <button\r\n                                        (click)=\"generateQuiz(data.id)\"\r\n                                        class=\"btn btn-sm btn-primary fa fa-plus\"\r\n                                    ></button>\r\n                                    &nbsp;\r\n                                    <button\r\n                                        (click)=\"deleteData(data.id, 'quiz')\"\r\n                                        class=\"btn btn-sm btn-danger fa fa-trash\"\r\n                                    ></button>\r\n                                    &nbsp;\r\n                                    <button\r\n                                        (click)=\"viewQuiz(data.id)\"\r\n                                        class=\"btn btn-sm btn-success fa fa-eye\"\r\n                                    ></button>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Add/Edit Modal Start -->\r\n    <ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\">Video Detail</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <form [formGroup]=\"detailForm\" (ngSubmit)=\"saveDetail()\">\r\n                <div class=\"formbox\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Class *</label>\r\n                                <select\r\n                                    class=\"form-control\"\r\n                                    formControlName=\"class_id\"\r\n                                    (change)=\"getSubjectData($event)\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted && fval.class_id.errors\r\n                                    }\"\r\n                                >\r\n                                    <option\r\n                                        *ngFor=\"let data of classData\"\r\n                                        value=\"{{ data.id }}\"\r\n                                        >{{ data.class_name }}</option\r\n                                    >\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"submitted && fval.class_id.errors\"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n                                    <div *ngIf=\"fval.class_id.errors.required\">\r\n                                        Class is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Subject *</label>\r\n                                <select\r\n                                    class=\"form-control\"\r\n                                    formControlName=\"subject_id\"\r\n                                    (change)=\"getChapterData($event)\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted && fval.subject_id.errors\r\n                                    }\"\r\n                                >\r\n                                    <option\r\n                                        *ngFor=\"let data of subjectData\"\r\n                                        value=\"{{ data.id }}\"\r\n                                        >{{ data.subject_name }}</option\r\n                                    >\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"submitted && fval.subject_id.errors\"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n                                    <div\r\n                                        *ngIf=\"fval.subject_id.errors.required\"\r\n                                    >\r\n                                        Subject is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Teacher *</label>\r\n                                <select\r\n                                    class=\"form-control\"\r\n                                    formControlName=\"teacher_id\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted && fval.teacher_id.errors\r\n                                    }\"\r\n                                >\r\n                                    <option\r\n                                        *ngFor=\"let data of teacherData\"\r\n                                        value=\"{{ data.id }}\"\r\n                                        >{{ data.teacher_name }}</option\r\n                                    >\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"submitted && fval.teacher_id.errors\"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n                                    <div\r\n                                        *ngIf=\"fval.teacher_id.errors.required\"\r\n                                    >\r\n                                        Teacher is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Chapter *</label>\r\n                                <select\r\n                                    class=\"form-control\"\r\n                                    (change)=\"getTopicData($event)\"\r\n                                    formControlName=\"chapter_id\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted && fval.chapter_id.errors\r\n                                    }\"\r\n                                >\r\n                                    <option\r\n                                        *ngFor=\"let data of chapterData\"\r\n                                        value=\"{{ data.id }}\"\r\n                                        >{{ data.chapter_name }}</option\r\n                                    >\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"submitted && fval.chapter_id.errors\"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n                                    <div\r\n                                        *ngIf=\"fval.chapter_id.errors.required\"\r\n                                    >\r\n                                        Chapter is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Topic *</label>\r\n                                <select\r\n                                    class=\"form-control\"\r\n                                    formControlName=\"topic_id\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted && fval.topic_id.errors\r\n                                    }\"\r\n                                >\r\n                                    <option\r\n                                        *ngFor=\"let data of topicData\"\r\n                                        value=\"{{ data.id }}\"\r\n                                        >{{ data.topic_name }}</option\r\n                                    >\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"submitted && fval.topic_id.errors\"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n                                    <div *ngIf=\"fval.topic_id.errors.required\">\r\n                                        Topic is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Video Type *</label>\r\n                                <select\r\n                                    class=\"form-control\"\r\n                                    formControlName=\"type\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted && fval.type.errors\r\n                                    }\"\r\n                                >\r\n                                    <option value=\"demo\">Demo</option>\r\n                                    <option value=\"paid\">Paid</option>\r\n                                </select>\r\n                                <div\r\n                                    *ngIf=\"submitted && fval.type.errors\"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n                                    <div *ngIf=\"fval.type.errors.required\">\r\n                                        Video Type is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Video Title *</label>\r\n                                <input\r\n                                    type=\"text\"\r\n                                    formControlName=\"title\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted && fval.title.errors\r\n                                    }\"\r\n                                />\r\n                                <div\r\n                                    *ngIf=\"submitted && fval.title.errors\"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n                                    <div *ngIf=\"fval.title.errors.required\">\r\n                                        Video Title is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                            <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Video Description *</label>\r\n                                <textarea\r\n                                    type=\"text\"\r\n                                    formControlName=\"video_description\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted &&\r\n                                            fval.video_description.errors\r\n                                    }\"\r\n                                ></textarea>\r\n                                <div\r\n                                    *ngIf=\"\r\n                                        submitted &&\r\n                                        fval.video_description.errors\r\n                                    \"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n                                    <div\r\n                                        *ngIf=\"\r\n                                            fval.video_description.errors\r\n                                                .required\r\n                                        \"\r\n                                    >\r\n                                        Video Description is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                               <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Document Description*</label>\r\n                                <textarea\r\n                                    type=\"text\"\r\n                                    formControlName=\"document_description\"\r\n                                    class=\"form-control\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted &&\r\n                                            fval.document_description.errors\r\n                                    }\"\r\n                                ></textarea>\r\n                                <div\r\n                                    *ngIf=\"\r\n                                        submitted &&\r\n                                        fval.document_description.errors\r\n                                    \"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n                                    <div\r\n                                        *ngIf=\"\r\n                                            fval.document_description.errors\r\n                                                .required\r\n                                        \"\r\n                                    >\r\n                                        Document Description is required\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Video Thumbnail *</label>\r\n                                <input\r\n                                    type=\"file\"\r\n                                    formControlName=\"thumbnail\"\r\n                                    (change)=\"uploadThumbnail($event)\"\r\n                                    class=\"form-control\"\r\n                                    accept=\"image/png, image/jpg, image/jpeg\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted && fval.thumbnail.errors\r\n                                    }\"\r\n                                />\r\n                                <div\r\n                                    *ngIf=\"submitted && fval.thumbnail.errors\"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n\r\n                                    <div *ngIf=\"fval.thumbnail.errors.required\">\r\n                                        Video Thumbnail is required\r\n                                    </div>\r\n                                </div>\r\n                                <input type=\"text\" formControlName=\"thumbnaiPath\"class=\"form-control\" readonly=\"readonly\" [ngClass]=\"{ 'is-invalid': submitted && fval.title.errors }\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Video *</label>\r\n                                <input\r\n                                    type=\"file\"\r\n                                    formControlName=\"video\"\r\n                                    (change)=\"uploadVideo($event)\"\r\n                                    class=\"form-control\"\r\n                                    accept=\".webm, .mkv, .avi, .mp4,\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted && fval.video.errors\r\n                                    }\"\r\n                                />\r\n                                <div\r\n                                    *ngIf=\"submitted && fval.video.errors\"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n                                    <div *ngIf=\"fval.video.errors.required\">\r\n                                        Video is required\r\n                                    </div>\r\n                                    \r\n                                </div>\r\n                                <input type=\"text\" formControlName=\"videoPath\" class=\"form-control\"   readonly=\"readonly\" [ngClass]=\"{'is-invalid': submitted && fval.title.errors}\" />   \r\n                            </div>\r\n                        </div>\r\n                    \r\n                        <div class=\"col-lg-4 col-sm-4 col-xl-4 col-md-4\">\r\n                            <div class=\"form-group\">\r\n                                <label>Document *</label>\r\n                                <input\r\n                                    type=\"file\"\r\n                                    formControlName=\"document\"\r\n                                    (change)=\"uploadDoc($event)\"\r\n                                    class=\"form-control\"\r\n                                    accept=\".pdf\"\r\n                                    [ngClass]=\"{\r\n                                        'is-invalid':\r\n                                            submitted && fval.document.errors\r\n                                    }\"\r\n                                />\r\n                                <div\r\n                                    *ngIf=\"submitted && fval.document.errors\"\r\n                                    class=\"invalid-feedback\"\r\n                                >\r\n                                    <div *ngIf=\"fval.document.errors.required\">\r\n                                        Document is required\r\n                                    </div>\r\n\r\n                                </div> <input type=\"text\" formControlName=\"DocumentPath\" class=\"form-control\"  readonly=\"readonly\"[ngClass]=\"{'is-invalid':submitted && fval.title.errors}\"/>\r\n                            </div>\r\n                        </div>\r\n                 \r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button\r\n                            type=\"button\"\r\n                            class=\"btn btn-danger pull-right marLt_2Per\"\r\n                            (click)=\"c('Close click')\"\r\n                        >\r\n                            Close\r\n                        </button>\r\n                        <button\r\n                            type=\"submit\"\r\n                            class=\"btn btn-primary pull-right\"\r\n                        >\r\n                            Save\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </ng-template>\r\n    <!-- Add/Edit Modal End -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/videoList/videoList-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/videoList/videoList-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: VideoListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListRoutingModule", function() { return VideoListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _videoList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videoList.component */ "./src/app/layout/videoList/videoList.component.ts");




const routes = [
    {
        path: '',
        component: _videoList_component__WEBPACK_IMPORTED_MODULE_3__["VideoListComponent"]
    }
];
let VideoListRoutingModule = class VideoListRoutingModule {
};
VideoListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VideoListRoutingModule);



/***/ }),

/***/ "./src/app/layout/videoList/videoList.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/videoList/videoList.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prog {\n  background-color: #e9ecef;\n  border-radius: 0.25rem;\n  display: flex;\n  font-size: 1.2rem;\n  height: 2rem;\n  margin-top: 1rem;\n  overflow: hidden;\n}\n\n.prog-bar {\n  align-items: center;\n  background-color: #007bff;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3ZpZGVvTGlzdC9DOlxceGFtcHBcXHBhbmVsX25ld18yanVseVxcUGFuZWxfY29kZV9tYXN0ZXJcXFBocF9Db2RlL3NyY1xcYXBwXFxsYXlvdXRcXHZpZGVvTGlzdFxcdmlkZW9MaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvdmlkZW9MaXN0L3ZpZGVvTGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC92aWRlb0xpc3QvdmlkZW9MaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOjFyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiAgXHJcbi5wcm9nLWJhciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiAgIiwiLnByb2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZy1iYXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/videoList/videoList.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/videoList/videoList.component.ts ***!
  \*********************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
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












let VideoListComponent = class VideoListComponent {
    constructor(apiService, modalService, router, formBuilder, toastr, SpinnerService) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.SpinnerService = SpinnerService;
        this.isDtInitialized = false;
        this.title = "angulardatatables";
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.progress = 0;
        this.submitted = false;
    }
    ngOnInit() {
        sessionStorage.removeItem("videoId");
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 5,
            processing: true,
        };
        this.detailForm = this.formBuilder.group({
            class_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            teacher_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            subject_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            chapter_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            topic_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            thumbnail: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            video: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            thumbnaiPath: [""],
            DocumentPath: [""],
            videoPath: [""],
            video_description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            document: [""],
            document_description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.listGetData();
        this.getClassData();
        this.getTeacherData();
    }
    getTeacherData() {
        this.apiService
            .getData("teacher/list?pageName=video")
            .subscribe((res) => {
            this.teacherData = res["data"];
        });
    }
    getClassData() {
        this.apiService
            .getData("class/list?pageName=video")
            .subscribe((res) => {
            this.classData = res["data"];
        });
    }
    getSubjectData(event) {
        var value;
        if (event && event.target && event.target.value) {
            value = event.target.value;
        }
        else {
            value = event;
        }
        var url = "class/getSubject/" + value + "?pageName=video";
        this.apiService.getData(url).subscribe((res) => {
            this.subjectData = res["data"].subject;
        });
    }
    getChapterData(event) {
        var value;
        if (event && event.target && event.target.value) {
            value = event.target.value;
        }
        else {
            value = event;
        }
        var url = "subject/getChapter/" + value + "?pageName=video";
        this.apiService.getData(url).subscribe((res) => {
            this.chapterData = res["data"].chapter;
        });
    }
    getTopicData(event) {
        var value;
        if (event && event.target && event.target.value) {
            value = event.target.value;
        }
        else {
            value = event;
        }
        var url = "chapter/getTopic/" + value + "?pageName=video";
        this.apiService.getData(url).subscribe((res) => {
            this.topicData = res["data"].topic;
        });
    }
    listGetData() {
        this.SpinnerService.show();
        this.apiService.getData("video/list?pageName=video").subscribe((res) => {
            this.listData = res["data"];
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
        }, (error) => {
            if (error["error"]) {
                this.toastr.error(error.error["message"]);
                this.router.navigate(["/login"]);
            }
        });
    }
    editData(id) {
        this.SpinnerService.show();
        this.editID = id;
        this.apiService
            .getData("video/list/" + this.editID + "?pageName=video")
            .subscribe((res) => {
            this.getSubjectData(res["data"].topic.chapter.subject.class_id);
            this.getChapterData(res["data"].topic.chapter.subject.id);
            this.getTopicData(res["data"].topic.chapter.id);
            this.detailForm.controls["class_id"].setValue(res["data"].topic.chapter.subject.class_id);
            this.detailForm.controls["subject_id"].setValue(res["data"].topic.chapter.subject.id);
            this.detailForm.controls["teacher_id"].setValue(res["data"].teacher_id);
            this.detailForm.controls["chapter_id"].setValue(res["data"].topic.chapter.id);
            this.detailForm.controls["topic_id"].setValue(res["data"].topic_id);
            this.detailForm.controls["type"].setValue(res["data"].type);
            this.detailForm.controls["title"].setValue(res["data"].title);
            this.detailForm.controls["thumbnaiPath"].setValue(res["data"].thumbnail);
            this.detailForm.controls["videoPath"].setValue(res["data"].video_url);
            this.detailForm.controls["DocumentPath"].setValue(res["data"].document_url);
            this.detailForm.controls["video_description"].setValue(res["data"].video_description);
            this.detailForm.controls["document_description"].setValue(res["data"].document_description);
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
            this.apiUrl = "video/add";
        }
        else {
            this.detailForm.value["id"] = this.editID;
            this.apiUrl = "video/edit";
        }
        if (this.formType == "edit" && this.tempThumbnailData == undefined) {
            this.detailForm.value.thumbnail = "";
            this.tempThumbnailData = "";
        }
        if (this.formType == "edit" && this.tempVideoData == undefined) {
            this.detailForm.value.video = "";
            this.tempVideoData = "";
        }
        if (this.formType == "edit" && this.tempDocData == undefined) {
            this.detailForm.value.document = "";
            this.tempDocData = "";
        }
        if (this.tempDocData == undefined) {
            this.detailForm.value.document = "";
            this.tempDocData = "";
        }
        const formData = new FormData();
        formData.append("pageName", "video");
        formData.append("class_id", this.detailForm.value.class_id);
        formData.append("teacher_id", this.detailForm.value.teacher_id);
        formData.append("subject_id", this.detailForm.value.subject_id);
        formData.append("chapter_id", this.detailForm.value.chapter_id);
        formData.append("type", this.detailForm.value.type);
        formData.append("topic_id", this.detailForm.value.topic_id);
        formData.append("title", this.detailForm.value.title);
        formData.append("thumbnail", this.tempThumbnailData);
        formData.append("video", this.tempVideoData);
        formData.append("video_description", this.detailForm.value.video_description);
        formData.append("document", this.tempDocData);
        formData.append("document_description", this.detailForm.value.document_description);
        if (this.formType == "edit") {
            formData.append("id", this.editID);
        }
        this.apiService.savePData(this.apiUrl, formData).subscribe((res) => {
            this.progress = Math.round((100 / res["total"]) * res["loaded"]);
            if (res["status"] == 200) {
                this.SpinnerService.hide();
                this.modalReference.close();
                this.listGetData();
                if (res["body"]) {
                    this.toastr.success(res["body"]["message"]);
                }
            }
        }, (error) => {
            this.SpinnerService.hide();
            if (error["error"]) {
                this.toastr.error(error.error["message"]);
            }
        });
    }
    uploadThumbnail(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.detailForm.value.thumbnail = file;
            this.tempThumbnailData = file;
        }
    }
    uploadVideo(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.detailForm.value.video = file;
            this.tempVideoData = file;
        }
    }
    uploadDoc(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.detailForm.value.document = file;
            this.tempDocData = file;
        }
    }
    deleteData(id, type) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
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
                if (type == "video") {
                    this.apiService
                        .saveData("video/delete?pageName=video", obj)
                        .subscribe((res) => {
                        this.listGetData();
                        this.toastr.success(res["message"]);
                    });
                }
                else if (type == "quiz") {
                    this.apiService
                        .saveData("quiz/delete?pageName=video", obj)
                        .subscribe((res) => {
                        this.listGetData();
                        this.toastr.success(res["message"]);
                    });
                }
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
        Object.keys(this.detailForm.controls).forEach((key) => {
            this.detailForm.get(key).setErrors(null);
        });
        if (type == "edit") {
            this.editData(id);
            this.formType = "edit";
            this.detailForm = this.formBuilder.group({
                class_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                teacher_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                subject_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                chapter_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                topic_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                video: [""],
                thumbnail: [""],
                thumbnaiPath: [""],
                DocumentPath: [""],
                videoPath: [""],
                video_description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                document: [""],
                document_description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        }
        else {
            this.formType = "add";
            this.detailForm = this.formBuilder.group({
                class_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                teacher_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                subject_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                chapter_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                topic_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                video: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                thumbnail: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                videoPath: [""],
                thumbnaiPath: [""],
                DocumentPath: [""],
                video_description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                document: [""],
                document_description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return `with: ${reason}`;
        }
    }
    get fval() {
        return this.detailForm.controls;
    }
    generateQuiz(id) {
        sessionStorage.setItem("videoId", id);
        this.router.navigate(["/assessment"]);
    }
    viewQuiz(id) {
        sessionStorage.setItem("videoId", id);
        this.router.navigate(["/assessmentView"]);
    }
};
VideoListComponent.ctorParameters = () => [
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
], VideoListComponent.prototype, "dtElement", void 0);
VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tables",
        template: __webpack_require__(/*! raw-loader!./videoList.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/videoList/videoList.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()],
        providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]],
        styles: [__webpack_require__(/*! ./videoList.component.scss */ "./src/app/layout/videoList/videoList.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]])
], VideoListComponent);



/***/ }),

/***/ "./src/app/layout/videoList/videoList.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/videoList/videoList.module.ts ***!
  \******************************************************/
/*! exports provided: VideoListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListModule", function() { return VideoListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _videoList_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videoList-routing.module */ "./src/app/layout/videoList/videoList-routing.module.ts");
/* harmony import */ var _videoList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videoList.component */ "./src/app/layout/videoList/videoList.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");











let VideoListModule = class VideoListModule {
};
VideoListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _videoList_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideoListRoutingModule"],
            _shared__WEBPACK_IMPORTED_MODULE_5__["PageHeaderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientJsonpModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"]
        ],
        declarations: [_videoList_component__WEBPACK_IMPORTED_MODULE_4__["VideoListComponent"]]
    })
], VideoListModule);



/***/ })

}]);
//# sourceMappingURL=videoList-videoList-module-es2015.js.map