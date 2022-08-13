import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { Alumno } from '../../alumno/interfaces/alumno.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, DoCheck {

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
      medalla:"../../../assets/images/medalla-plata.png",
      logro:"../../../assets/images/trabajo-equipo.png",
      points: 450,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"Jose",
      lastname: "Perez",
      medalla:"../../../assets/images/login-escudo.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 320,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/login-escudo.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/login-escudo.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
    {
      name:"carlos",
      lastname: "zarate",
      medalla:"../../../assets/images/login-escudo.png",
      logro:"../../../assets/images/medalla-plata.png",
      points: 150,
      email:"asda@asdas.com",
      grado: "4to",
      seccion: "C",
    },
  ]
  alumnosTabla:Alumno[][]=[];

  constructor(private router:Router) {
    this.alumnosPag();
  }
  
  ngDoCheck(): void {
    if(this.router.url === "/application/alumno/programar" ){
      console.log(this.router.url);
      this.blocklyModule = false;
    }else{
      this.blocklyModule = true;
    }
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

}
