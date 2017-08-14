import { Component,OnInit, Inject } from '@angular/core';
import { Guest, GuestService } from './guest.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    templateUrl:'./src/guests/guest-detail.component.html'
})
export class GuestDetailComponent implements OnInit{
    guest:Guest;
    private id:number;
    constructor(@Inject(GuestService) private service:GuestService,@Inject(ActivatedRoute) private route:ActivatedRoute,@Inject(Router) private router:Router){
         this.id = parseInt(this.route.snapshot.params['id']);
   }
    
    ngOnInit():void{
        this.guest = this.service.getGuestById(this.id);
         
    }

    navigateHome():void{
         this.router.navigate(['/guests']);
    }
}