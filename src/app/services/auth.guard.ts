import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const loggedUser = localStorage.getItem('loginkey')
  if (loggedUser != null) {
    return true;
  } else {
    router.navigateByUrl('login')
    return false;
  }



};
