import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {}

    private API_PRODUCTOS ="http://localhost:3000/productos"
  //////LEEER - GET/////////
  getProductos(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS)
  }


  getDatos(id:any):Observable<any>{
    return this.http.get(`${this.API_PRODUCTOS}/${id}`)
  }

  deleteProductoID(id:any):Observable<any>{
return this.http.delete(`${this.API_PRODUCTOS}/${id}`)
  }

  postProducto(productos:JSON):Observable<any>{
    return this.http.post(this.API_PRODUCTOS, productos)
  }


  putProducto(producto:any):Observable<any>{
    return this.http.put(`${this.API_PRODUCTOS}/${producto.id}`, producto)
  }
}


