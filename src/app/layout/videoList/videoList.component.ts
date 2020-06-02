import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, FormArray, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ApiService } from "../service/api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { DataTableDirective } from 'angular-datatables';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-tables',
    templateUrl: './videoList.component.html',
    styleUrls: ['./videoList.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class VideoListComponent implements OnInit {    
    @ViewChild(DataTableDirective, {static: false})
    dtElement: DataTableDirective;
    isDtInitialized:boolean = false;
    title = 'angulardatatables';
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    public apiUrl : any;
    public listData : any;
    public classData : any;
    public teacherData : any;
    public subjectData : any;
    public chapterData : any;
    public topicData : any;
    public editID : any;
    public modalReference : any;
    public formType : string;
    public tempThumbnailData : any;
    public tempVideoData : any;
    public tempDocData : any;
    public progress: number = 0;
    closeResult : string;    
    detailForm : FormGroup;
    submitted = false;

    constructor(
        private apiService: ApiService,
        private modalService: NgbModal,
        public router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) { }

    ngOnInit() {
        sessionStorage.removeItem('videoId');
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true
        };
        this.detailForm = this.formBuilder.group({
            class_id: ["", Validators.required],
            teacher_id: ["", Validators.required],
            subject_id: ["", Validators.required],
            chapter_id: ["", Validators.required],
            type: ["", Validators.required],
            topic_id: ["", Validators.required],
            title: ["", Validators.required],
            thumbnail: ["", Validators.required],
            video: ["", Validators.required],
            video_description: ["", Validators.required],
            document: [""],
            document_description: ["", Validators.required],
        });
        this.listGetData();
        this.getClassData();
        this.getTeacherData();
    }    


    getTeacherData(){
        this.apiService.getData('teacher/list?pageName=video').subscribe(res => {
            this.teacherData = res['data'];
        });    
    }


    getClassData(){
        this.apiService.getData('class/list?pageName=video').subscribe(res => {
            this.classData = res['data'];
        });    
    }


    getSubjectData(event){
        var value;
        if(event && event.target && event.target.value){
            value = event.target.value;
        }else{
            value = event;
        }
        var url = 'class/getSubject/' + value + '?pageName=video';
        this.apiService.getData(url).subscribe(res => {
            this.subjectData = res['data'].subject;
        });    
    }


    getChapterData(event){
        var value;
        if(event && event.target && event.target.value){
            value = event.target.value;
        }else{
            value = event;
        }
        var url = 'subject/getChapter/' + value + '?pageName=video';
        this.apiService.getData(url).subscribe(res => {
            this.chapterData = res['data'].chapter;
        });
    }


    getTopicData(event){
        var value;
        if(event && event.target && event.target.value){
            value = event.target.value;
        }else{
            value = event;
        }
        var url = 'chapter/getTopic/' + value + '?pageName=video';
        this.apiService.getData(url).subscribe(res => {
            this.topicData = res['data'].topic;
        });
    }


    listGetData(){
        this.SpinnerService.show();
        this.apiService.getData('video/list?pageName=video').subscribe(res => {
            this.listData = res['data'];
            if (this.isDtInitialized) {
                this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
                    dtInstance.destroy();
                    this.dtTrigger.next();
                });
            } else {
                this.isDtInitialized = true;
                this.dtTrigger.next();
            }
            this.SpinnerService.hide();
        },
        error => {
            if(error['error']){
                this.toastr.error(error.error['message']);
                this.router.navigate(['/login']);
            }
        });
    }


    editData(id:any){
        this.SpinnerService.show();
        this.editID = id;
        this.apiService.getData('video/list/'+this.editID+'?pageName=video').subscribe(res => {
            this.getSubjectData(res['data'].topic.chapter.subject.class_id);
            this.getChapterData(res['data'].topic.chapter.subject.id);
            this.getTopicData(res['data'].topic.chapter.id);
            this.detailForm.controls['class_id'].setValue(res['data'].topic.chapter.subject.class_id);
            this.detailForm.controls['subject_id'].setValue(res['data'].topic.chapter.subject.id);
            this.detailForm.controls['teacher_id'].setValue(res['data'].teacher_id);
            this.detailForm.controls['chapter_id'].setValue(res['data'].topic.chapter.id);
            this.detailForm.controls['topic_id'].setValue(res['data'].topic_id);
            this.detailForm.controls['type'].setValue(res['data'].type);
            this.detailForm.controls['title'].setValue(res['data'].title);
            this.detailForm.controls['video_description'].setValue(res['data'].video_description);
            this.detailForm.controls['document_description'].setValue(res['data'].document_description);
            this.SpinnerService.hide();
        });    
    }


    saveDetail(){
        this.submitted = true;
        if (this.detailForm.invalid) {
            return;
        }
        this.SpinnerService.show();
        if(this.formType == 'add'){
            this.apiUrl = 'video/add';
        }else{
            this.detailForm.value['id'] = this.editID;
            this.apiUrl = 'video/edit';
        }
        if(this.formType == 'edit' && this.tempThumbnailData == undefined){
            this.detailForm.value.thumbnail = '';
            this.tempThumbnailData = '';
        }
        if(this.formType == 'edit' && this.tempVideoData == undefined){
            this.detailForm.value.video = '';
            this.tempVideoData = '';
        }
        if(this.formType == 'edit' && this.tempDocData == undefined){
            this.detailForm.value.document = '';
            this.tempDocData = '';
        }
        if(this.tempDocData == undefined){
            this.detailForm.value.document = '';
            this.tempDocData = '';
        }
        const formData = new FormData();
        formData.append('pageName', 'video');
        formData.append('class_id', this.detailForm.value.class_id);
        formData.append('teacher_id', this.detailForm.value.teacher_id);
        formData.append('subject_id', this.detailForm.value.subject_id);
        formData.append('chapter_id', this.detailForm.value.chapter_id);
        formData.append('type', this.detailForm.value.type);
        formData.append('topic_id', this.detailForm.value.topic_id);
        formData.append('title', this.detailForm.value.title);
        formData.append('thumbnail', this.tempThumbnailData);        
        formData.append('video', this.tempVideoData);
        formData.append('video_description', this.detailForm.value.video_description);
        formData.append('document', this.tempDocData);
        formData.append('document_description', this.detailForm.value.document_description);
        if(this.formType == 'edit'){
            formData.append('id', this.editID);
        }
        this.apiService.savePData(this.apiUrl, formData).subscribe(res => {
            this.progress = Math.round((100 / res['total']) * res['loaded']);            
            if(res['status'] == 200){
                this.SpinnerService.hide();
                this.modalReference.close();
                this.listGetData();
                if(res['body']){
                    this.toastr.success(res['body']['message']);
                }
            }
        },
        error => {
            this.SpinnerService.hide();
            if(error['error']){
                this.toastr.error(error.error['message']);
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


    deleteData(id:any,type:any){
        Swal.fire({
            title: 'Are you sure?',
            text: "You wan't to delete ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                var obj = {
                    "id" : id
                }
                if(type == 'video'){
                    this.apiService.saveData('video/delete?pageName=video', obj).subscribe(res => {
                        this.listGetData();
                        this.toastr.success(res['message']);
                    });    
                }else if(type == 'quiz'){
                    this.apiService.saveData('quiz/delete?pageName=video', obj).subscribe(res => {
                        this.listGetData();
                        this.toastr.success(res['message']);
                    });    
                }
            } else if (result.dismiss === Swal.DismissReason.cancel) {

            }
        })
    }    


    open(content:any, type:any, id:any) {
        this.submitted = false;
        this.detailForm.markAsPristine();
        this.detailForm.markAsUntouched();
        this.detailForm.updateValueAndValidity();
        this.detailForm.reset();
        this.detailForm.clearValidators();
        Object.keys(this.detailForm.controls).forEach(key => {
            this.detailForm.get(key).setErrors(null) ;
        });
        
        if(type == 'edit'){
            this.editData(id);
            this.formType = 'edit';
            this.detailForm = this.formBuilder.group({
                class_id: ["", Validators.required],
                teacher_id: ["", Validators.required],
                subject_id: ["", Validators.required],
                chapter_id: ["", Validators.required],
                type: ["", Validators.required],
                topic_id: ["", Validators.required],
                title: ["", Validators.required],
                video: [""],
                thumbnail: [""],
                video_description: ["", Validators.required],
                document: [""],
                document_description: ["", Validators.required],
            });
        }else{
            this.formType = 'add';
            this.detailForm = this.formBuilder.group({
                class_id: ["", Validators.required],
                teacher_id: ["", Validators.required],
                subject_id: ["", Validators.required],
                chapter_id: ["", Validators.required],
                type: ["", Validators.required],
                topic_id: ["", Validators.required],
                title: ["", Validators.required],
                video: ["", Validators.required],
                thumbnail: ["", Validators.required],
                video_description: ["", Validators.required],
                document: [""],
                document_description: ["", Validators.required],
            });
        }

        this.modalReference = this.modalService.open(content);
        this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }


    getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }


    get fval() {
        return this.detailForm.controls; 
    }


    generateQuiz(id:any){
        sessionStorage.setItem('videoId', id);
        this.router.navigate(['/assessment']);
    }


    viewQuiz(id:any){
        sessionStorage.setItem('videoId', id);
        this.router.navigate(['/assessmentView']);
    }


}

