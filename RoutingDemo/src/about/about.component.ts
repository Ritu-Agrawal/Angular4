import { Component,Injectable,Inject } from '@angular/core';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
    template:`<h1>About us </h1>
    <span>Route Paramater value : {{id}} </span>
    <hr/>
    <button type="button" class="btn btn-primary" (click)='navigateToHome()'>Go to Home</button>`
})


@Injectable()
export class AboutComponent {
    private id:number;
    constructor(@Inject(ActivatedRoute) private route:ActivatedRoute,@Inject(Router) private router:Router){
          this.id = parseInt(this.route.snapshot.params['id']);
    }
    navigateToHome():void{
        this.router.navigate(['/home']);
    }
}
