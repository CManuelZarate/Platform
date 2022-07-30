import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/protected/alumno/interfaces/alumno.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  alumnos:Alumno[] = [
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/login-escudo.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/login-escudo.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/login-escudo.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
