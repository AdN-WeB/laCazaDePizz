import { Component, OnInit } from '@angular/core';
import { Boisson } from '../shared/models/boisson.model';

@Component({
  selector: 'app-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent implements OnInit {

  boissons:Boisson [];

  constructor() { 
    this.boissons =[
      new Boisson("Soda","33cl",1.5),
      new Boisson("Soda","1 Litre",3.5),
      new Boisson("Eau","50cl",1),
      new Boisson("Eau","1 Litre",1.5),
      new Boisson("Bierre","",2),
      new Boisson("Panaché","",1.8),
      new Boisson("Vin rosé","75cl",8)
    ]
  }

  ngOnInit(): void {
  }

}
