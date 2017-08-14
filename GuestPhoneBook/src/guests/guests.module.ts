import { NgModule }      from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { GuestListComponent }  from './guest-list.component';
import { GuestDetailComponent }  from './guest-detail.component';
import { GuestRoutingModule }  from './guests-routing.module';
import { GuestService } from './guest.service';
import { GuestGuard } from './guest-guard.service';

@NgModule({
  imports:      [ CommonModule,FormsModule, GuestRoutingModule ],
  declarations: [ GuestListComponent, GuestDetailComponent ],
  providers : [ GuestService, GuestGuard ]
})
export class GuestsModule {}