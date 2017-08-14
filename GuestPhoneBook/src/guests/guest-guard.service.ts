import { Injectable,Inject } from '@angular/core';
import { Router,ActivatedRouteSnapshot,CanActivate } from '@angular/router';

export class GuestGuard implements CanActivate{
    constructor(@Inject(Router) private router:Router){}
    canActivate(route: ActivatedRouteSnapshot):boolean{
        let id = +route.url[1].path;
        if(isNaN(id) || id < 1){
            console.log("Invalid Route Param");
           this.router.navigate(['/guests']);
           return false;
        }
        return true;
    }
}