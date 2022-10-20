import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './slider/slider.component';
import { TableComponent } from './table/table.component';
import { DonateComponent } from './donate/donate.component';
import { VolunteersAchievementComponent } from './volunteers-achievement/volunteers-achievement.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HelpComponent } from './help/help.component';
import { PoojasComponent } from './poojas/poojas.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    SliderComponent,
    TableComponent,
    DonateComponent,
    VolunteersAchievementComponent,
    TestimonialComponent,
    HelpComponent,
    PoojasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[DashboardComponent,
  SidebarComponent]
})
export class AdminModule { }
