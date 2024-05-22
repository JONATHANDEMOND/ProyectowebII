
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductosDetalleComponent } from './pages/productos-detalle/productos-detalle.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { loginGuard, registroGuard } from './guards/login.guard';
import { CarritoComComponent } from './pages/carrito-com/carrito-com.component';

export const routes: Routes = [

    { path: 'home', component:HomeComponent },
    {path: 'login' ,component:LoginComponent,canActivate:[loginGuard]} ,
    {path:'registro', component:RegistroComponent, canActivate:[registroGuard]},
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'contactos', component: ContactosComponent},
    {path:'formulario', component:FormularioComponent},
    {path:'carrito',component:CarritoComComponent},
    { path: 'productos/:idProductos', component: ProductosDetalleComponent},
    
    

    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: '**', component:Error404Component}


];
