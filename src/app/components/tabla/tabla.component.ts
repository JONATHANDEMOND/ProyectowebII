import { Component, Inject, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { log } from 'console';

@Component({


  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  id:any; 
  nombre:any;
  descripcion:any;
  precio:any; 
  categoria:any;
  tablets:any;
  laptops: any;
  smartphones:any
  urlImagen:any
  servicio = inject(ProductosService)
  productos: any
  servicioCar = inject(CartService)

  ngOnInit(): void {
   this.servicio.getProductos().subscribe(p=>{
    this.productos=p
   })
  }

  eliminar(id:any){
    this.servicio.deleteProductoID(id).subscribe()
    window.location.reload()
  }
  guardar(datos:any){
    this.servicio.postProducto(datos.value).subscribe()
    window.location.reload()
  }

  agregarCarrito(data:any){
    this.servicioCar.postCart(data).subscribe()
  console.log(data)
  }

  cerrar(){
    localStorage.removeItem('acceso')
   
    window.location.href= 'home'
  }
}
