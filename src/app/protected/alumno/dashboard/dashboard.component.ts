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
  points:number = 450;
  pageSelect:number =1;

  mostrarInfo: boolean = false;
  mostrarTooltipLogro: boolean = false;
  posX: number = 0;
  posY: number = 0;
  posLogroX: number = 0;
  posLogroY: number = 0;
  cajaAncho: number = 0;
  cajaLogroAncho: number = 0;


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

  actualizarPosicion(event: MouseEvent) {
    this.mostrarInfo = true;
    //para tooltip izquierda
    let tooltipMedalla= <HTMLInputElement>document.getElementById('tooltip-medalla');
    if(this.mostrarInfo && tooltipMedalla){
      this.cajaAncho = tooltipMedalla.offsetWidth;
    }
    /* derecha
    this.posX = event.clientX + 10;
    this.posY = event.clientY + 10;
    */
    //tooltip hacia izaquierda
    this.posX = event.clientX - this.cajaAncho - 10;
    this.posY = event.clientY + 10;
  }
  actualizarPosicionLogro(event: MouseEvent) {
    this.mostrarTooltipLogro = true;
    //para tooltip izquierda
    let tooltipLogro= <HTMLInputElement>document.getElementById('tooltip-logro');
    if(this.mostrarTooltipLogro && tooltipLogro){
      this.cajaLogroAncho = tooltipLogro.offsetWidth;
    }
    /* derecha
    this.posX = event.clientX + 10;
    this.posY = event.clientY + 10;
    */
    //tooltip hacia izaquierda
    this.posLogroX = event.clientX - this.cajaLogroAncho - 10;
    this.posLogroY = event.clientY + 10;
  }

  ocultarCaja2() {
    this.mostrarInfo = false;
  }
  ocultarTooltipLogro() {
    this.mostrarTooltipLogro = false;
  }

  paginacion(pageSelect:number){
    this.pageSelect = pageSelect;
    /* ACTUALIZAR LA TABLA SEGUN LA PAGINA */
  }

  alumnosPag(){
    let cantXGrupo = 5;
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
