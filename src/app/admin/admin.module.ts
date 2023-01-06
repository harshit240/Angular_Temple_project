import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { CareersComponent } from './pages/careers/careers.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ItStaffingComponent } from './pages/it-staffing/it-staffing.component';
import { ServiceComponent } from './pages/service/service.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { NotFound404Component } from './includes/not-found404/not-found404.component';
import { GetInTouchComponent } from './includes/get-in-touch/get-in-touch.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { Pipe1Pipe } from './pipes/pipe1.pipe';
import  { Injector} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CarouselComponent } from './includes/carousel/carousel.component';
import { FlipCardsComponent } from './includes/flip-cards/flip-cards.component';
import { ChooseUsComponent } from './includes/choose-us/choose-us.component';
import { AccordionComponent } from './includes/accordion/accordion.component';
import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';
@NgModule({
  declarations: [
    AboutComponent,
    CareersComponent,
    BlogComponent,
    ContactComponent,
    ItStaffingComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    NotFound404Component,
    GetInTouchComponent,
    HomeComponent,
    Pipe1Pipe,
    CarouselComponent,
    FlipCardsComponent,
    ChooseUsComponent,
    AccordionComponent,
    NextDirective,
    PrevDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule
  ],
})
export class AdminModule { 
  constructor(){
    
  }
}
