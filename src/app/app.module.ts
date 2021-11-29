import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarteComponent } from './carte/carte.component';
import { CartePizzaComponent } from './carte-pizza/carte-pizza.component';
import { CartePatesComponent } from './carte-pates/carte-pates.component';
import { CartePanzerottiComponent } from './carte-panzerotti/carte-panzerotti.component';
import { GoldenBookComponent } from './golden-book/golden-book.component';
import { ContactComponent } from './contact/contact.component';
import { CarteSuggestionsComponent } from './carte-suggestions/carte-suggestions.component';
import { CarteMenuComponent } from './carte-menu/carte-menu.component';
import { DessertsComponent } from './desserts/desserts.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarteComponent,
    CartePizzaComponent,
    CartePatesComponent,
    CartePanzerottiComponent,
    GoldenBookComponent,
    ContactComponent,
    CarteSuggestionsComponent,
    CarteMenuComponent,
    DessertsComponent,
    BoissonsComponent,
    NotFoundComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
