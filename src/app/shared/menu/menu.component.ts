import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  dashboard(){
    this.router.navigateByUrl('application/alumno/dashboard');
  }
  retos(){
    this.router.navigateByUrl('application/alumno/retos');
  }
  materiales(){
    this.router.navigateByUrl('application/alumno/materiales');
  }
  microAprendizaje(){
    this.router.navigateByUrl('application/alumno/microaprendizaje');
  }
  programar(){
    this.router.navigateByUrl('application/alumno/programar');
  }

}
