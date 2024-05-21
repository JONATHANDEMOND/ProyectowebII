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

