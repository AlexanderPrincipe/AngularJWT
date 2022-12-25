import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate() {
		if (!this.authService.isAuth()) {
			console.log('Token no es válido o ya expiró');
			this.router.navigate(['login']);
			return false;
		}
		return true;
	}
}
