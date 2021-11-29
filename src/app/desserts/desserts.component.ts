import { Component, OnInit } from '@angular/core';
import { Dessert } from '../shared/models/dessert.model';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

  desserts: Dessert[];

  constructor() { 
    this.desserts=[
      new Dessert("Panna cotta","Coulis fruits rouges, exotiques ou nutella",3.5),
      new Dessert("Tiramisu","Nutella speculoos ou café",3.5),
      new Dessert("Mousse au chocolat","",3.5)
    ]
  }

  ngOnInit(): void {
  }

}
