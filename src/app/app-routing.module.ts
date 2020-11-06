import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./register-mechanic/register-mechanic.module').then(childModule => childModule.RegisterMechanicModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list-mechanic/list-mechanic.module').then(childModule => childModule.ListMechanicModule)
  },
  { path: '**', redirectTo: 'register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
