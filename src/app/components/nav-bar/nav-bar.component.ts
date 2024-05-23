import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  acceso:any
  admin:any
  ngOnInit(): void {
   if(typeof localStorage== undefined){
console.log('no')
   }else{
    this.acceso=localStorage.getItem('acceso')
    this.admin=localStorage.getItem('admin')
   }
  }




}
