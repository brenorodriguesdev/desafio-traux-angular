import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticationGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(): boolean {
        const token = localStorage.getItem("token")
        if (token) {
            this.router.navigateByUrl("/product");
            return false
        }
        return true
    }
  }