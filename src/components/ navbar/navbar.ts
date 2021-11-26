import { Component } from '@angular/core';
import { Router } from '@angular/router';


const ELEMENT_DATA: any[] = [
    { id: 1, name: 'category 1', image: '1.png' }
];

@Component({
    selector: 'navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
    constructor (private router: Router) {}

    goTo(route: string) {
        this.router.navigateByUrl(route);
    }

    logout() {
        localStorage.setItem("token", "");
        this.router.navigateByUrl("/");
    }
}


