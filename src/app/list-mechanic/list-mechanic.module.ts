import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ListMechanicRoutingModule } from './list-mechanic-routing.module';
import { ListMechanicComponent } from './list-mechanic.component';



@NgModule({
  declarations: [ListMechanicComponent],
  imports: [
    CommonModule,
    ListMechanicRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ListMechanicModule { }
