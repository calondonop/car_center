import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMechanicComponent } from './list-mechanic.component';


const routes: Routes = [
  {
    path: ``,
    component: ListMechanicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMechanicRoutingModule { }
