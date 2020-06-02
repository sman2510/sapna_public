import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})


export class LoginComponent implements OnInit {
    uEmail:any;
    uPass:any;
    public baseUrl:any;

    constructor(
        public router: Router,
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private toastr: ToastrService
    ){ }

    ngOnInit() {
        sessionStorage.removeItem('isLoggedin');
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('name');
        // this.baseUrl = 'http://ec2-13-232-236-23.ap-south-1.compute.amazonaws.com/api/';
        this.baseUrl = 'http://api.mrbhartiya.com/api/';
        // this.baseUrl = 'http://hallmarktourism.com/api/public/api/';
        sessionStorage.setItem('baseUrl', this.baseUrl);
    }

    onLoggedin() {
        var apiUrl = 'user/login';
        var obj = {
            "email" : this.uEmail,
            "password" : this.uPass,
        }
        let headers = new HttpHeaders({
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods" : "POST",
            "Access-Control-Allow-Headers" : "Content-Type, Accept",
            "client-key" : "5A8BCCE6BE3EB88187E1C65351C5A",
            "secret-key" : "89D57674427A6B8295559BED753CF",
        });
        let options = { headers: headers };
        this.http.post(this.baseUrl+apiUrl, obj, options).subscribe(
            res => {
                if(res['status']){
                    sessionStorage.setItem('isLoggedin', 'true');
                    sessionStorage.setItem('authToken', res['data']['access_token']);
                    sessionStorage.setItem('role', res['data']['role']);
                    sessionStorage.setItem('name', res['data']['name']);

                    if(res['data']['role'] == 'VD'){
                        this.router.navigate(['/vendorDashboard']);
                    }else{
                        this.router.navigate(['/dashboard']);
                    }
                }else{

                }
            },
            error => {
                this.toastr.error(error.error['message']);
            },
        );  
    }

    onReset(){
        this.uEmail = "";
        this.uPass = "";
    }
      
}
