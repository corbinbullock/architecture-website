import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { NewuserpageComponent } from './newuserpage/newuserpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ProfilepageComponent,
    NewuserpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
