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
      medalla:"../../../assets/images/medalla-diamante.png",
      logro:"../../../assets/images/trabajo-equipo.png",
      points: 450,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"Jose",
      lastname: "Perez",
      medalla:"../../../assets/images/medalla-oro.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 320,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/medalla-oro.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/medalla-oro.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:".../../../assets/images/medalla-plata.png",
      logro:"../../../assets/images/medalla-plata.png",
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
