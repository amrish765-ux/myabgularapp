import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Ensure this code only runs in the browser (e.g., not SSR)
  if (typeof window !== 'undefined') {
    const loggedUser = localStorage.getItem('loginkey');
    if (loggedUser != null) {
      return true; // Allow access
    } else {
      router.navigateByUrl('login'); // Redirect to login if not logged in
      return false; // Deny access
    }
  }

  // Deny access if running in a non-browser environment
  router.navigateByUrl('login');
  return false;
};
