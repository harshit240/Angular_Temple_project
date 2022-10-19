import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PoojaFestivalComponent } from './pooja-festival/pooja-festival.component';
import { PoojaGeetaComponent } from './pooja-geeta/pooja-geeta.component';
import { PoojaReligionComponent } from './pooja-religion/pooja-religion.component';
import { PoojaTempleComponent } from './pooja-temple/pooja-temple.component';
import { PoojaVedasComponent } from './pooja-vedas/pooja-vedas.component';
import { PoojaComponent } from './pooja/pooja.component';
import { ShivjiComponent } from './shivji/shivji.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'all',
    component:PoojaComponent
  },
  {
    path:'festival',
    component:PoojaFestivalComponent
  },
  {
    path:'geeta',
    component:PoojaGeetaComponent
  },
  {
    path:'religion',
    component:PoojaReligionComponent
  },
  {
    path:'temple',
    component:PoojaTempleComponent
  },
  {
    path:'vedas',
    component:PoojaVedasComponent
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
