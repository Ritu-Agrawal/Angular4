import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { NotFoundComponent } from './not-found.component';

 
  const appRoutes: Routes = [
    {
      path: '',
     redirectTo: '/guests' ,
     pathMatch:'full'
    },
    { 
      path: 'about',  
      component: AboutComponent 
    },
    { 
      path: 'contact',  
      component: ContactComponent 
    },
    {
      path: '404', 
      component: NotFoundComponent
    }
  ];
@NgModule({
    imports:[ RouterModule.forRoot(appRoutes,{ useHash: true })] ,
    exports:[ RouterModule ]
})
export class AppRoutingModule {}