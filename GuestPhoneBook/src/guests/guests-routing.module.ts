import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuestListComponent } from './guest-list.component';
import { GuestDetailComponent } from './guest-detail.component';
import { GuestGuard } from './guest-guard.service';
 
const guestsRoutes: Routes = [
  {
    path: 'guests',
    component:GuestListComponent
  },
  { 
    path: 'guest/:id', 
    canActivate:[ GuestGuard ],
    component: GuestDetailComponent 
  }
];
@NgModule({
    imports:[ RouterModule.forChild(guestsRoutes)] ,
    exports:[ RouterModule ]
})
export class GuestRoutingModule {}