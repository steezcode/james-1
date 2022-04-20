import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomescreenComponent } from './pages/homescreen/homescreen.component';
import { HeaderComponent } from './shared/header/header.component';
import { SecondpageComponent } from './pages/secondpage/secondpage.component';

@NgModule({
  declarations: [AppComponent, HomescreenComponent, HeaderComponent, SecondpageComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
