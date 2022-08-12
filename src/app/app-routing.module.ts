import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { MenuComponent } from './shared/menu/menu.component';
import { BreadcumbsComponent } from './shared/breadcumbs/breadcumbs.component';



const routes:Routes =[
  {
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'application',
    loadChildren: () => import ('./protected/protected.module').then(m => m.ProtectedModule)//,
    //canActivate: [ ValidarTokenGuard ],
    //canLoad: [ ValidarTokenGuard ]
  },
  {
    // loadChildren: () => import ('./shared/shared.module').then(m => m.SharedModule)//,
    path: 'menuentrada', component: MenuComponent
    //canActivate: [ ValidarTokenGuard ],
    //canLoad: [ ValidarTokenGuard ]
  },
  {
    // loadChildren: () => import ('./shared/shared.module').then(m => m.SharedModule)//,
    path: 'breadcumbs', component: BreadcumbsComponent
    //canActivate: [ ValidarTokenGuard ],
    //canLoad: [ ValidarTokenGuard ]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
