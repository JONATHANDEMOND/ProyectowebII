import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produc-sin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './produc-sin.component.html',
  styleUrl: './produc-sin.component.css'
})
export class ProducSinComponent {
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
    localStorage.removeItem('admin')
    localStorage.removeItem('user')
    window.location.href= 'home'
  }

}
