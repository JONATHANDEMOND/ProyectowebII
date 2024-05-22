import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  private API_PRODUCTOSCAR ="http://localhost:3000/carrito"
  postLogin(usuario:JSON):Observable<any>{
    return this.http.post(this.API_PRODUCTOSCAR, usuario)
  }
 

}

