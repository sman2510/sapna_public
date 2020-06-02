import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ApiService } from "../service/api.service";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';

@Component({
    selector: 'app-tables',
    templateUrl: './assessmentView.component.html',
    styleUrls: ['./assessmentView.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class AssessmentViewComponent implements OnInit {
    public listData : Array<any> = [];
    public videoId : any;

    constructor(
        private apiService: ApiService,
        private modalService: NgbModal,
        public router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) { }


    ngOnInit() {
        this.videoId = sessionStorage.getItem('videoId');
        if(this.videoId){
            this.listGetData();
        }else{
            this.router.navigate(['/videoList']);
        }
    }


    listGetData(){
        this.SpinnerService.show();
        this.apiService.getData('video/list/'+this.videoId+'?pageName=video').subscribe(res => {
            if(res['data'] && res['data']['quiz']){
                this.listData.push(res['data']['quiz']);
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

    
    backUrl(){
        this.router.navigate(['/videoList']);
    }


}

