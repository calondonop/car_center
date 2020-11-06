import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { RegisterMechanicComponent } from './register-mechanic.component';
import { RegisterMechanicRoutingModule } from './register-mechanic-routing.module';



@NgModule({
  declarations: [RegisterMechanicComponent],
  imports: [
    CommonModule,
    RegisterMechanicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class RegisterMechanicModule { }
