import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    public pushRightClass: string;

    displaySuperAdmin: boolean;
    displayAdmin: boolean;
    public headerText: string;
    public displayName = sessionStorage.getItem('name');

    constructor(private translate: TranslateService, public router: Router) {
        this.router.events.subscribe(val => {
            if(val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()){
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        var roleType = sessionStorage.getItem('role');
        if(roleType == 'SA'){
            this.headerText = 'Mr. Bhartiya - Admin Panel';
            this.displaySuperAdmin = true;
            this.displayAdmin = true;
        }else if(roleType == 'AD'){
            this.headerText = 'Mr. Bhartiya - Admin Panel';
            this.displaySuperAdmin = false;
            this.displayAdmin = true;
        }else if(roleType == 'VD'){
            this.headerText = 'Dashboard';
            this.displaySuperAdmin = false;
            this.displayAdmin = false;
        }
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        sessionStorage.removeItem('isLoggedin');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
