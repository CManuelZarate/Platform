import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [CardComponent, MenuComponent],
  exports:[
    CardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
