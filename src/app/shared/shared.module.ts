import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [CardComponent, NavbarComponent, TableComponent, MenuComponent],
  exports:[
    CardComponent,
    NavbarComponent,
    TableComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }