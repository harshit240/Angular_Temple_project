import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/pages/about/about.component';
import { TableAndCardsComponent } from './table-and-cards/table-and-cards.component';

const routes: Routes = [
  
  {
    path:'',
    loadChildren:()=>
    import("./admin/admin.module").then(m=>m.AdminModule)
  },
  {
    path:'tableandcards',
    component:TableAndCardsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
