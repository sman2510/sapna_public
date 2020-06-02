import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { ApiResponse } from "../model/api.response";
import { User } from "../model/user.model";

@Injectable()
export class ApiService {
	constructor(private http: HttpClient){}

	baseUrl: string = sessionStorage.getItem('baseUrl');
	authToken: string = sessionStorage.getItem('authToken');
	headers = new HttpHeaders({
		"Accept": "application/json",
		// "Access-Control-Allow-Origin": "*",
		// "Access-Control-Allow-Methods" : "POST",
		// "Access-Control-Allow-Headers" : "Content-Type, Accept",
		// "Content-Type" : "application/json",
		"Authorization" : 'Bearer ' + this.authToken,
		"client-key" : "5A8BCCE6BE3EB88187E1C65351C5A",
		"secret-key" : "89D57674427A6B8295559BED753CF",
	});
	options = { headers: this.headers };
	pOptions = { 
		headers: this.headers,
		responseType: "blob", 
		reportProgress: true, 
		observe: "events",
	};

	getData(url:any) : Observable<ApiResponse> {
		return this.http.get<ApiResponse>(this.baseUrl+url, this.options);
	}

	saveData(url:any,obj:User) : Observable<ApiResponse> {
		return this.http.post<ApiResponse>(this.baseUrl+url, obj, this.options);
	}

	savePData(url:any,obj:User): Observable<HttpEvent<any>>{
		return this.http.post(this.baseUrl+url , obj, {
				reportProgress: true, 
				observe: "events", 
				headers: this.headers
			}
		);
	}

	// savePData(url:any,obj:User): Observable<HttpEvent<any>>{
	// 	return this.http.post(this.baseUrl+url , obj, {
	// 			responseType: "blob", 
	// 			reportProgress: true, 
	// 			observe: "events", 
	// 			headers: this.headers
	// 		}
	// 	);
	// }

}

