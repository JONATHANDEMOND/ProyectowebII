import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
productos:any

servicio= inject(ProductosService)

ruta = inject(ActivatedRoute)
guardar(datos:any){
  this.servicio.putProducto(datos.value).subscribe()
  window.location.reload()
}

ngOnInit(){
  this.ruta.params.subscribe(r=>{
    this.servicio.getDatos(r['idFormulario']).subscribe(p=>{
      this.productos=p
      this.precio=p.precio,
      this.id=p.id,
      this.descripcion=p.des,
      this.urlImagen=p.urlImagen,
      this.nombre=p.nombre
    

    } )
  })
 

} 



}
