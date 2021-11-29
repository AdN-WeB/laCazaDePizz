import { Component, OnInit } from '@angular/core';
import { Panzerotti } from '../shared/models/panzerotti.model';

@Component({
  selector: 'app-carte-panzerotti',
  templateUrl: './carte-panzerotti.component.html',
  styleUrls: ['./carte-panzerotti.component.css']
})
export class CartePanzerottiComponent implements OnInit {

  panzerottis: Panzerotti[];

  constructor() { this.panzerottis=
  [
    new Panzerotti("Alberto","Tomate mozzarella jambon", 8),
    new Panzerotti("Prieto","Tomate mozzarella chorizo poivrons", 9),
    new Panzerotti("Murillo","Tomate mozzarella", 7),
    new Panzerotti("Rubio","Tomate mozzarella viande haché ricotta", 9),
    new Panzerotti("Gandilla","Tomate mozzarella poulet", 8.5),
    new Panzerotti("Sierra","Tomate mozzarella legumes", 8.5),
    new Panzerotti("Suarez","Tomate mozzarella mortadelle taleggio", 9),
    new Panzerotti("Tamayo","Tomate 4 fromages", 9),
  ]
}
  ngOnInit(): void {
  }

}
