import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (localStorage.getItem('currentUser')) {
      if ((next.params.username===JSON.parse(localStorage.getItem('currentUser')).username) ||
       (next.queryParams.username===JSON.parse(localStorage.getItem('currentUser')).username))
      {
        return true;
      }
      
    }
    this.router.navigate(['']);
    return false
  }
}
