import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrito-com',
  standalone: true,
  imports: [FormsModule,RouterLink,CurrencyPipe],
  templateUrl: './carrito-com.component.html',
  styleUrl: './carrito-com.component.css'
})
export class CarritoComComponent {
id:any
des:any
precio:any
urlImagen:any
productos: any
servicio = inject(CartService)



subtotal: number = 0;
iva: number = 0;
total: number = 0;


agregarCarrito(data:any){
  this.servicio.postCart(data).subscribe()
  
}

eliminar(id:any){
  this.servicio.deleteProductoID(id).subscribe()
  window.location.reload()
}
ngOnInit(){
  this.servicio.getCart().subscribe(p=>{
    this.productos=p
  } )

} 

calcularTotales(): void {
  this.subtotal = this.productos.reduce((sum:any, item:any) => sum + item.precio, 0);
  this.iva = this.subtotal * 0.15;
  this.total = this.subtotal + this.iva;
}


}
