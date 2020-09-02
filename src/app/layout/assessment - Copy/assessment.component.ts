import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../../router.animations";
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { ApiService } from "../service/api.service";
import { NgxSpinnerService } from "ngx-spinner";
import Swal from "sweetalert2";

@Component({
    selector: "app-tables",
    templateUrl: "./assessment.component.html",
    styleUrls: ["./assessment.component.scss"],
    animations: [routerTransition()],
    providers: [ApiService],
})
export class AssessmentComponent implements OnInit {
    public videoId: any;

    quizTitle: any;
    quizMinutes: any;
    dynamicArray: Array<any> = [];
    newDynamic: any = {};

    constructor(
        private apiService: ApiService,
        public router: Router,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private SpinnerService: NgxSpinnerService
    ) {}

    ngOnInit() {
        this.videoId = sessionStorage.getItem("videoId");
        if (this.videoId) {
            this.getData();
        } else {
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
            .subscribe(
                (res) => {
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
                },
                (error) => {
                    if (error["error"]) {
                        this.toastr.error(error.error["message"]);
                        this.router.navigate(["/login"]);
                    }
                }
            );
    }

    uploadFile(event, id: any) {
        console.log(this.dynamicArray[id]);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            //this.tempFileData = file;
            //this.detailForm.value.image = file;
            let reader: FileReader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e: Event) => {
                // called once readAsDataURL is completed
                this.dynamicArray[id].q_image = reader.result;
            };
        }
        console.log(this.dynamicArray[id]);
    }

    uploadFileA(event, id: any) {
        console.log(this.dynamicArray[id]);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            //this.tempFileData = file;
            //this.detailForm.value.image = file;
            let reader: FileReader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e: Event) => {
                // called once readAsDataURL is completed
                this.dynamicArray[id].a_image = reader.result;
            };
        }
        console.log(this.dynamicArray[id]);
    }

    uploadFileB(event, id: any) {
        console.log(this.dynamicArray[id]);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            //this.tempFileData = file;
            //this.detailForm.value.image = file;
            let reader: FileReader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e: Event) => {
                // called once readAsDataURL is completed
                this.dynamicArray[id].b_image = reader.result;
            };
        }
        console.log(this.dynamicArray[id]);
    }

    uploadFileC(event, id: any) {
        console.log(this.dynamicArray[id]);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            //this.tempFileData = file;
            //this.detailForm.value.image = file;
            let reader: FileReader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e: Event) => {
                // called once readAsDataURL is completed
                this.dynamicArray[id].c_image = reader.result;
            };
        }
        console.log(this.dynamicArray[id]);
    }

    uploadFileD(event, id: any) {
        console.log(this.dynamicArray[id]);
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            //this.tempFileData = file;
            //this.detailForm.value.image = file;
            let reader: FileReader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e: Event) => {
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
            if (
                d.question == null ||
                d.question == "" ||
                d.question == undefined
            ) {
                this.toastr.error("Question is required");
                flag = true;
            } else if (d.a == null || d.a == "" || d.a == undefined) {
                this.toastr.error("Option A is required");
                flag = true;
            } else if (d.b == null || d.b == "" || d.b == undefined) {
                this.toastr.error("Option B is required");
                flag = true;
            } else if (d.c == null || d.c == "" || d.c == undefined) {
                this.toastr.error("Option C is required");
                flag = true;
            } else if (d.d == null || d.d == "" || d.d == undefined) {
                this.toastr.error("Option D is required");
                flag = true;
            } else if (d.ans == null || d.ans == "" || d.ans == undefined) {
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
                } else {
                    this.toastr.error(res["message"]);
                }
            });
    }

    backUrl() {
        this.router.navigate(["/videoList"]);
    }

    addRow(index: any) {
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

    deleteRow(index: any, id: any) {
        if (this.dynamicArray.length == 1) {
            return false;
        } else {
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
}
