import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FruitCenterComponent } from './fruit-center/fruit-center.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FruitCenterComponent,
    FruitListComponent,
    FruitDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
