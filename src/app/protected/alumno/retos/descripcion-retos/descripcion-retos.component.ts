import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descripcion-retos',
  templateUrl: './descripcion-retos.component.html',
  styleUrls: ['./descripcion-retos.component.css']
})
export class DescripcionRetosComponent implements OnInit {
  puntos='120';
  nivel='Intermedio';
  consejo='Puede revisar el modulo sobre sensores para guiarse'

  constructor() { }

  ngOnInit(): void {
  }
}

class Descripcion{
  public puntos: string;

    constructor(){
      this.puntos='100';
    }
};

let descripcion1= new Descripcion();


