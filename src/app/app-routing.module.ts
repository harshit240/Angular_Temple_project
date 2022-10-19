import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShivjiComponent } from './shivji/shivji.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'shivji',
    component:ShivjiComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
