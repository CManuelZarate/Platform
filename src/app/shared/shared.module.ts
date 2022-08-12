import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { BreadcumbsComponent } from './breadcumbs/breadcumbs.component';



@NgModule({
  declarations: [CardComponent, NavbarComponent, TableComponent, MenuComponent, BreadcumbsComponent],
  exports:[
    CardComponent,
    NavbarComponent,
    TableComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
