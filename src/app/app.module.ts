import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SearchComponent } from './search/search.component';
// import { HomeComponent } from './home/home.component';
// import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    // SearchComponent,
    // HomeComponent,
    // DetailComponent
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
