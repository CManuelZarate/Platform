import { Component, Input, OnInit } from '@angular/core';
import { arrRetos } from '../../utils';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() objCargar :any ={};
  type : string = "Modulo";//modulo,reto
  tittle:string = "Crear secuencias";
  numberCard:number = 0;// 1 , 2 ,3..
  state :boolean =true;//true: visitado o completado,
  description: string = "Some quick example text to build on the card title and make up the bulk of the card's content.";//descripcion del modulo o reto
  constructor() { }

  ngOnInit(): void {
  }

}
