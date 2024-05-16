import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';

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

}
