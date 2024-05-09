import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  servicio = inject(ProductosService)
  productos: any

  ngOnInit(): void {
   this.servicio.getProductos().subscribe(p=>{
    this.productos=p
   })
  }

}
