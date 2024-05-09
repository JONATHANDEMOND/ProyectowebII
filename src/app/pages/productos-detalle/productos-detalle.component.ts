import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductosComponent } from '../productos/productos.component';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productos-detalle.component.html',
  styleUrl: './productos-detalle.component.css'
})
export class ProductosDetalleComponent {
  constructor(private servicio:ProductosService){}
producto: any
id: any

ruta = inject(ActivatedRoute)



ngOnInit():void{
  this.ruta.params.subscribe(p=> {
    this.id =p['idProductos']

    this.servicio.getDatos(this.id).subscribe(d=>{
      this.producto=d;
    })


  })
}





}
