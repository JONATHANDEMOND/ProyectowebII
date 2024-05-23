import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('user')== 'true'){
    return true
  }else{
    return true;
  }
}
  export const registroGuard: CanActivateFn = (route, state) => {
    if( localStorage.getItem('user')== 'true'){
      return true
    }else{
      return true;
    }
}
export const nosotrosGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('admin')== 'true'){
    return true
  }else{
    return false;
  }
}
export const productosGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('admin')== 'true'){
    return true
  }else{
    return false;
  }
}
export const contactosGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('user')== 'true'){
    return true
  }else{
    return true;
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
  if( localStorage.getItem('user')== 'true'){
    return true
  }else{
    return false;
  }
}


