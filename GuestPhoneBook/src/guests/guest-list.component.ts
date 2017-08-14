import { Component,OnInit, Inject } from '@angular/core';
import { Guest, GuestService } from './guest.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    templateUrl:'./src/guests/guest-list.component.html'
})
export class GuestListComponent implements OnInit{
    guests:Guest[];
    
    constructor(@Inject(GuestService) private service:GuestService,@Inject(ActivatedRoute) private route:ActivatedRoute,@Inject(Router) private router:Router){
        
    }
    
    ngOnInit():void{
         this.guests = this.service.getAllGuests();
    }

    viewGuest(guest:Guest):void{
       this.router.navigate(['/guest', guest.id]);
    }
}