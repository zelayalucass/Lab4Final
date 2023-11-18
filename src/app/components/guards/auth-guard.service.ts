/*import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';



function checkAuthStatus(requiredRole: 'admin' | 'user'): boolean | Observable<boolean>{
  const authService = inject(AuthService);
  const  router = inject(Router);
  const user:User | undefined = authService.currentUser

  return authService.checkStatusAutenticacion()
                    .pipe(
                      tap( estaAutenticado => {
                        debugger
                        if(!estaAutenticado) 
                        {
                          router.navigate(['/auth/login'])
                        }
                        else
                        {
                          if ((requiredRole === 'admin' && !user?.isAdmin) || (requiredRole === 'user' && user?.isAdmin)) {
                            router.navigate(['/error/403']); // Redirige a una página de acceso no autorizado
                          }
                        }
                        
                      } )
                    )
}



export const AuthGuard = (requiredRole: 'admin' | 'user') => {

  return checkAuthStatus(requiredRole)
}*/
// auth-guard.service.ts

// auth-guard.service.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const requiredRole = this.getRequiredRole(route);

    return this.authService.checkStatusAutenticacion().pipe(
      tap((estaAutenticado) => {
        if (!estaAutenticado) {
          this.router.navigate(['/auth/login']);
        } else {
          const user = this.authService.currentUser;

          if ((requiredRole === 'admin' && !user?.isAdmin) || (requiredRole === 'user' && user?.isAdmin)) {
            this.router.navigate(['/error/403']);
          }
        }
      })
    );
  }

  private getRequiredRole(route: ActivatedRouteSnapshot): 'admin' | 'user' {
    // Accede a la propiedad utilizando corchetes
    return route.data['requiredRole'] || 'user'; // Valor predeterminado 'user' si no se especifica en la ruta
  }
}
