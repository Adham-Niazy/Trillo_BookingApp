import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsGuard implements CanActivate {

  constructor(private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = +next.url[2].path;
      if ( isNaN(id) || ( id  < 1 || id > 6 ) ) {
        alert('Invalid product Url');
        this.route.navigate(['/Hotels']);
        return false;
      }
      return true;
  }

}
