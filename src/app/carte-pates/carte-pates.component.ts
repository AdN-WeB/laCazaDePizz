import { Component, OnInit } from '@angular/core';
import { Pate } from '../shared/models/pates.model';

@Component({
  selector: 'app-carte-pates',
  templateUrl: './carte-pates.component.html',
  styleUrls: ['./carte-pates.component.css']
})
export class CartePatesComponent implements OnInit {

  pates: Pate[];

  constructor() {
    this.pates= [
      new Pate("Allison Parker","Tagliatelles façon carbonara",9.9),
      new Pate("Mercedes","Caramela Ricotta épinard,sauce gorgonzola et noix",10.9),
      new Pate("Arthurito","Pâtes aux Chorizo et poivrons confits",10.9),
      new Pate("Monica","Linguini épinards,légumes confits,Pesto",10),
      new Pate("Ariadna","Agnolotti saumon,sauce saumon",11),
    
    ]
  }

  ngOnInit(): void {
  }

}
