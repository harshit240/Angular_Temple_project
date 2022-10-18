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
import { Sec4Component } from './sec4/sec4.component';
import { FestivalsComponent } from './sec4/festivals/festivals.component';
import { GeetaComponent } from './sec4/geeta/geeta.component';
import { ReligionComponent } from './sec4/religion/religion.component';
import { TempleComponent } from './sec4/temple/temple.component';
import { VedasComponent } from './sec4/vedas/vedas.component';

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
    Sec4Component,
    FestivalsComponent,
    GeetaComponent,
    ReligionComponent,
    TempleComponent,
    VedasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[FestivalsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
