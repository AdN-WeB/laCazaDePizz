import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoissonsComponent } from './boissons/boissons.component';
import { CarteMenuComponent } from './carte-menu/carte-menu.component';
import { CartePanzerottiComponent } from './carte-panzerotti/carte-panzerotti.component';
import { CartePatesComponent } from './carte-pates/carte-pates.component';
import { CartePizzaComponent } from './carte-pizza/carte-pizza.component';
import { CarteSuggestionsComponent } from './carte-suggestions/carte-suggestions.component';
import { CarteComponent } from './carte/carte.component';
import { ContactComponent } from './contact/contact.component';
import { DessertsComponent } from './desserts/desserts.component';
import { GoldenBookComponent } from './golden-book/golden-book.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  {path: '',
  component: HomeComponent},
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'la-carte',
    component: CarteComponent 
  },
  {
    path:"le-livre",
    component: GoldenBookComponent 
  },
  {
    path:'contact',
    component: ContactComponent 
  },
  {
    path:'pizzas',
    component: CartePizzaComponent
  },
  {
    path:'desserts',
    component: DessertsComponent
  },
  {
    path:'boissons',
    component: BoissonsComponent
  },
  {
    path:'pates',
    component: CartePatesComponent 
  },
  {
    path:'panzerotti',
    component: CartePanzerottiComponent
  },
  {
    path:'suggestions',
    component: CarteSuggestionsComponent
  },
  {
    path:'menu',
    component: CarteMenuComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
