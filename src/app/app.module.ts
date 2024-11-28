import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    SearchBarComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
