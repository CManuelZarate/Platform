import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './alumno/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { RetosComponent } from './alumno/retos/retos.component';
import { MaterialesComponent } from './alumno/materiales/materiales.component';
import { MicroaprendizajeComponent } from './alumno/microaprendizaje/microaprendizaje.component';
import { ProgramarComponent } from './alumno/programar/programar.component';
import { DescripcionRetosComponent } from './alumno/retos/descripcion-retos/descripcion-retos.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {path:'alumno/dashboard',component:DashboardComponent},
      {path:'alumno/retos',component:RetosComponent},
      {path:'alumno/retos/descripcion',component:DescripcionRetosComponent},
      /*{path:'alumno/materiales',component:MaterialesComponent},
       {path:'alumno/materiales/videos',component:},
      {path:'alumno/materiales/enlaces',component:},
      {path:'alumno/materiales/guias',component:},
      {path:'alumno/materiales/usoPlataforma',component:}, */
      {path:'alumno/microaprendizaje',component:MicroaprendizajeComponent},
      /* {path:'alumno/microaprendizaje/modulo',component:}, */
      {path:'alumno/programar',component:ProgramarComponent},
      {path:'**',redirectTo:''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
