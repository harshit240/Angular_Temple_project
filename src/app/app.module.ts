import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ShivjiComponent } from './shivji/shivji.component';
import { Sec1Component } from './sec1/sec1.component';
import { Sec2Component } from './sec2/sec2.component';
import { Sec3Component } from './sec3/sec3.component';
import { AdminModule } from './admin/admin.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { PoojaComponent } from './pooja/pooja.component';
import { PoojaFestivalComponent } from './pooja-festival/pooja-festival.component';
import { PoojaGeetaComponent } from './pooja-geeta/pooja-geeta.component';
import { PoojaReligionComponent } from './pooja-religion/pooja-religion.component';
import { PoojaTempleComponent } from './pooja-temple/pooja-temple.component';
import { PoojaVedasComponent } from './pooja-vedas/pooja-vedas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    ShivjiComponent,
    Sec1Component,
    Sec2Component,
    Sec3Component,
    PagenotfoundComponent,
    TestimonialComponent,
    PoojaComponent,
    PoojaFestivalComponent,
    PoojaGeetaComponent,
    PoojaReligionComponent,
    PoojaTempleComponent,
    PoojaVedasComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
