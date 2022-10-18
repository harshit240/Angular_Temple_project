import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FestivalsComponent } from './sec4/festivals/festivals.component';
import { GeetaComponent } from './sec4/geeta/geeta.component';
import { TempleComponent } from './sec4/temple/temple.component';
import { VedasComponent } from './sec4/vedas/vedas.component';
import { ShivjiComponent } from './shivji/shivji.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'festivals',
    component:FestivalsComponent
  },
  {
    path:'shivji',
    component:ShivjiComponent
  },
  {
    path:'vedas',
    component:VedasComponent
  },
  {
    path:'temple',
    component:TempleComponent
  },
  {
    path:'geeta',
    component:GeetaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
