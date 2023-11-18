import { inject } from '@angular/core';

import { Router} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

function checkAuthStatus(): boolean | Observable<boolean>{
  const authService = inject(AuthService);
  const  router = inject(Router);
  return authService.checkStatusAutenticacion()
                    .pipe(
                      tap( estaAutenticado => {
                        if(estaAutenticado){
                          router.navigate(['/landing'])

                        }
                      }),
                      map(estaAutenticado => {return !estaAutenticado})
                    )
}

export const LoginGuard = () => {
  return checkAuthStatus()
}