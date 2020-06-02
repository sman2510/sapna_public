import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from "../service/api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    providers: [ApiService],
})

export class DashboardComponent implements OnInit {
    public apiUrl : any;
    public listData : Array<any> = [];

    constructor(
        public router: Router,
        private apiService: ApiService,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) { }


    ngOnInit() {
        this.listGetData();
    }


    listGetData(){
        this.SpinnerService.show();
        this.apiService.getData('dashboard?pageName=dashboard').subscribe(res => {
            var tempData = [];
            Object.keys(res['data']).forEach(function(d) {
                var obj = {};
                var vidCount = 0;
                obj['value'] = res['data'][d];
                if(d == 'student'){
                    obj['key'] = 'Students';
                    obj['style'] = 'bg-primary';
                    obj['icon'] = 'fa fa-user-circle';
                }else if(d == 'subscription'){
                    obj['key'] = 'Subscriptions';
                    obj['style'] = 'bg-warning';
                    obj['icon'] = 'fa fa-money';
                }else if(d == 'teacher'){
                    obj['key'] = 'Teachers';
                    obj['style'] = 'bg-success';
                    obj['icon'] = 'fa fa-user';
                }else if(d == 'user_class'){
                    obj['key'] = 'Classes';
                    obj['style'] = 'bg-primary';
                    obj['icon'] = 'fa fa-graduation-cap';
                }else if(d == 'video'){
                    obj['key'] = 'Videos';
                    obj['style'] = 'bg-warning';
                    obj['icon'] = 'fa fa-video-camera';
                    vidCount = res['data'][d];
                }else if(d == 'vendor'){
                    obj['key'] = 'Vendors';
                    obj['style'] = 'bg-warning';
                    obj['icon'] = 'fa fa-user-plus';
                    vidCount = res['data'][d];
                }

                tempData.push(obj);
                if(d == 'video'){
                    var doc = {};
                    doc['key'] = 'Documents';
                    doc['style'] = 'bg-success';
                    doc['icon'] = 'fa fa-file-text-o';
                    doc['value'] = res['data'][d];
                    tempData.push(doc);

                    var quiz = {};
                    quiz['key'] = 'Assessment';
                    quiz['style'] = 'bg-primary';
                    quiz['icon'] = 'fa fa-pencil-square-o';
                    quiz['value'] = res['data'][d];
                    tempData.push(quiz);
                }
            });
            this.listData = tempData;
            this.SpinnerService.hide();
        },
        error => {
            if(error['error']){
                this.toastr.error(error.error['message']);
                this.router.navigate(['/login']);
            }
        });
    }


}
