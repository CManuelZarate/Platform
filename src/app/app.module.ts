import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BlocklyComponent } from './blockly/blockly.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
//import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    BlocklyComponent
  ],
  /* exports:[
    BlocklyComponent
  ], */
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
    //FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
