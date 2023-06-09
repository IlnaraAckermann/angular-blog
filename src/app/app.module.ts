import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/SmallCardComponent';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuTitleComponent,
    HomeComponent,
    ContentComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
