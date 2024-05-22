import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  private API_PRODUCTOSCAR ="http://localhost:3000/carrito"

  postCart(productos:JSON):Observable<any>{
    return this.http.post(this.API_PRODUCTOSCAR, productos)
  }
  getCart(): Observable<any> {
    return this.http.get(this.API_PRODUCTOSCAR)
    
  }
  deleteProductoID(id:any):Observable<any>{
    return this.http.delete(`${this.API_PRODUCTOSCAR}/${id}`)
      }

}

