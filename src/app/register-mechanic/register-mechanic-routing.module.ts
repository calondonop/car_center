import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterMechanicComponent } from './register-mechanic.component';


const routes: Routes = [
  {
    path: ``,
    component: RegisterMechanicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterMechanicRoutingModule { }
