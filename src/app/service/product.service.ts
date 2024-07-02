import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, map } from 'rxjs'; //Agregar map
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL_SERVICES = 'http://localhost:8080';
  private urlBase = this.URL_SERVICES + '/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'}); //Definido a mano

  //Inyectar http
  constructor(private http:HttpClient) { }

  //Listamos todos los productos con su precio final de venta calculado
  getProductList(): Observable<any>{
    console.log("Llamando a REST: " + this.urlBase + '/productosTotal');
    return this.http.get(this.urlBase + '/productosTotal').pipe(
      map(response => response as Product[])
    );
  }

  //Detalles de un producto
  public details(codigo: number): Observable<Product>{
    console.log("Llamando a REST: " + this.urlBase + "/productos");
    return this.http.get<Product>(this.urlBase + "/productos/" + codigo);
  }

  //Método para registrar un producto
  createProducto(product: Object): Observable<Object>{
    return this.http.post(this.urlBase + "/producto", product, {headers:this.httpHeaders})
  }

}
