import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './alumno/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './pages/main/main.component';
import { RetosComponent } from './alumno/retos/retos.component';
import { MaterialesComponent } from './alumno/materiales/materiales.component';
import { MicroaprendizajeComponent } from './alumno/microaprendizaje/microaprendizaje.component';
import { ProgramarComponent } from './alumno/programar/programar.component';


@NgModule({
  declarations: [DashboardComponent, MainComponent, RetosComponent, MaterialesComponent, MicroaprendizajeComponent, ProgramarComponent],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ProtectedModule { }
