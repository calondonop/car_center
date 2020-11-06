import { Mecanico } from './../shared/models/mechanic';
import { MechanicService } from './../shared/services/mechanic/mechanic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-mechanic',
  templateUrl: './list-mechanic.component.html',
  styleUrls: ['./list-mechanic.component.css']
})
export class ListMechanicComponent implements OnInit {

  mecanicos: Mecanico[] = [];

  constructor(
    private mechanicService: MechanicService
  ) { }

  ngOnInit(): void {
    this.listarMecanico();
  }

  listarMecanico(): void {
    this.mechanicService.listarMecanico().subscribe(
      (mecanicos: Mecanico[]) => this.mecanicos = mecanicos,
      error => console.error(error)
    );
  }

  asignarMecanico(mecanico: Mecanico): void {
    mecanico.estado = '0';
  }

  estaAsignado(mecanico: Mecanico): boolean {
    return mecanico.estado === '0';
  }

}
