import { Component, OnInit } from '@angular/core';
import { Pizza } from '../shared/models/pizza.model';

@Component({
  selector: 'app-carte-pizza',
  templateUrl: './carte-pizza.component.html',
  styleUrls: ['./carte-pizza.component.css']
})
export class CartePizzaComponent implements OnInit {

  pizzas: Pizza[];

  constructor() {
    this.pizzas = [
      new Pizza("Professeur","Pizza de la semaine",13),
      new Pizza("Tokyo","Crème,Saumon,Mozza,Saumon frais et fumé",11.9),
      new Pizza("Nairobi","Tomate,Mozza,Chèvre,Miel,Noix",10),
      new Pizza("Lisbonne","Tomate,Mozza,Jambon cru,Buratta crémeuse,Tomates cerises,Roquette,Balsamique",12.9),
      new Pizza("Stockholm","Tomate,Mozza,Légumes confits,Pesto",11.5),
      new Pizza("Cincinnati","Tomate,Mozza",8),
      new Pizza("Sofia","Tomate,Mozza,Jambon blanc",9),
      new Pizza("Marseille","Crème,Mozza,Lard,Oignons confits,Œuf",10.5),
      new Pizza("Bogota","Tomate,Mozza,Poulet Tika,Oignon Rouge,Sauce Barbecue",11.9),
      new Pizza("Berlin","Crème,Aubergine,Mozza,Miel,Noix",10.5),
      new Pizza("Palerme","Tomate,Mozza,Jambon cru",10),
      new Pizza("Amsterdam","Tomate,Mozza,Jambon blanc,CBD",12.9),
      new Pizza("Oslo","Crème,Mozza,Chèvre,Gorgonzola,Taleggio",11.5),
      new Pizza("Helsinki","Crème,Jambon blanc,Jambon cru,Lard,mortadelle",12.90),
      new Pizza("Moscou","Tomate,Mozza,Mortadelle,taleggio",10),
      new Pizza("Rio","Tomate,Oignon frits,Cheddar,Viande hachée,Sauce burger,Mozza",12),
      new Pizza("Denver","Tomate Mozza,Chorizo,Poivrons,Oignon Rouge",10.9),
      new Pizza("Manille","Tomate,Mozza,Champignons,Œuf",10),
      new Pizza("Bastia","Tomate,Mozza,Ravioles",11.5),
      new Pizza("Milan","Tomate,Mozza,Anchois,Câpres",10),

    ]
   }

  ngOnInit(): void {
  }

}
