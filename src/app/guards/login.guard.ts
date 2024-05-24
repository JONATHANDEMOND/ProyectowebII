import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('admin')== 'true'){
    return true
  }else{
    return true;
  }
}
  export const registroGuard: CanActivateFn = (route, state) => {
    if( localStorage.getItem('acceso')== 'true'){
      return false
    }else{
      return true;
    }
}

export const productosGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('admin')== 'true'){
    return true
  }else{
    return false;
  }
}

export const formularioGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('admin')== 'true'){
    return true
  }else{
    return false;
  }
}
export const carritoGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('acceso')== 'true'){
    return true
  }else{
    return false;
  }
}




