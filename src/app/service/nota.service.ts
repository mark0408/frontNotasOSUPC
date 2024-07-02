import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, map } from 'rxjs'; //Agregar map
import { nota } from '../model/nota';

@Injectable({
  providedIn: 'root'
})
export class notaService {
  URL_SERVICES = 'http://localhost:8080';
  private urlBase = this.URL_SERVICES + '/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'}); //Definido a mano

  //Inyectar http
  constructor(private http:HttpClient) { }

  //Listamos todos los notaos con su precio final de venta calculado
  getnotaList(): Observable<any>{
    console.log("Llamando a REST: " + this.urlBase + '/notaTotal');
    return this.http.get(this.urlBase + '/notaTotal').pipe(
      map(response => response as nota[])
    );
  }

  //Detalles de un notao
  public details(codigo: number): Observable<nota>{
    console.log("Llamando a REST: " + this.urlBase + "/nota");
    return this.http.get<nota>(this.urlBase + "/nota/" + codigo);
  }

  //Método para registrar un notao
  createnota(nota: Object): Observable<Object>{
    return this.http.post(this.urlBase + "/nota", nota, {headers:this.httpHeaders})
  }

}
