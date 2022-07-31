import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../alumno/interfaces/alumno.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  blocklyModule:boolean = true;
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

  mostrarMenu(resp:boolean){
    this.blocklyModule =resp;
  }

}
