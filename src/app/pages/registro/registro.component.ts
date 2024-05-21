import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  email:any;
  password:any;
  type:any;

  servicio = inject(LoginService)

  registro(data:any){
    this.servicio.postRegistro(data.value).subscribe()
  }

}
