import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retos',
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.css']
})
export class RetosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  descripcion(){
    this.router.navigateByUrl('application/alumno/retos/descripcion');
  }

}
