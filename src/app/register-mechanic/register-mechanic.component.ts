import { Mecanico } from './../shared/models/mechanic';
import { MechanicService } from './../shared/services/mechanic/mechanic.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-mechanic',
  templateUrl: './register-mechanic.component.html',
  styleUrls: ['./register-mechanic.component.css']
})
export class RegisterMechanicComponent implements OnInit {

  form: FormGroup;

  maxCharacters = 30;

  constructor(
    private fb: FormBuilder,
    private mechanicService: MechanicService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      tipoDocumento: ['', [Validators.required]],
      documento: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      primerNombre: ['', [Validators.required, Validators.maxLength(this.maxCharacters)]],
      segundoNombre: ['', [Validators.maxLength(this.maxCharacters)]],
      primerApellido: ['', [Validators.required, Validators.maxLength(this.maxCharacters)]],
      segundoApellido: ['', [Validators.maxLength(this.maxCharacters)]],
      celular: ['', [Validators.required, Validators.maxLength(10)]],
      direccion: ['', [Validators.required, Validators.maxLength(200)]],
      email: ['', [Validators.required, Validators.email]],
      estado: ['', [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.form.valid) {
      this.mechanicService.guardarMecanico(this.form.getRawValue()).subscribe(
        (mecanico: Mecanico) => console.log(mecanico),
        error => console.error(error)
      );
    }
  }

}

