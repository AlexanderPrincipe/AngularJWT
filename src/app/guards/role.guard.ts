import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Route,
	Router,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import decode from 'jwt-decode';
import { User, UserConstructor } from '../interfaces/interfaces';

@Injectable({
	providedIn: 'root'
})
export class RoleGuard implements CanActivate {
	decodificado: User = new UserConstructor();
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(router: ActivatedRouteSnapshot): boolean {
		const expectedRole = router.data['expectedRole'];
		const token = localStorage.getItem('token');
		this.decodificado = decode(token!);
		
		console.log('decodificado', this.decodificado);
		if (this.decodificado.roleId !== expectedRole) {
			console.log('USUARIO NO AUTORIZADO PARA LA VISTA', this.decodificado.roleId, expectedRole);
			this.router.navigate(['login']);
			return false;
		}
		console.log('USUARIO AUTORIZADO PARA LA VISTA');
		return true;
	}
}
