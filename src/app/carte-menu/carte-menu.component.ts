import { Component, OnInit } from '@angular/core';
import { Menu } from '../shared/models/menu.model';

@Component({
  selector: 'app-carte-menu',
  templateUrl: './carte-menu.component.html',
  styleUrls: ['./carte-menu.component.css']
})
export class CarteMenuComponent implements OnInit {
  menus: Menu[];

  constructor() {
    this.menus =[
      new Menu('Boum Boum Ciao','plat du jour', 8.50),
      new Menu ('Menu du jour','Plat du jour + dessert au choix + boisson au choix',12),
      new Menu ('Menu Pizza','Pizza 24 cm au choix + dessert au choix + boisson au choix', 11.50),
      new Menu ('Trio de Panzerottis','3 petits Panzerottis au choix + boisson au choix',10.50)

    ]
   }

  ngOnInit(): void {
  }

}

