import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [CardComponent, NavbarComponent, TableComponent],
  exports:[
    CardComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
