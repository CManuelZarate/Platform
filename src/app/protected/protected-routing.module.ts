import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './alumno/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'alumno/dashboard',component:DashboardComponent},
      {path:'**',redirectTo:''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
