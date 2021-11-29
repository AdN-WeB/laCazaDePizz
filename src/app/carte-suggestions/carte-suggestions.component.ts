import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../shared/models/suggestion.model';

@Component({
  selector: 'app-carte-suggestions',
  templateUrl: './carte-suggestions.component.html',
  styleUrls: ['./carte-suggestions.component.css']
})
export class CarteSuggestionsComponent implements OnInit {

  suggestions: Suggestion[];

  constructor() {
    this.suggestions= [
      new Suggestion("M16","Cassolette de ravioles aux saumon", 12.5),
      new Suggestion("Glock17","Cassolette de ravioles aux gorgonzola et noix",12),
      new Suggestion("Pistolet berreta","Cassolette de ravioles aux cèpes",13),
      new Suggestion("Mitrailleuse Browing","Lasagne à la bolognaise",9.5),
      new Suggestion("Lance-Flame","Lasagne saumon et épinards", 11),
      new Suggestion("Grenade", "Polpette à la tomate et tagliatelles",9.5)
    ]
   }

  ngOnInit(): void {
  }

}
