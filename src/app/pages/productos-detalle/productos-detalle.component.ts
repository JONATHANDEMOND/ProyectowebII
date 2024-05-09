import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './productos-detalle.component.html',
  styleUrl: './productos-detalle.component.css'
})
export class ProductosDetalleComponent {
producto: any
id: any

ruta = inject(ActivatedRoute)

mensaje() {
  alert("Id del Producto: "+this.producto.id)
}



}
