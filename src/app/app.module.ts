import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableAndCardsComponent } from './table-and-cards/table-and-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    TableAndCardsComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
