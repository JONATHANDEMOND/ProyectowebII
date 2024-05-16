import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  id:any; 
  nombre:any;
  descripcion:any;
  precio:any; 
  categoria:any;
  urlImagen:any;
  tablets:any;
  laptops: any;
  smartphones:any

servicio= inject(ProductosService)

guardar(datos:any){
  this.servicio.postProducto(datos.value).subscribe()
  window.location.reload()
}


}
