import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { Mecanico } from './../../models/mechanic';


@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  constructor(
    private http: HttpClient
  ) { }

  guardarMecanico(mecanico: Mecanico): Observable<Mecanico> {
    return this.http.post<Mecanico>(environment.apiUrl.mecanico, mecanico).pipe(
      map((response: any) => response as Mecanico)
    );
  }

  listarMecanico(): Observable<Mecanico[]> {
    return this.http.get<Mecanico[]>(environment.apiUrl.mecanico).pipe(
      map((response: any) => response as Mecanico[])
    );
  }
}
