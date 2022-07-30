import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interfaces/alumno.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name:string = "Carlos";
  lastname:string = "Zarate";
  grade:string = "4to";
  section:string = "C";
  email:string = "camazala@gmail.com";
  points:number = 150;
  pageSelect:number =1;

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
  alumnosTabla:Alumno[][]=[];

  constructor() {
    this.alumnosPag();
    
  }

  ngOnInit(): void {
  }

  /* paginacion(nro_elementos:number =10,alumnos:Alumno[]){

    const residuo = (alumnos.length) % nro_elementos;
    let paginas = Math.floor(alumnos.length /nro_elementos);
    if(residuo !== 0 ){
      paginas++;
    }
  
  } */
  paginacion(pageSelect:number){
    this.pageSelect = pageSelect;
    /* ACTUALIZAR LA TABLA SEGUN LA PAGINA */
  }

  alumnosPag(){
    let cantXGrupo = 1;
    const residuo = (this.alumnos.length) % cantXGrupo;
    let numGrupos= Math.floor(this.alumnos.length/cantXGrupo);
    if(residuo !== 0 ){
      numGrupos++;
    }
    let agrup:Alumno[]=[];
    
    for (let i = 0; i < numGrupos; i++) {
      let start = ((i)*cantXGrupo);
      let end= start + cantXGrupo-1;
      agrup = this.alumnos.slice(start,end);
      this.alumnosTabla.push(agrup);
      
    }

  }

}
