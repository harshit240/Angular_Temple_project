import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonateComponent } from './donate/donate.component';
import { HelpComponent } from './help/help.component';
import { PoojasComponent } from './poojas/poojas.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './slider/slider.component';
import { TableComponent } from './table/table.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { VolunteersAchievementComponent } from './volunteers-achievement/volunteers-achievement.component';

const routes: Routes = [
  {
    path:"admin-dashboard",
    component:DashboardComponent
  },
  {
    path:"admin-sidebar",
    component:SidebarComponent
  },
  {
    path:"admin-table",
    component:TableComponent

  },
  {
    path:"admin-slider",
    component:SliderComponent

  },
  {
    path:"admin-donate",
    component:DonateComponent
  },
  {
    path:"admin-achievement",
    component:VolunteersAchievementComponent
  },
  {
    path:"admin-testimonial",
    component:TestimonialComponent
  },
  {
    path:"admin-pooja",
    component:PoojasComponent
  },
  {
    path:"admin-help",
    component:HelpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
